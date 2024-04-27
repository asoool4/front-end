import React from 'react';
import styles from "./EventsAndNews.module.css";
import gallery14 from "./imgs/gallery-14.jpg";
import nnnnn from "./imgs/nnnnnn.jpg";

export default function EventsAndNews() {
  return (
    <>
      <section className={styles.News}>
        <div className={styles.background}>
          <div className={styles.overlay}>
            <div className={styles.text}>
              <h2> Events & News </h2>
              <span><a href="events.html">Department /</a> <a href="index.html">Home</a></span>
            </div>
          </div>
        </div>
      </section>
      
      {/* theeee latest newwwwwwwwwwwws  */}
      <section className={styles.latestnews}>
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-12 col-md-8 col-sm-8">
              <div className={styles.new}>
                <div className={styles.overlay}>
                  <div className={styles.textover}>
                    <span>22 Nov</span>
                    <h2>The Latest New :</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque id sit quod neque nam dignissimos sapiente consectetur totam, quibusdam fugit
                       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque id sit quod neque nam dignissimos sapiente consectetur totam, quibusdam fugit
                       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque id sit quod neque nam dignissimos sapiente consectetur totam, quibusdam fugit
                    </p>
                  </div>
                </div>
                <img src={gallery14} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.events}>
        <div className="container">
          <div className="row">
            {/* newws and events */}
            <div className={`${styles.col9} col-lg-9 col-md-12`}>
              <div className={`${styles.row} row`}>
                <div className="col-lg-3">
                  <img src={nnnnn} alt="" />
                </div>
                <div className={`${styles.col9} col-lg-9`}>
                  <div className={styles.texttt}>
                    <div className={styles.titel}>
                      <h2>helloooo </h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id esse soluta dolores iste quo
                     ratione deserunt nam sapiente ut maiores consectetur, eligendi ab, fugit enim maxime voluptatem 
                     delectus aliquam perferendis?</p>
                    <ul >
                      <li><span>Day:3-21-2024</span></li>
                      <li><span>monday</span></li>
                      <li><span>9:00 Am</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`${styles.row} row`}>
                <div className="col-lg-3">
                  <img src={nnnnn} alt="" />
                </div>
                <div className={`${styles.col9} col-lg-9`}>
                  <div className={styles.texttt}>
                    <div className={styles.titel}>
                      <h2>helloooo </h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id esse soluta dolores iste quo
                     ratione deserunt nam sapiente ut maiores consectetur, eligendi ab, fugit enim maxime voluptatem 
                     delectus aliquam perferendis?</p>
                    <ul >
                      <li><span>Day:3-21-2024</span></li>
                      <li><span>monday</span></li>
                      <li><span>9:00 Am</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`${styles.row} row`}>
                <div className="col-lg-3">
                  <img src={nnnnn} alt="" />
                </div>
                <div className={`${styles.col9} col-lg-9`}>
                  <div className={styles.texttt}>
                    <div className={styles.titel}>
                      <h2>helloooo </h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id esse soluta dolores iste quo
                     ratione deserunt nam sapiente ut maiores consectetur, eligendi ab, fugit enim maxime voluptatem 
                     delectus aliquam perferendis?</p>
                    <ul >
                      <li><span>Day:3-21-2024</span></li>
                      <li><span>monday</span></li>
                      <li><span>9:00 Am</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* cleanderrrrrrrrrrr */}
            <div className="col-lg-3 col-md-8">
              <div className="CLE">
                <div className={styles.card}>
                  <div className={`${styles.calendarToolbar} calendar-toolbar`}>
                    <button className="prev month-btn">
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <div className={`${styles.currentMonth} current-month`}></div>
                    <button className="next month-btn">
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                  <div className={styles.calendar}>
                    <div className={styles.weekdays}>
                      <div className={`${styles.weekdayName} weekday-name`}>Su</div>
                      <div className={`${styles.weekdayName} weekday-name`}>Mo</div>
                      <div className={`${styles.weekdayName} weekday-name`}>Tu</div>
                      <div className={`${styles.weekdayName} weekday-name`}>We</div>
                      <div className={`${styles.weekdayName} weekday-name`}>Th</div>
                      <div className={`${styles.weekdayName} weekday-name`}>Fr</div>
                      <div className={`${styles.weekdayName} weekday-name`}>Sa</div>
                    </div>
                    <div className={`${styles.calendarDays} calendar-days`}></div>
                  </div>
                  <div className="goto-buttons">
                    <button type="button" className="btn prev-year">Prev Year</button>
                    <button type="button" className="btn today">Today</button>
                    <button type="button" className="btn next-year">Next Year</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
