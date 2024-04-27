import React, { useState } from 'react';
import styles from './ProductDesign.module.css';
import { Link, Outlet } from 'react-router-dom';


export default function ProductDesign() {
  const [role,setRole] = useState("admin");
  return (
    <>
      <section className={styles.productDesignHome}>
        <div className={styles.background}>
          <div className={styles.overlay}>
            <div className={styles.text}>
              <h2>Product Design</h2>
              <span>
                <Link to="/productDesign/">Department /</Link> <Link to="/">Home</Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutProduct}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <div className={`${styles.listGroup} list-group`}>
                <Link to="pdSujects" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Subjects</Link>
                <Link to="pdSceduales" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Schedules</Link>
                <Link to="pdGallery" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Gallery</Link>
                <Link to="pdUpdates" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Updates</Link>
                <Link to="facultyMembers" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Faculty Members</Link>
                <a href='#' className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Feedback</a>
                {role === "admin" && (
                  <>
                    <Link to="UploadProjects" className='btn btn-success my-1'>Upload Project</Link>
                    <Link to="UploadUpdates" className='btn btn-warning my-1'>Upload Research</Link>
                    <Link to="schedulesDash" className='btn btn-primary my-1'>Upload Schedule</Link>
                    <Link to="SubjectDash" className='btn btn-secondary my-1'>Add Subject</Link>
                    <Link to="membersDash" className='btn btn-success my-1'>Add Member</Link>
                    <Link to="membersHomeDash" className='btn btn-warning my-1'>Add Member At Home</Link>
                  </>
                )}

                {role === "doctor" && (
                  <>
                    <Link to="UploadProjects" className='btn btn-success my-1'>Upload Project</Link>
                    <Link to="UploadUpdates" className='btn btn-warning my-1'>Upload Research</Link>
                  </>
                )}

                {role === "student" && (
                  <>
                    <Link to="StudentsUpload" className='btn btn-success my-1'>Upload Project</Link>
                  </>
                )}
              </div>
            </div>
              <Outlet></Outlet>
          </div>
        </div>
      </section>  
    </>
  );
}
