import React from 'react';
import styles from "./Home.module.css";
import line from "./imgs/line.svg";
import dean from "./imgs/dean.jpg";
import painting from "./imgs/Paintingpoppieswithtexture.jpg";
import background from "./imgs/backgroundproduct.png";
import news from "./imgs/nnnnnn.jpg"
import product1 from './imgs/product1.jpg';
import product2 from './imgs/product22.jpg';
import product3 from './imgs/product33.jpg';
import product4 from './imgs/product44.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className={styles.about}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className={styles.overlay}></div>
              <div className={styles.text}>
                <h2>Faculty of</h2>
                <h1>Applied Arts</h1>
                <p>In recognition of the civilizational role played by 6th of October University,<br />
                  the university has decided to establish a College of Applied Arts that focuses<br />
                  on the fields of design and production technology. The college's curriculum will <br />
                  include the latest scientific theories and advanced technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sec2}>
        <div className="container">
          <div className={styles.card}>
            <div className={styles.overlay}>
              <img src={line} alt="" />
            </div>
            <h2>About Us</h2>
            <p>The Faculty of Applied Arts was established in October 6th University as a cultural project that considers the filed of design and production technology in accordance with the recent scientific theories and up-to-date technologies.

            The faculty aims to cooperate with all of the authorities considered with the applied arts, such as universities, faculties scientific institutes, production establishments, and research centers in Egypt and aboard, to originate the recent findings in the sciences of design and technology, in order to achieve abilities and the required technical rather than artistic skills in the faculty graduates.
            </p>
            <button className={styles.btn}><Link to="aboutHome"> More.. </Link></button>
          </div>
        </div>
      </section>

      <section class={styles.sec3}>
        <div class="container">

          <div class="row">
            <div class="col-lg-6">
              <div class={styles.text}>
                <h3 class="slide-fwd-center">MISSION :</h3>
              <p>Faculty of Applied Arts – O6U- is dedicated to prepare graduates whom are: creative designers 
                  capable to compete nationally and internationally. Also to produce scientific applied researches,
                  which adopt Egypt's future vision, to continuously enhance society in relevance to ethical values,
                    as well as, to allow educational environment that supports training and sustainable development.

              </p> 
            </div> 

            <div class={`${styles.l1 , styles.text}`}>
              <h3 class="slide-fwd-center">VISION: </h3>
              
            <p>Pioneering higher education nationally and regionally; through creativity in design, serving society
              and achieving principles of sustainability.

            </p> 
          </div> 
            </div>
            <div class="col-lg-6">
            <div class={styles.img}>
                <img src={background} alt="" />
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--     sec6    --> */}
      <section class={styles.sec6}>
        <div class="container">
          <div class={styles.overlay}></div>
          <div class="row">
            <div class="col-lg-6">
              <div class={styles.text}>
                <h3>Dean of the Faculty of Applied Arts,</h3>
                <h4>Dr. Mona Abo Tabl ,</h4>
                <p>
                  Faculty of Applied Arts, October 6 University The first private college accredited by the 
                  National Authority for Quality Assurance and Accreditation Human civilization is the cumulative 
                  product of what human beings provide in terms of technical creativity and artistic creativity, 
                  and the Faculties of Applied Arts have contributed to building this civilization accumulation and
                  have been able to adapt to the technological changes and innovations and have been able to adapt 
                  them to meet the needs of society at different levels.The Faculty of Applied Arts is October 6 
                  University - the first private applied arts college established in the Arab Republic of Egypt by 
                  Presidential Decree No. 343 of 1994, where studies began in the academic year 1999/2000.
                  The study at the college aims to prepare a distinguished designer capable of maximizing the 
                  competitiveness of the product through its ability to innovate and create creativity in design, 
                  to meet the needs of society and contribute to the advancement of thought, in line with the requirements
                  of the labor market and keep pace with technology and digital transformation and future directions for 
                  sustainable development and applied scientific research to improve the quality Life.
                </p>
              </div>
            </div>
            <div class="col-lg-6">
                <div class={styles.dcard}>
                    <img src={dean} alt=""/>
                </div>
            </div> 
          </div>
        </div>
    </section>
    {/* <!--     sec4     --> */}

