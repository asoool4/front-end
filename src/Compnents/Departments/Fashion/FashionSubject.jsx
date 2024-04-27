import React from 'react'
import styles from './FashionSubject.module.css';
import SubjectViewer from './Dashboard/Views/SubjectViewer';

export default function FashionSubject() {
  return (
<div class="col-lg-10">
            <div class="container">
                <div class={styles.tableDp}>
                <div className={styles.title}>
                <h3>Program Levels ( Credit Hours)</h3> 
                </div>
                    <SubjectViewer />
                </div>
            </div>
         </div>
  )
}
