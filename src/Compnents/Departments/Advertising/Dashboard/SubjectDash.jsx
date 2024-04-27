import React, { useState, useEffect } from 'react';
import styles from './SubjectDash.module.css';

export default function SubjectDash() {
    const [subjectContainer, setSubjectContainer] = useState([]);

    useEffect(() => {
        const storedSubjects = localStorage.getItem("ourADVSubjects");
        if (storedSubjects) {
            setSubjectContainer(JSON.parse(storedSubjects));
        }
    }, []);

    const display = () => {
        return subjectContainer.map((subject, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{subject.name}</td>
                <td>{subject.credit}</td>
                <td><button className="btn btn-danger" onClick={() => deleteCurrent(index)}>Delete</button></td>
            </tr>
        ));
    };

    const addResearch = () => {
        const subjectName = document.getElementById("SubjectName").value;
        const creditHours = document.getElementById("CreditHours").value;

        // Check if all fields are filled
        if (!subjectName || !creditHours) {
            alert("Please fill in all fields.");
            return;
        }

        const research = {
            name: subjectName,
            credit: creditHours
        };

        const updatedSubjects = [...subjectContainer, research];
        setSubjectContainer(updatedSubjects);
        localStorage.setItem("ourADVSubjects", JSON.stringify(updatedSubjects));

        // Clear input fields
        document.getElementById("SubjectName").value = "";
        document.getElementById("CreditHours").value = "";
    };

    const deleteAll = () => {
        localStorage.removeItem("ourADVSubjects");
        setSubjectContainer([]);
    };

    const deleteCurrent = (index) => {
        const updatedSubjects = [...subjectContainer];
        updatedSubjects.splice(index, 1);
        setSubjectContainer(updatedSubjects);
        localStorage.setItem("ourADVSubjects", JSON.stringify(updatedSubjects));
    };

    return (
        <div className="col-lg-10">
            <div className={styles.Holder}>
                <section className={styles.Home}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className={styles.Title}>
                                    <h2>Manage System</h2>
                                </div>
                                <label htmlFor="SubjectName" className="mt-2"><span>System Name</span></label>
                                <input type="text" className={`${styles.formControl} form-control mt-1 `} id="SubjectName" />

                                <label htmlFor="CreditHours" className="mt-3">Credit Hours</label>
                                <input type="text" className={`${styles.formControl} form-control mt-1 `} id="CreditHours" />

                                <div className={styles.btns}>
                                    <button className="btn btn-success mt-3" onClick={addResearch}>Add Schedule</button>
                                    <button className="btn btn-danger mt-3 ms-1" onClick={deleteAll}>Delete All</button>
                                </div>
                            </div>
                        </div>

                        <table className="table mt-5 text-center table-bordered">
                            <thead className="table-primary">
                                <tr>
                                    <th>#</th>
                                    <th>The System</th>
                                    <th>Credit Hours</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody id="tBody">
                                {display()}
                            </tbody>
                        </table>

                    </div>
                </section>
            </div>
        </div>
    );
}
