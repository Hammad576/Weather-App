import React from 'react'

export default function About() {
  return (
    <div className="container">
      <h1>Fill the above Form to contact us</h1>
      <div className="mb-3 ">
    <label for="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div className="mb-3">
    <label for="exampleFormControlTextarea1" className="form-label">Your Purpose of Contact</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
   

  </div>
  <button type="button" className="btn  my-8 btn-primary">Submit</button>
  </div>
  )
}
