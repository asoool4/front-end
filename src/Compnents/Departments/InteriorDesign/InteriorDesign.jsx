import React, { useState } from 'react'
import styles from './InteriorDesign.module.css';
import { Link, Outlet } from 'react-router-dom';

export default function InteriorDesign() {
  const [role,setRole] = useState("");
  return (
<>
      <section className={styles.IntDesignHome}>
        <div className={styles.background}>
          <div className={styles.overlay}>
            <div className={styles.text}>
              <h2>Interior Design</h2>
              <span>
                <Link to="/InteriorDesign/">Department /</Link> <Link to="/">Home</Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutIntDesign}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <div className={`${styles.listGroup} list-group`}>
                <Link to="intDesignSubjects" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Subjects</Link>
                <Link to="intDesignScheduals" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Schedules</Link>
                <Link to="intDesignGallery" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Gallery</Link>
                <Link to="intDesignUpdates" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Updates</Link>
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
  )
}
