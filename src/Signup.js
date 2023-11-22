import './Signup.css';
import { Link } from "react-router-dom"; 

function Signup() {
    return (
    <div className="Signup">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Jomhuria&family=Josefin+Sans&family=Mitr:wght@200&display=swap" rel="stylesheet"></link>
      <ul className="nav-headers-su">
        <li className="nav-item-su" id='mainpg'>
        <Link to='/'>DB Theme Park</Link>
        </li>
        <li className="nav-item-su">About</li>
        <li className="nav-item-su" id='signin'>
            {/* Endpoint to route to Signin component */} 
            <Link to="/Signin">Sign in</Link> 
        </li>
        <li className="nav-item-su">Contact</li>
      </ul>
      <img src='https://townsquare.media/site/11/files/2022/02/attachment-grace-ho-zej4HPQLR5o-unsplash-e1643878973835.jpg' alt='Theme Park' className='img'></img>
      <div className="signup-body">
        <form className="signup-form">
          <h3>Sign up</h3>

          <label for="username">Email</label>
          <input type="text" placeholder="Email" id="email"/>

          <label for="username">Username</label>
          <input type="text" placeholder="Username" id="username"/>

          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password"/>

          <button className="signup-button">
            <Link to='/Signin'>Sign up</Link>
          </button>
        </form>
      </div>
      
    </div>
    );
}

export default Signup;
