import React, { useEffect } from 'react';
import logo from "./Imgs/o6u logo.jpg";   
import styles from "./Header.module.css";
import { Link, NavLink } from 'react-router-dom';
import Login from '../../Pages/Login/Login';
import axios from 'axios';

export default function Header({userData}) {
  const logOut=async ()=>{
   await axios.delete('https://applied-of-art-1.onrender.com/api/v1/auth/logout')
  }
  return (
    <>
      {/* Header 1 */}
      <header className={styles.header1}>
        <div className="container  ">
            <div className={styles.navbar}>
              <ul className="d-inline-flex">
                  <li><p>October 6 University</p></li>
                  <li><img src={logo} alt="/" /></li>
                  <li><p>Faculty of Applied Arts</p></li>
              </ul>

              <div className={`${styles.icons} text-end`}>
              {/* {userData ? (
                <>
                  <Link to="Profile">
                    <i className="fa-regular fa-circle-user  mx-3" style={{ color: '#07385e' }}></i>
                  </Link>
                  <Link to="Logout">
                    <i class="fa-solid fa-arrow-right-from-bracket mx-2" style={{ color: '#07385e' }}></i>
                  </Link>
                </>) : (
                <>
                  <Link to="loginHome">
                    <i className="fa-regular fa-user mx-2" style={{ color: '#07385e' }}></i>
                  </Link>
                  <Link to="Register">
                    <i className="fa-solid fa-plus mx-2" style={{ color: '#07385e' }}></i>
                  </Link>
                </>)
              } */}
                  <Link to="loginHome">
                    <i className="fa-regular fa-user mx-2" style={{ color: '#07385e' }}></i>
                  </Link>
                  <Link to="Register">
                    <i className="fa-solid fa-plus mx-2" style={{ color: '#07385e' }}></i>
                  </Link>
                  <Link to="Profile">
                    <i className="fa-regular fa-circle-user  mx-3" style={{ color: '#07385e' }}></i>
                  </Link>
                  <button onClick={logOut}>
                    <i class="fa-solid fa-arrow-right-from-bracket mx-2" style={{ color: '#07385e' }}></i>
                  </button>              
              </div>           
            </div>        
        </div>
      </header>


      {/* Header 2 */}
      <header className={styles.header2}>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${styles.collapse} navbar-collapse`} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className={`${styles.navItem} nav-item`}>
                  <NavLink className={`${styles.navLink} nav-link `} aria-current="page" to="/">Home</NavLink>
                </li>
                <li className={`${styles.navItem} nav-item`}>
                  <Link className={`${styles.navLink} nav-link `} aria-current="page" to="aboutHome">About</Link>
                </li>
                <li className={`${styles.navItem} nav-item`}>
                  <Link className={`${styles.navLink} nav-link `} aria-current="page" to="gallery">Gallery</Link>
                </li>
                <li className={`${styles.navItem} nav-item dropdown`}>
  <Link className={`${styles.navLink} nav-link dropdown-toggle`} to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Departments
  </Link>
  <ul className={`${styles.dropdownMenu} dropdown-menu`} aria-labelledby="navbarDropdown">
    <li><Link className="dropdown-item" to="productDesign">Product design</Link></li>
    <li><Link className="dropdown-item" to="Fashion">Fashion</Link></li>
    <li><Link className="dropdown-item" to="InteriorDesign">Interior design</Link></li>
    <li><Link className="dropdown-item" to="ADV">Advertising</Link></li>
    <li><Link className="dropdown-item" to="Cinema">Cinematography and Photography</Link></li>
  </ul>
</li>

                <li className={`${styles.navItem} nav-item`}>
                  <Link className={`${styles.navLink } nav-link active`} aria-current="page" to="eventsAndNews">News&Events</Link>
                </li>
                <li className={`${styles.navItem} nav-item`}>
                  <Link className={`${styles.navLink } nav-link active`} aria-current="page" to="educationHome">Education</Link>
                </li>
                <li className={`${styles.navItem} nav-item`}>
                  <Link className={`${styles.navLink } nav-link active`} aria-current="page" to="ai">AI</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
