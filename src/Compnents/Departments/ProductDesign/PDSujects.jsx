import React from 'react'
import styles from './PDSujects.module.css';
import SubjectViewer from './Dashboard/Views/SubjectViewer';

export default function PDSujects() {
  return (
    <div class="col-lg-10">
            <div class="container">
                <div class={styles.tableDp}>
                <div className={styles.title}>
                <h3>Program Levels ( Credit Hours)</h3> 
                </div>
                    <table class={`${styles.table} table`}>
                        <tbody>
                          <SubjectViewer />
                        </tbody>
                      </table>
                </div>
            </div>
         </div>
  )
}
