import styles from './RequestsViewer.module.css';
import React, { useState, useEffect } from 'react';

export default function RequestsViewer() {
    const [projectContainer, setProjectContainer] = useState([]);

    useEffect(() => {
        const storedProjects = JSON.parse(localStorage.getItem("ourFashionStudentsProject"));
        if (storedProjects) {
            setProjectContainer(storedProjects);
        }
    }, []);

    const deleteCurrent = (i) => {
        const updatedProjects = [...projectContainer];
        updatedProjects.splice(i, 1);
        localStorage.setItem("ourFashionStudentsProject", JSON.stringify(updatedProjects));
        setProjectContainer(updatedProjects);
    };

    const displayProjects = () => {
        return projectContainer.map((project, i) => (
            <div className="col-lg-4 py-2" key={i}>
                <div className={`${styles.card} card`}>
                  <img src={project.image} className="card-img-top" alt="Project Image" />
                    <div className={`${styles.cardBody} card-body`}>
                        <h5 className={`${styles.cardTitle} card-title`}>project Name:{project.name}</h5>
                        <p className={`${styles.cardText} card-text`}>Description: {project.description}</p>
                        <p className={`${styles.cardText} card-text`}>Department Name: {project.department}</p>
                        <p className={`${styles.cardText} card-text`}>Student Name: {project.student}</p>
                        <button className={`${styles.btnn} btn btn-success mx-2`}> Add </button>
                        <button className={`${styles.btnn} btn btn-danger px-1`} onClick={() => deleteCurrent(i)}>Delete</button>
                        
                    </div>
               </div>
            </div>
        ));
    };

  return (
    <>
        <div className={styles.Title}>
            <h2>Requests</h2>
        </div>
        <div className="row">
        {displayProjects()}
        </div>
        
    </>
  )
}
