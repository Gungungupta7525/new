import React from 'react'

export default function Alert(props) {
  return (
   props.al && <div className={`alert alert-${props.al.type} alert-dismissible fade show`} role="alert">
    <strong>{props.al.type}</strong> {props.al.msg}
   
  </div>
  )
}
