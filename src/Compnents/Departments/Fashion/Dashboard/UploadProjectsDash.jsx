import React, { useState, useEffect } from 'react';
import styles from './UploadProjectsDash.module.css';
import { Link } from 'react-router-dom';

export default function UploadProjectsDash() { //upload projects 
    const [projectContainer, setProjectContainer] = useState([]);
    const [projectInfo,setProjectInfo]=useState({
        imageCover:"",
        images:[],
        projectName:"",
        studentName:"",
        description:"",
        department:""
    })

    const [images, setImages] = useState([]);

    const handleFileChange = (event) => {
        const selectedFiles = event.target.files;
        const imageArray = [];

        for (let i = 0; i < selectedFiles.length; i++) {
            const file = selectedFiles[i];
            if (file.type.startsWith('image/')) {
                const imageUrl = URL.createObjectURL(file);
                imageArray.push(imageUrl);
            }
        }
        setProjectInfo({ ...projectInfo, images: imageArray });
    };

    function handelChange(e) {
        const { name, value, files } = e.target;
        if (name === "images") {
            handleFileChange(e);
        } else if (name === "imageCover" && files.length > 0) {
            // Convert the file to a Blob URL
            const imageUrl = URL.createObjectURL(files[0]);
            setProjectInfo({ ...projectInfo, imageCover: imageUrl });
        } else if (name === "imageCover") {
            // If no file is selected, clear the imageCover
            setProjectInfo({ ...projectInfo, imageCover: "" });
        } else {
            setProjectInfo({ ...projectInfo, [name]: value });
        }
    }


    useEffect(() => {
        const storedProjects = JSON.parse(localStorage.getItem("ourFashionProject"));
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
            localStorage.setItem("ourFashionProject", JSON.stringify(updatedProjects));
            setProjectContainer(updatedProjects);
            deleteInput();
        };
        reader.readAsDataURL(projectImage);
    };

    const deleteAll = () => {
        localStorage.removeItem("ourFashionProject");
        setProjectContainer([]);
    };

    const deleteInput = () => {
        document.getElementById("projectName").value = "";
        document.getElementById("Description").value = "";
        document.getElementById("DepartmentName").value = "";
        document.getElementById("StudentName").value = "";
        document.getElementById('ProductImage').value = "";
        document.getElementById('images').value = [];
    };

    const deleteCurrent = (i) => {
        const updatedProjects = [...projectContainer];
        updatedProjects.splice(i, 1);
        localStorage.setItem("ourFashionProject", JSON.stringify(updatedProjects));
        setProjectContainer(updatedProjects);
    };

    const displayProjects = () => {
        return projectContainer.map((project, i) => (
            <div className="col-lg-4 py-2">
                <div className={`${styles.card} card`} key={i}>
                  <img src={project.image} className="card-img-top" alt="Project Image" />
                    <div className={`${styles.cardBody} card-body`}>
                        <h5 className={`${styles.cardTitle} card-title`}>project Name:{project.name}</h5>
                        <p className={`${styles.cardText} card-text`}>Description: {project.description}</p>
                        <p className={`${styles.cardText} card-text`}>Department Name: {project.department}</p>
                        <p className={`${styles.cardText} card-text`}>Student Name: {project.student}</p>
                        <button className={`${styles.btnn} btn btn-danger`} onClick={() => deleteCurrent(i)}>Delete</button>
                    </div>
               </div>
            </div>
        ));
    };
    
    async function   uploadProject(e){
        e.preventDefault();
        const body = new FormData();
        body.append('projectName', projectInfo.projectName);
        body.append('department', "Fashion");
        body.append('imageCover', projectInfo.imageCover);
        body.append('images', projectInfo.images);
        body.append('studentName', projectInfo.studentName);
        body.append('description', projectInfo.description);
        console.log(body);
    
    //  await axios.post('{{URL}}/uploads/project',body)
        console.log(projectInfo);
    }

    return (
        <>
           <div className={styles.requests}>
                <Link to="RequestsViewer">
                    <i class={`${styles.icon} fa-solid fa-hand`}></i>
                </Link>
            </div>
            <div className={styles.Title}>
                <h2>Projects</h2>
            </div>
            
            <form action="" onSubmit={uploadProject}>
                <label htmlFor="projectName" className="mt-2"><span>Project Name</span></label>
                <input name='projectName' onChange={handelChange} type="text" className={`${styles.formControl} form-control mt-1 `} id="projectName" />

                <label htmlFor="Description" className="mt-3">Description</label>
                <input name='description' onChange={handelChange} type="text" className={`${styles.formControl} form-control mt-1 `} id="Description" />

                <label htmlFor="DepartmentName" className="mt-2">Department Name</label>
                <input name='department' onChange={handelChange} type="text" className={`${styles.formControl} form-control mt-1 `} id="DepartmentName" />

                <label htmlFor="StudentName" className="mt-2">Student Name</label>
                <input name='studentName' onChange={handelChange} type="text" className={`${styles.formControl} form-control mt-1 `} id="StudentName" />
                
                <label htmlFor="ProductImage" className="mt-2">Project Image</label>
                <input name='imageCover' onChange={handelChange} type="file" accept="image/*" className={`${styles.formControl} form-control mt-1 `} id="ProductImage" />

                <label  htmlFor="ProductImage" className="mt-2"> Images </label>
                <input name='images' onChange={handelChange} multiple type="file" className={`${styles.formControl} form-control mt-1 `} id="images" />
                
                <div className="btns py-4">
                    <button className="btn btn-success mt-3" onClick={addProject}>Add Project</button>     
                    <button className="btn btn-danger mt-3 ms-1" onClick={deleteAll}>Delete All</button>     
                </div>
            </form>
            <div className="row" id="tBody">
                {displayProjects()}
            </div>
        </>
    );
}