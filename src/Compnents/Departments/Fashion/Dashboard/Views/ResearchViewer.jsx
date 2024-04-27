import React, { useState, useEffect } from 'react';
import styles from './ResearchViewer.module.css';

export default function ResearchViewer() {
    const [researchContainer, setResearchContainer] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("ourResearch") === null) {
            setResearchContainer([]);
        } else {
            setResearchContainer(JSON.parse(localStorage.getItem("ourResearch")));
        }
    }, []);

    const display = () => {
        return researchContainer.map((research, index) => (
            <div className={`col-lg-6 ${styles.cardContainer}`}>
                <div key={index} className={`${styles.card} card`}>
                    <div className="row g-0">
                        <div className={`${styles.imgCard} col-md-4`}>
                            <div className={styles.overlay}>
                                <div className={styles.iconHolder}>
                                    <a href={research.link} target="_blank">
                                        <i className={`${styles.icon} fa-solid fa-arrow-up-right-from-square`}></i>
                                    </a> 
                                </div>
                            </div>
                            <img src={research.image} className="img-fluid rounded-start" alt="Research Image" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className={`${styles.cardTitle} card-title`}>{research.title}</h5>
                                <p className={`${styles.cardText} card-text`}>{research.desc}</p>
                                <p className="card-text"><small className="text-body-secondary">{DataView.apply}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className={styles.Holder}>
            <section className={styles.Home}>
                <div className="row" id="tBody">
                    {display()}
                </div>
            </section>
        </div>
    );
}
