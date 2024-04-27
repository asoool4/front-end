import React from 'react'
import styles from './IntDesignSubjects.module.css';
import SubjectViewer from './Dashboard/Views/SubjectViewer'
export default function IntDesignSubjects() {
  return (
    <div class="col-lg-10">
            <div class="container">
                <div class={styles.tableDp}>
                <div className={styles.title}>
                <h3>Program Levels ( Credit Hours)</h3> 
                </div>
                    <table class={`${styles.table} table`}>
                      <SubjectViewer />
                    </table>
                </div>
            </div>
         </div>
  )

}
