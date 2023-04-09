import React from 'react'
import notFound from './notFound.jpg'
export default function NotFound() {
  return (
    <>
   <div className="container text-center">
  <div className="row">
    <div className="col align-self-start">
      <h2>Page Not Found </h2>
      <img src={notFound}/>
    </div>
  
  </div>
</div>

    </>
  )
}
