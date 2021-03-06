import './AnimeContainers.css';
import { NavLink } from "react-router-dom";
import { useRef } from 'react';
import { useEffect, useState } from "react";
import SwipeableTemporaryDrawer from "../components/Drawer/SwipeableTemporaryDrawer"
import Logo1 from "../images/logo1.png"
import Logo2 from "../images/logo2.png"
import chopper from './chopper.png'


const AnimeContainer = ({ isLogin, setIsLogin, currentAnimeAcc, setCurrentAnimeAcc}) =>{

    // checking if the account for the user is logged in
    const handleLogin = (event) => {


        if (isLogin && currentAnimeAcc.length != 0) {
            setIsLogin(!isLogin);
            setCurrentAnimeAcc({});
            console.log(isLogin);
            return;
        }
    }

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", transitionNavBar);
      return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);
  
    return (
      <div className={`nav ${show && "nav-black"}`}>
        <div className="nav-contents">
          <div className="nav-drawer">
            <NavLink to="/">
              <img
                className="nav-logo"
                src={chopper}
                alt="Animu logo"
              />
            </NavLink>
            <SwipeableTemporaryDrawer/>
  
            
          </div>
          <nav className="nav-bar">
<ul className="nar-ul">
    <li><NavLink to='/home'>Home</NavLink></li>
    <li><NavLink to='/explore'>Explore</NavLink></li>
    <div className="dropdown">
    <button className="dropbtn"> Account</button>
        <div className="dropdown-content" styleleft="left:0">
        <NavLink to='/account'>{isLogin ? "Account" : "Sign Up"}</NavLink>
       <NavLink to='/login'  onClick={handleLogin}>{isLogin ? "Logout" : "Login"}</NavLink>
        </div>
    </div>
</ul>
</nav> 
        
      
        </div>
      </div>
    );
}

export default AnimeContainer;





//  <nav className="nav-bar">
// <ul className="nar-ul">
//     <li><Link to='/home'>Home</Link></li>
//     <li><Link to='/explore'>Explore</Link></li>
//     <div className="dropdown">
//     <button className="dropbtn"> Account</button>
//         <div className="dropdown-content" styleleft="left:0">
//         <Link to='/account'>{isLogin ? "Account" : "Sign Up"}</Link>
//        <Link to='/login'  onClick={handleLogin}>{isLogin ? "Logout" : "Login"}</Link>
//         </div>
//     </div>
// </ul>
// </nav> 