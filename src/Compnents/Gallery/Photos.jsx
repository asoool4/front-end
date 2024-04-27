import React from 'react'
import styles from './Photos.module.css';
import product1 from './imgs/product1.jpg';
import product2 from './imgs/product22.jpg';
import product3 from './imgs/product33.jpg';
import product4 from './imgs/product44.jpg';
import product5 from './imgs/product55.jpg';
import ProductDesign from '../Departments/ProductDesign/ProductDesign';
import { Link, Outlet } from 'react-router-dom';

export default function Photos() {
  return (
    <>
        <div className="col-lg-3">
            <div className={styles.card}>
                <div className={styles.overlay}>
                <div className={styles.holder}>
                    <div className={styles.textCard}>
                    <h3>Project Name: Project 1</h3>
                    <p>Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.</p>
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
                    <h3>Project Name: Project 1</h3>
                    <p>Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.</p>
                    <h5>Department Name: Product Design</h5>
                    <h6 className="py-2">Code: 202112223</h6>
                    </div>
                </div>
                </div>
                <img src={product3} alt="Project 1" />
            </div>
            </div>

            <div className="col-lg-3">
            <div className={styles.card}>
                <div className={styles.overlay}>
                <div className={styles.holder}>
                    <div className={styles.textCard}>
                    <h3>Project Name: Project 1</h3>
                    <p>Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.</p>
                    <h5>Department Name: Product Design</h5>
                    <h6 className="py-2">Code: 202112223</h6>
                    </div>
                </div>
                </div>
                <img src={product2} alt="Project 1" />
            </div>
            </div>
            
            <div className="col-lg-3">
            <div className={styles.card}>
                <div className={styles.overlay}>
                <div className={styles.holder}>
                    <div className={styles.textCard}>
                    <h3>Project Name: Project 1</h3>
                    <p>Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.</p>
                    <h5>Department Name: Product Design</h5>
                    <h6 className="py-2">Code: 202112223</h6>
                    </div>
                </div>
                </div>
                <img src={product4} alt="Project 1" />
            </div>
            </div>

            <div className="col-lg-3">
            <div className={styles.card}>
                <div className={styles.overlay}>
                <div className={styles.holder}>
                    <div className={styles.textCard}>
                    <h3>Project Name: Project 1</h3>
                    <p>Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.</p>
                    <h5>Department Name: Product Design</h5>
                    <h6 className="py-2">Code: 202112223</h6>
                    </div>
                </div>
                </div>
                <img src={product4} alt="Project 1" />
            </div>
            </div>
            
            <div className="col-lg-3">
            <div className={styles.card}>
                <div className={styles.overlay}>
                <div className={styles.holder}>
                    <div className={styles.textCard}>
                    <h3>Project Name: Project 1</h3>
                    <p>Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.</p>
                    <h5>Department Name: Product Design</h5>
                    <h6 className="py-2">Code: 202112223</h6>
                    </div>
                </div>
                </div>
                <img src={product4} alt="Project 1" />
            </div>
            </div>
    </>
  )
}
