import './Signin.css';
import { Link } from "react-router-dom"; 


function Signin() {
    return (
    <div className="Signin">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Jomhuria&family=Josefin+Sans&family=Mitr:wght@200&display=swap" rel="stylesheet"></link>
      <ul className="nav-headers">
        <li className="nav-item" id='mainpg'>
          <Link to='/'>DB Theme Park</Link>
        </li>
        <li className="nav-item">About</li>
        <li className="nav-item" id='signup'>
            {/* Endpoint to route to Signup component */} 
            <Link to="/Signup">Sign up</Link> 
        </li>
        <li className="nav-item">Contact</li>
      </ul>
      <div className="signin-body">
        <form className="signin-form">
          <h3>Sign in</h3>

          <label for="username">Username</label>
          <input type="text" placeholder="Username" id="username"/>

          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password"/>

          <button className="login-button">
            <Link to='/Visitorpage'>Log In</Link>
            </button>
        </form>
      </div>
      
    </div>
    );
}

export default Signin;
