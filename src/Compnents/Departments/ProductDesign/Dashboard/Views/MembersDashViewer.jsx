import React, { useState, useEffect } from 'react';
import styles from './MembersDashViewer.module.css';

export default function MembersDashViewer() {
    const [MembersContainer, setMembersContainer] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("OurPDMembers") === null) {
            localStorage.setItem("OurPDMembers", JSON.stringify([]));
            setMembersContainer([]);
        } else {
            setMembersContainer(JSON.parse(localStorage.getItem("OurPDMembers")));
        }
    }, []);

    const display = () => {
        return MembersContainer.map((member, index) => (
            <div className="col-lg-3">
            <div className={styles.text2} key={index}>
                <div className={styles.t1}>
                    <div className={styles.cardImg}>
                        <img src={member.image} className="card-img-top" alt="Member Image" />
                    </div>
                    <i className={`${styles.icon} fa-solid fa-quote-right icon`} style={{ color: '#ffffff' }}></i>
                    <div className={styles.cardBody}>
                        <p className={styles.name}>{member.name}</p>
                        <p className={styles.jop}>
                            Job Description:<br /> {member.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        ));
    };
  return (
    <>{display()}</>
    
  )
}
