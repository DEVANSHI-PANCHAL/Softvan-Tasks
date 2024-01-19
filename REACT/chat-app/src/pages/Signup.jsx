import Add from '../img/addAvatar.png'

const Signup = () => {
  return (
    <div>
      <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Chat application</span>
            <span className="title">
                Signup
            </span>
            <form action="">
                <input type="text" placeholder="Display Name" />
                <input type ="email" placeholder="Email" />
                <input type= "password" placeholder="Password"/>
                <input type="file" id="file" style={{display:"none"}}/>
                <label htmlFor="file">
                  <img src={Add} alt="add avatar" />
                  <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Already have an account <a href="#">Login Here</a></p>
        </div>
      </div>
    </div>
  )
}

export default Signup

