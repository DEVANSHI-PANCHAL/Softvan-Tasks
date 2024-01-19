
const Login = () => {
  return (
    <div>
      <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Chat application</span>
            <span className="title">
                Login
            </span>
            <form action="">
                <input type ="email" placeholder="Email" />
                <input type= "password" placeholder="Password"/>
              
                <button>Login</button>
            </form>
            <p>Don't have an account yet?<a href="#">Sign up Here</a></p>
        </div>
      </div>
    </div>
  )
}

export default Login;

