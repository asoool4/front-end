import React from 'react';
import styles from "./FashionHome.module.css";
import news from "./imgs/nnnnnn.jpg";
import logo from './imgs/o6u logo.jpg';
import { Link } from 'react-router-dom';
import HomeProjectsViewer from "./Dashboard/Views/HomeProjectsviewer" ;
import MembersHomeViewer from './Dashboard/Views/MembersHomeViewer';

export default function FashionHome() {
  return (  
    <div className="col-lg-10">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="parent">
              <div className={styles.textHolder}>
                <div className={styles.upText}>
                  <h3>About Department</h3>
                </div>                           
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, saepe.
                    Sapiente aliquid sed cumque rem , aspernatur dignissimos placeat sint
                    voluptatibus velit culpa, eius impedit. <br /> Odit eius illum hic ab officiis
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, saepe. <br />
                    Sapiente aliquid sed cumque rem, aspernatur dignissimos placeat sint
                    voluptatibus velit culpa, eius impedit. Odit eius illum hic ab officiis
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, saepe.
                    Sapiente aliquid sed cumque rem, aspernatur dignissimos placeat sint
                    voluptatibus velit culpa, eius impedit. Odit eius illum hic ab officiis
                    ?
                  </p>
              </div>
            </div>
          </div>      
        </div>
      </div>

      <section class={styles.Homeevent}> 
        <div class="container">
            <div class={styles.eventbox}>
              <div class="row">
                <div class="col-lg-6">
                   <div class={styles.box1}>
                    <div class={styles.overlay}>
                     <div class={styles.text}>
                      <span>4 Dec</span>
                      <h3>Last news</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio modi veritatis?</p>
                     </div>
                    </div>
                    <img src={news} alt=""/>
                   </div>
                </div>
    
                <div class="col-lg-6">
                   <div class={styles.box2}>
                     <div class="row">
                         <div class="col-lg-3">
                            <img src={news} alt="" />
                         </div>
                         <div class="col-lg-9">
                          <h4>heeeeee</h4>
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus voluptatibus id libero laudantium quos officia explicabo deleniti nihil iure!</p>
                         </div>

                         <div class="col-lg-3">
                          <img src={news} alt=""/>
                       </div>
                       <div class="col-lg-9">
                        <h4>heeeeee</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus voluptatibus id libero laudantium quos officia explicabo deleniti nihil iure!</p>
                       </div>

                       <div class="col-lg-3">
                        <img src={news} alt=""/>
                     </div>
                     <div class="col-lg-9">
                      <h4>heeeeee</h4>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus voluptatibus id libero laudantium quos officia explicabo deleniti nihil iure!</p>
                     </div>
                     </div>
                   </div>
                </div>
                
              </div>
               
            </div>
        </div>
       </section>
    {/* <!-- galllaryyyy --> */}
    <section className={styles.gallaryhome}> 
      <div className="container">
        <h2>Gallery</h2>
        <div className="row">
          <HomeProjectsViewer />
        </div>
        <div className="row">
          <div className={styles.btns}>
            <Link to="fashionGallery" className={styles.btn}>See more</Link>
          </div>
        </div>
      </div>
   </section>
{/* <!-- Doctorsss product design --> */}
<section className={styles.Doctors}>
  <div className="container">

    <div className={styles.Dcard}>
      <div className={styles.text1}>    
          <h2>Doctors</h2>
      </div>
      <div className={styles.item}>
        <div className="row">
          <MembersHomeViewer />
        </div>
     </div>
   </div>
  </div>
</section>
{/* Our collaboration*/}
{/* <section className={styles.collaborations}>
  <div className="container">
    <div className="row">
      <div className={styles.title}>
        <h2>Collaborations</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-2">
        <img src={logo} alt="" />
      </div>
      <div className="col-lg-2">
        <img src={logo} alt="" />  
      </div>
      <div className="col-lg-2">
        <img src={logo} alt="" /> 
      </div>
      <div className="col-lg-2">
        <img src={logo} alt="" />
      </div>
      <div className="col-lg-2">
        <img src={logo} alt="" /> 
      </div>
      <div className="col-lg-2">
        <img src={logo} alt="" />
      </div>
    </div>
  </div>
</section> */}
  {/*  */}
    </div>
  );
}
