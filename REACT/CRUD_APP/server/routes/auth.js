const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcryptjs");
const Joi = require("joi");

// router.post("/", async (req, res) => {
//     try {
//       const { error } = validate(req.body);
//       if (error)
//         return res.status(400).send({ message: error.details[0].message });
  
//       const user = await User.findOne({ email: req.body.email });
//       if (!user)
//         return res.status(401).send({ message: "Invalid Email or Password" });
  
//       const validPassword = await bcrypt.compare(
//         req.body.password,
//         user.password
//       );
//       if (!validPassword)
//         return res.status(401).send({ message: "Invalid Email or Password" });
  
//       const token = user.generateAuthToken();
//       res.status(200).send({ data: token, message: "logged in successfully" });
//     } catch (error) {
//       console.error("Error in login route:", error); // Add this line for detailed error logging
//       res.status(500).send({ message: "Internal Server Error" });
//     }
//   });
  

const jwt = require('jsonwebtoken');

router.post("/", async (req, res) => {
  try {
    // Validate request body
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    // Find user by email
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(401).send({ message: "Invalid Email or Password" });

    // Check password
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword)
      return res.status(401).send({ message: "Invalid Email or Password" });

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.status(200).send({ data: token, message: "Logged in successfully" });
  } catch (error) {
    console.error("Error in login route:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = router;
