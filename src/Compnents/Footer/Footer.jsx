import React from 'react';
import styles from "./Footer.module.css";
import o6uLogo from "./Imgs/o6u logo.jpg";


export default function Footer() {
  return (               
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className={`list text-center ${styles.lo1}`}>
              <div className="new">
                <img src={o6uLogo} alt="" />
              </div>
              <p>
                O6U-Faculty of Applied Arts 
              </p>
              <ul className={`list2 ${styles.list2}`}>
                <li><i className="fab fa-facebook" style={{ color: '#0453d3' }}></i></li>
                <li><i className="fab fa-twitter" style={{ color: '#0453d3' }}></i></li>
                <li><i className="fab fa-youtube" style={{ color: '#f20707' }}></i></li>
                <li><i className="fab fa-linkedin"></i></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="list">
              <h4>
                <span>
                  <div className="overlay">
                    {/* <img src={LineImage} alt="" /> */}
                  </div>
                  About Us
                </span>
              </h4>
              <ul>
                <li className="li"> <i className="fas fa-arrow-right" style={{ color: '#292281' }}></i> Student</li>
                <li className="li"><i className="fas fa-arrow-right" style={{ color: '#292281' }}></i> Faculty members</li>
                <li className="li"><i className="fas fa-arrow-right" style={{ color: '#292281' }}></i> Careers</li>
                <li className="li"><i className="fas fa-arrow-right" style={{ color: '#292281' }}></i> Events</li>
                <li className="li"><i className="fas fa-arrow-right" style={{ color: '#292281' }}></i> News</li>
              </ul>
            </div>
          </div>

          {/* Repeat similar structure for other columns */}

          <div className="col-lg-3 col-md-6">
            <div className="list">
              <div className="lo2">
                <h4>
                  <span>
                    <div className="overlay">
                      {/* <img src="img/Line 4545.svg" alt=""> */}
                    </div>
                    Contact Us
                  </span>
                </h4>
                 <ul>
                  <li>
                  <div className="row">
                  <div className="col-lg-1">
                  <i id='msg' className="far fa-envelope" style={{ color: '#292281' }}></i>
                  </div>
                  <div className="col-lg-11">
                  <a className={styles.btn}><span>productDesign</span> </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-1"></div>
                  <div className="col-lg-11">
                    <a href="" className={styles.btn}><span></span></a>
                  </div>
                </div>
                  </li>
                  <li>
                    <i className="fas fa-phone" style={{ color: '#292281' }}></i> (+2)38353216
                  </li>
                  <li>
                    <i className="fas fa-location-dot" style={{ color: '#292281' }}></i> 6th of October City, Giza Governorate
                  </li> 
                </ul>
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
