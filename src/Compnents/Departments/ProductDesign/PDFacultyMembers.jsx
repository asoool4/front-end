import React from 'react'
import styles from './PDFacultyMembers.module.css';
import MembersDashViewer from './Dashboard/Views/MembersDashViewer'
export default function PDFacultyMembers() {
  return (
    <>
        <div className="col-lg-10">
            <div className={styles.title}>
               <h2>Faculty Members</h2>
            </div> 
            <div className="row">
                <MembersDashViewer />
            </div>
        </div>
    </>
  )
}
