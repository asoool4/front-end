import React, { useEffect, useState } from 'react';
import styles from './SchedulesDash.module.css';

export default function SchedulesDash() {
    const [schedualesContainer, setSchedualesContainer] = useState([]);

    useEffect(() => {
        const storedSchedules = JSON.parse(localStorage.getItem("ourPDScheduales"));
        if (storedSchedules) {
            setSchedualesContainer(storedSchedules);
        }
    }, []);

    function AddResearch() {
        const scheduleName = document.getElementById("ScheduleName").value;
        const link = document.getElementById("Link").value;

        if (scheduleName === "" || link === "") {
            alert("Please fill in all fields .");
            return;
        }

        const newResearch = {
            name: scheduleName,
            link: link,
        };

        setSchedualesContainer([...schedualesContainer, newResearch]);
        localStorage.setItem("ourPDScheduales", JSON.stringify([...schedualesContainer, newResearch]));

        document.getElementById("ScheduleName").value = "";
        document.getElementById("Link").value = "";
    }

    function deleteAll() {
        setSchedualesContainer([]);
        localStorage.removeItem("ourPDScheduales");
    }

    function deleteSchedule(index) {
        const updatedSchedules = [...schedualesContainer];
        updatedSchedules.splice(index, 1);
        setSchedualesContainer(updatedSchedules);
        localStorage.setItem("ourPDScheduales", JSON.stringify(updatedSchedules));
    }

    function display() {
        return schedualesContainer.map((schedule, index) => (
            <div className="col-lg-4 py-4">
              <div key={index} className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{schedule.name}</h5>
                    <p className="card-text">Link: {schedule.link}</p>
                    <button className="btn btn-danger" onClick={() => deleteSchedule(index)}>Delete</button>
                </div>
              </div>
            </div>
        ));
    }

    return (
        <>
            <div className="col-lg-10">
                <div className={styles.Holder}>
                    <section className={styles.Home}>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className={styles.Title}>
                                        <h1>Upload Schedules</h1>
                                    </div>
                                    <label htmlFor="ScheduleName" className="mt-2"><span>Schedule Name</span></label>
                                    <input type="text" className={`${styles.formControl} form-control mt-1 `} id="ScheduleName" />

                                    <label htmlFor="Link" className="mt-3">Link</label>
                                    <input type="text" className={`${styles.formControl} form-control mt-1 `} id="Link" />

                                    <div className="btns">
                                        <button className="btn btn-success mt-3" onClick={AddResearch}>Add Schedule</button>
                                        <button className="btn btn-danger mt-3 ms-1" onClick={deleteAll}>Delete All</button>
                                    </div>
                                </div>
                            </div>
                            <div className="tableHolder">
                              <div className="row">
                                {display()}
                              </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
