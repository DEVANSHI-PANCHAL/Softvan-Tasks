import React from 'react'
import Card from '../UI/Card'
import classes from '../UI/Card.module.css'

const AddUser = () => {
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
  return (
    <Card className = {classes.input}>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input type='text' class="inputs">
        </input>
        <label htmlFor='age'>age</label>
        <input type='number' class="inputs">
        </input>
        <button>Submit</button>
      </form>
    </Card>
  )
}

export default AddUser
