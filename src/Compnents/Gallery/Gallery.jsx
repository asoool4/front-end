import React from 'react';
import styles from './Gallery.module.css'; // Import CSS module
import BackGround from './imgs/c.jpg';
import { Link, Outlet } from 'react-router-dom';


// Import other images here

export default function Gallery() {
  return (
    <>
      <section className={styles.galleryBackGround}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={BackGround} alt="background" />
            </div>
            <div className="col-lg-6">
              <div className={styles.textt}>
                <h1>GALLERY</h1>
                <span><a href="gallery.html">Gallery /</a> <a href="index.html">Home</a></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.galleryContent}>
        <div className="container-fluid">
          <div className="row">
            <div className={styles.list}>
              <Link to="/gallery/" className={styles.photobtn}>Photos</Link>
              <Link to="videos">Videos</Link>
            </div>
          </div>
          <div className={`${styles.Holder} row`}>
            <Outlet></Outlet>
          </div>
        </div>
      </section>
    </>
  );
}
