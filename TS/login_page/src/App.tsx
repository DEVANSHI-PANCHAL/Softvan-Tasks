
import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <div className="login-box">
      <div className="login-header">
        <header>Login</header>
      </div>
      <div className="input-box">
        <input type="text" className="input-field" placeholder='Email' autoComplete='off' required></input>
      </div>
      <div className="input-box">
        <input type="password" className="input-field" placeholder='Password' autoComplete='off' required></input>
      </div>
      <div className="forgot">
        <section>
          <input type="checkbox" id = "check"></input>
          <label htmlFor="check">Remember me</label>
        </section>
        <section>
          <a href="#">Forgot password</a>
        </section>
      </div>
      <div className="input-submit">
      <button className="submit-btn" id="submit"></button>
            <label htmlFor="submit">Sign In</label>
      </div>
      <div className="sign-up-link">
        <p>Don't have an account yet? <Link to ="#">Sign Up</Link></p>
      </div>

    </div>
    </>
  )
}

export default App
