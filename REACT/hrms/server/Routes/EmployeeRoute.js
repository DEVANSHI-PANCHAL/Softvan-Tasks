import express from 'express';
import { MongoClient } from 'mongodb';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();

const uri = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) return console.error(err);
  console.log('Connected to MongoDB');
});

router.post('/employee_login', async (req, res) => {
  try {
    const employee = await client.db('<dbname>').collection('employee').findOne({ email: req.body.email });

    if (!employee) return res.json({ loginStatus: false, Error: 'wrong email or password' });

    bcrypt.compare(req.body.password, employee.password, (err, response) => {
      if (err) return res.json({ loginStatus: false, Error: 'Wrong Password' });
      if (response) {
        const email = employee.email;
        const token = jwt.sign({ role: 'employee', email, id: employee._id }, 'jwt_secret_key', { expiresIn: '1d' });
        res.cookie('token', token);
        res.json({ loginStatus: true, id: employee._id });
      }
    });

  } catch (err) {
    console.error(err);
    res.json({ loginStatus: false, Error: 'Query error' });
  }
});

router.get('/detail/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const employee = await client.db('<dbname>').collection('employee').findOne({ _id: new MongoClient.ObjectID(id) });

    if (!employee) return res.json({ Status: false });

    res.json(employee);

  } catch (err) {
    console.error(err);
    res.json({ Status: false });
  }
});

router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ Status: true });
});

export { router as EmployeeRouter };