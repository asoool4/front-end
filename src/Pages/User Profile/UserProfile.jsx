import React from 'react'

export default function UserProfile({userData}) {
    let {name ,studentID ,email ,Department ,Password} = userData
  return (
    <>
        <h4>Name : {studentID}</h4>
        <h4>Name : {name}</h4>
        <h4>Department : {Department}</h4>
        <h4>Email : {email}</h4>
        <h4>Password : {Password}</h4>
    </>
  )
}
