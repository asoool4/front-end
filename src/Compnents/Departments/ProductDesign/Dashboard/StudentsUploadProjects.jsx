import React, { useState, useEffect } from 'react';
import styles from './StudentsUploadProjects.module.css';

export default function StudentsUploadProjects() {
    const [projectContainer, setProjectContainer] = useState([]);

    useEffect(() => {
        const storedProjects = JSON.parse(localStorage.getItem("ourPDStudentsProject"));
        if (storedProjects) {
            setProjectContainer(storedProjects);
        }
    }, []);

    const addProject = () => {
        const projectName = document.getElementById("projectName").value;
        const description = document.getElementById("Description").value;
        const departmentName = document.getElementById("DepartmentName").value;
        const studentName = document.getElementById("StudentName").value;
        const fileInput = document.getElementById('ProductImage');
        const projectImage = fileInput.files[0];

        if (!projectName || !description || !departmentName || !studentName || !projectImage) {
            alert("Please fill in all fields and select an image.");
            return;
        }

        const project = {
            name: projectName,
            description,
            department: departmentName,
            student: studentName,
            image: ""
        };
        const reader = new FileReader();
        reader.onload = function (e) {
            project.image = e.target.result;
            const updatedProjects = [...projectContainer, project];
            localStorage.setItem("ourPDStudentsProject", JSON.stringify(updatedProjects));
            setProjectContainer(updatedProjects);
            deleteInput();
        };
        reader.readAsDataURL(projectImage);
    };

    const deleteAll = () => {
        localStorage.removeItem("ourPDStudentsProject");
        setProjectContainer([]);
    };

    const deleteInput = () => {
        document.getElementById("projectName").value = "";
        document.getElementById("Description").value = "";
        document.getElementById("DepartmentName").value = "";
        document.getElementById("StudentName").value = "";
        document.getElementById('ProductImage').value ="";
    };

    const deleteCurrent = (i) => {
        const updatedProjects = [...projectContainer];
        updatedProjects.splice(i, 1);
        localStorage.setItem("ourPDStudentsProject", JSON.stringify(updatedProjects));
        setProjectContainer(updatedProjects);
    };

    const displayProjects = () => {
        return projectContainer.map((project, i) => (
            <div className="col-lg-4 py-2" key={i}>
                <div className={`${styles.card} card`}>
                    <img src={project.image} className="card-img-top" alt="Project Image" />
                    <div className={`${styles.cardBody} card-body`}>
                        <h5 className={`${styles.cardTitle} card-title`}>Project Name: {project.name}</h5>
                        <p className={`${styles.cardText} card-text`}>Description: {project.description}</p>
                        <p className={`${styles.cardText} card-text`}>Department Name: {project.department}</p>
                        <p className={`${styles.cardText} card-text`}>Student Name: {project.student}</p>
                        <button className={`${styles.btnn} btn btn-danger`} onClick={() => deleteCurrent(i)}>Delete</button>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="col-lg-10">
            <div className={styles.Holder}>
                <section className={styles.Home}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className={styles.Title}>
                                    <h2>Projects</h2>
                                </div>
                                <label htmlFor="projectName" className="mt-2"><span>Project Name</span></label>
                                <input type="text" className={`${styles.formControl} form-control mt-1 `} id="projectName" />

                                <label htmlFor="Description" className="mt-3">Description</label>
                                <input type="text" className={`${styles.formControl} form-control mt-1 `} id="Description" />

                                <label htmlFor="DepartmentName" className="mt-2">Department Name</label>
                                <input type="text" className={`${styles.formControl} form-control mt-1 `} id="DepartmentName" />

                                <label htmlFor="StudentName" className="mt-2">Student Name</label>
                                <input type="text" className={`${styles.formControl} form-control mt-1 `} id="StudentName" />
                                
                                <label htmlFor="ProductImage" className="mt-2">Project Image</label>
                                <input type="file" accept="image/*" className={`${styles.formControl} form-control mt-1 `} id="ProductImage" />

                                <div className="btns py-4">
                                    <button className="btn btn-success mt-3" onClick={addProject}>Add Project</button>
                                </div>
                            </div>
                        </div>
                        <div className="row" id="tBody">
                            
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