<section class={styles.sec4}>
 <div class="container">
     <div class={`${styles.roww} row`}>
      <div class="col-md-2">
        <div class={styles.cardd}>
          <div class={styles.overlay}>
            <div class={styles.text1}>
              <h4>Department of product Design</h4>
              <Link to="productDesign" className={styles.btn}>learn more <i className="fa-solid fa-arrow-right" style={{ color: '#ffffff' }}></i></Link>
            </div>
          </div>
          <img src={painting} class="card-img-top" alt="Card Image 1" />
         
        </div>
      </div>
      <div class={`col-md-2 ${styles.down}`}>
        <div class={styles.cardd}>
          <div class={styles.overlay}>
            <div class={styles.text1}>
              <h4>Department of Interior Design and Furniture</h4>
              <Link to="InteriorDesign" className={styles.btn}>learn more <i className="fa-solid fa-arrow-right" style={{ color: '#ffffff' }}></i></Link> 
            </div>
          </div>
          <img src={painting} class="card-img-top" alt="Card Image 1" />
        </div>
      </div>
      
      <div class="col-md-2">
        <div class={styles.cardd}>
          <div class={styles.overlay}>
            <div class={styles.text1}>
            <h4>Department of Advertisin</h4>
            <Link to="ADV" className={styles.btn}>learn more <i className="fa-solid fa-arrow-right" style={{ color: '#ffffff' }}></i></Link>
          </div>
          </div>
          <img src={painting} class="card-img-top" alt="Card Image 1" />
        </div>
      </div>

      <div class={`col-md-2 ${styles.down}`}>
        <div class={styles.cardd}>
          <div class={styles.overlay}>
            <div class={styles.text1}>
              <h4>Department of Fashion Design</h4>
              <Link to="Fashion" className={styles.btn}>learn more <i className="fa-solid fa-arrow-right" style={{ color: '#ffffff' }}></i></Link>              
            </div>
          </div>
          <img src={painting} class="card-img-top" alt="Card Image 1"/>          
        </div>
      </div>
      <div class="col-md-2">
        <div class={styles.cardd}>
          <div class={styles.overlay}>
            <div class={styles.text1}>
              <h4>Department of Cinema,Tv and Photography</h4>
              <Link to="Cinema" className={styles.btn}>learn more <i className="fa-solid fa-arrow-right" style={{ color: '#ffffff' }}></i></Link>
            </div>
          </div>
          <img src={painting} class="card-img-top" alt="Card Image 1" />
        </div>
      </div>
     </div>
    </div>
    </section>
 
    {/* <!--     sec5    --> */}
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
                   <button class={styles.btn}><a href="events.html"> See More</a></button>
                </div>
                
              </div>
               
            </div>
        </div>
       </section>

       {/* Gallery */}

       <section className={styles.galleryContent}>
        <div className="container-fluid">
          <div className="row">
            <div className="gallery">
              <div className="container">
                <div className="row">
                  <div className={styles.headText}>
                    <div className={styles.text}>
                      <h4>Gallery</h4>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3">
                    <div className={styles.card}>
                      <div className={styles.overlay}>
                        <div className={styles.holder}>
                          <div className={styles.textCard}>
                            <h3>Project Name: Project 1</h3>
                            <p>
                              Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.
                            </p>
                            <h5>Department Name: Product Design</h5>
                            <h6 className="py-2">Code: 202112223</h6>
                          </div>
                        </div>
                      </div>
                      <img src={product1} alt="Project 1" />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className={styles.card}>
                      <div className={styles.overlay}>
                        <div className={styles.holder}>
                          <div className={styles.textCard}>
                            <h3>Project Name: Project 2</h3>
                            <p>
                              Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.
                            </p>
                            <h5>Department Name: Product Design</h5>
                            <h6 className="py-2">Code: 202112224</h6>
                          </div>
                        </div>
                      </div>
                      <img src={product2} alt="Project 2" />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className={styles.card}>
                      <div className={styles.overlay}>
                        <div className={styles.holder}>
                          <div className={styles.textCard}>
                            <h3>Project Name: Project 3</h3>
                            <p>
                              Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.
                            </p>
                            <h5>Department Name: Product Design</h5>
                            <h6 className="py-2">Code: 202112225</h6>
                          </div>
                        </div>
                      </div>
                      <img src={product3} alt="Project 3" />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className={styles.card}>
                      <div className={styles.overlay}>
                        <div className={styles.holder}>
                          <div className={styles.textCard}>
                            <h3>Project Name: Project 4</h3>
                            <p>
                              Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.
                            </p>
                            <h5>Department Name: Product Design</h5>
                            <h6 className="py-2">Code: 202112226</h6>
                          </div>
                        </div>
                      </div>
                      <img src={product4} alt="Project 4" />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className={styles.card}>
                      <div className={styles.overlay}>
                        <div className={styles.holder}>
                          <div className={styles.textCard}>
                            <h3>Project Name: Project 4</h3>
                            <p>
                              Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.
                            </p>
                            <h5>Department Name: Product Design</h5>
                            <h6 className="py-2">Code: 202112226</h6>
                          </div>
                        </div>
                      </div>
                      <img src={product4} alt="Project 3" />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className={styles.card}>
                      <div className={styles.overlay}>
                        <div className={styles.holder}>
                          <div className={styles.textCard}>
                            <h3>Project Name: Project 4</h3>
                            <p>
                              Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.
                            </p>
                            <h5>Department Name: Product Design</h5>
                            <h6 className="py-2">Code: 202112226</h6>
                          </div>
                        </div>
                      </div>
                      <img src={product4} alt="Project 4" />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className={styles.card}>
                      <div className={styles.overlay}>
                        <div className={styles.holder}>
                          <div className={styles.textCard}>
                            <h3>Project Name: Project 2</h3>
                            <p>
                              Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.
                            </p>
                            <h5>Department Name: Product Design</h5>
                            <h6 className="py-2">Code: 202112224</h6>
                          </div>
                        </div>
                      </div>
                      <img src={product2} alt="Project 2" />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className={styles.card}>
                      <div className={styles.overlay}>
                        <div className={styles.holder}>
                          <div className={styles.textCard}>
                            <h3>Project Name: Project 2</h3>
                            <p>
                              Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.
                            </p>
                            <h5>Department Name: Product Design</h5>
                            <h6 className="py-2">Code: 202112224</h6>
                          </div>
                        </div>
                      </div>
                      <img src={product2} alt="Project 2" />
                    </div>
                  </div>

                </div>
                <div className="row">
                  <div className={styles.btns}>
                    <Link to="gallery" className={styles.btn}>See more</Link>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
