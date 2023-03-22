import React from 'react'

export default function Textform(props) {
  return (
    <div className="form-floating">
    <h1>enter text</h1>
    <textarea className="form-control"id="floatingTextarea"></textarea>
    <label htmlFor="floatingTextarea"></label>
  </div>
  )
}
