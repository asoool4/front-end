import React from 'react'
import styles from './FashionFacultyMembers.module.css';

import MemersDashViewer from './Dashboard/Views/MemersDashViewer';

export default function FashionFacultyMembers() {
  return (
    <>
        <div className="col-lg-10">
            <div className={styles.title}>
               <h2>Faculty Members</h2>
            </div> 
            <div className="row">
                <MemersDashViewer />
            </div>
        </div>
    </>
  )
}
