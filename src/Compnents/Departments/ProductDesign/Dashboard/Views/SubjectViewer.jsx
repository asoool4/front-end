import React, { useEffect, useState } from 'react';
import styles from './SubjectViewer.module.css';

export default function SubjectViewer() {
    const [subjectContainer, setSubjectContainer] = useState([]);

    useEffect(() => {
        const storedSubjects = localStorage.getItem("ourPDSubjects");
        if (storedSubjects) {
            setSubjectContainer(JSON.parse(storedSubjects));
        }
    }, []);

    const deleteCurrent = (index) => {
        const updatedSubjects = [...subjectContainer];
        updatedSubjects.splice(index, 1);
        setSubjectContainer(updatedSubjects);
        localStorage.setItem("ourPDSubjects", JSON.stringify(updatedSubjects));
    };

    const display = () => {
        return subjectContainer.map((subject, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{subject.name}</td>
                <td>{subject.credit}</td>
            </tr>
        ));
    };

    return (
        <>
            <table className={`${styles.table} table`}>
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">The System</th>
                    <th scope="col">Credit Hours</th>
                    </tr>
                </thead>    
                <tbody>
                    {display()}
                </tbody>
            </table>
        </>
    );
}
