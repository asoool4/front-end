import React, { useState, useEffect } from 'react';
import styles from './UploadUpdates.module.css';

export default function UploadResearches() {
    const [researchContainer, setResearchContainer] = useState([]);
    const [projectInfo,setProjectInfo]=useState({
        imageCover:"",
        name:""
    })
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
        if (localStorage.getItem("ourResearch") === null) {
            setResearchContainer([]);
        } else {
            setResearchContainer(JSON.parse(localStorage.getItem("ourResearch")));
        }
    }, []);

    const AddResearch = () => {
        const researchTitle = document.getElementById("ResearchTitle").value;
        const link = document.getElementById("Link").value;
        const description = document.getElementById("description").value;
        const fileInput = document.getElementById('ResearchImage');
        const researchImage = fileInput.files[0];

        // Check if all fields are filled
        if (researchTitle === "" || link === "" || description === "" || !researchImage) {
            alert("Please fill in all fields and select an image.");
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            const research = {
                title: researchTitle,
                link: link,
                desc: description,
                image: e.target.result
            };
            const updatedResearchContainer = [...researchContainer, research];
            setResearchContainer(updatedResearchContainer);
            localStorage.setItem("ourResearch", JSON.stringify(updatedResearchContainer));
            deleteInput();
        };
        reader.readAsDataURL(researchImage);
    };

    const display = () => {
        return researchContainer.map((research, index) => (
            <div className="col-lg-6 py-4">
                <div key={index} className={`${styles.card} card`}>
                <div className={styles.cardImg}>
                    <img src={research.image} className="card-img-top" alt="Research Image" />
                </div>
                <div className={`${styles.cardBody} card-body`}>
                    <h5 className={`${styles.cardTitle} card-title`}>{research.title}</h5>
                    <a className={`${styles.cardText} card-text`} href={research.link} target="_blank"><span className={styles.linkLable}> Link:</span> <span className={styles.text}> {research.link} </span></a>
                    <p className={`${styles.cardText} card-text`}>Description: {research.desc}</p>
                    <button className={`${styles.btnn} btn btn-danger`} onClick={() => DeleteCurrent(index)}>Delete</button>
                </div>
            </div>
            </div>
        ));
    };

    const deleteAll = () => {
        localStorage.removeItem("ourResearch");
        setResearchContainer([]);
    };

    const deleteInput = () => {
        document.getElementById("ResearchTitle").value = "";
        document.getElementById("Link").value = "";
        document.getElementById("description").value = "";
        document.getElementById('ResearchImage').value = "";
    };

    const DeleteCurrent = (index) => {
        const updatedResearchContainer = [...researchContainer];
        updatedResearchContainer.splice(index, 1);
        setResearchContainer(updatedResearchContainer);
        localStorage.setItem("ourResearch", JSON.stringify(updatedResearchContainer));
    };

    const returnToInput = (index) => {
        document.getElementById("ResearchTitle").value = researchContainer[index].title;
        document.getElementById("Link").value = researchContainer[index].link;
        document.getElementById("description").value = researchContainer[index].desc;
    };

    const previewImage = () => {
        const fileInput = document.getElementById('ResearchImage');
        const preview = document.getElementById('previewImage');

        if (!fileInput || !preview) return; // Check if elements exist

        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            preview.src = reader.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
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
        <div className="col-lg-10">
            <div className={styles.Holder}>
                <section className={styles.Home}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className={styles.Title}>
                                <h2>Upload researches</h2>
                            </div>
                            <form action="" onSubmit={uploadProject}>
                                <label htmlFor="ResearchTitle" className="mt-2"><span>Research Title</span></label>
                                <input type="text" className={`${styles.formControl} form-control mt-1`} id="ResearchTitle" />
                                
                                <label htmlFor="Link" className="mt-3">Link </label>
                                <input type="text" className={`${styles.formControl} form-control mt-1`} id="Link" />

                                <label htmlFor="description" className="mt-2">Description</label>
                                <input type="text" className={`${styles.formControl} form-control mt-1`} id="description" />

                                <label htmlFor="ResearchImage" className="mt-2">Research Image</label>
                                <input type="file" accept="image/*" className={`${styles.formControl} form-control mt-1`} id="ResearchImage" onChange={previewImage} />

                                <div className="btns">
                                    <button className="btn btn-success mt-3" onClick={AddResearch}>Add Research</button>
                                    <button className="btn btn-danger mt-3 ms-1" onClick={deleteAll}>Delete All</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div  id="tBody">
                        <div className="row">
                            {display()}
                        </div>
                    </div>
                </div>
            </section>
           </div>
        </div>
    );
}
