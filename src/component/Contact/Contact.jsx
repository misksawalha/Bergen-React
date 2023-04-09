import React from 'react'

export default function Contact() {
  return (
    <>
    <div className='container-fluid'>
      <div className="row my-5 g-3">
        <div className="col-md-6 my-3">
          <h2 className='my-5'>Contact us</h2>
          <p>If you have any questions or comments, please contact us via email or phone, or send us
            <br/> a message using the contact form.</p>
            <h6 className='fw-bold my-3 '>Email</h6>
            <h6 className=''>email@example.com</h6>
            <h6 className='fw-bold my-3 '>Phone</h6>
            <h6 className=''>(555) 555-5555</h6>

            <ul className='list-inline my-5'>
              <li className='list-inline-item'><i className="fa-brands fa-facebook-f"></i></li>
              <li className='list-inline-item'><i className="fa-brands fa-instagram"></i></li>
              <li className='list-inline-item'><i className="fa-brands fa-twitter"></i></li>
            </ul>
        </div>

        <div className="col-md-6 my-5">
          <div className="row ">
          <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
            <div className="col-md-6">
             <div className="mb-3">
                 <input type="text" className="form-control" id="exampleFormControlInput1"  />
                 <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
               </div>
            </div>
            <div className="col-md-6">
            <div className="mb-3 ">
                 <input type="text" className="form-control " id="exampleFormControlInput1" />
                 <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
               </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
           </div>
           <div className="row">
           <label  class="form-label">Phone</label>
           <div class="col-md-2">
            
             <input type="text" class="form-control" id="inputZip"/>
             <label  class="form-label">(###)</label>
              </div>
              <div class="col-md-2">
              
              <input type="text" class="form-control" id="inputZip"/>
              <label  class="form-label">###</label>
             </div>
          <div class="col-md-2">
           
           <input type="text" class="form-control" id="inputZip"/>
           <label  class="form-label">###</label>
             </div>
           </div>
           <div className="mb-3 my-2">
            <label htmlFor="exampleFormControlInput1" className="form-label">Subject</label>
            <input type="text" className="form-control" id="exampleFormControlInput1"/>
           </div>
           
           <div className="mb-3">
           <label for="exampleFormControlTextarea1" className="form-label">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
           </div>
          <button className='btn btn-dark'>Submit</button>
        </div>
      </div>
    </div>
    </>
  )
}
