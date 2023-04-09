import React from 'react'
import e1 from './e1.jpeg'
import e2 from './e2.jpg'
import e3 from './e3.jpg'
import e4 from './e4.jpg'
export default function Experiential() {
  return (
    <>
    <div className='container my-5'>
    <div className="row my-5">
        <div className="col-md-6 my-5">
            <h1>Experiential Design</h1>
        </div>
        <div className="col-md-6 my-5">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ex vel lectus aliquet porttitor. Proin sollicitudin vitae purus at cursus. Nullam suscipit ultricies lectus in efficitur. Phasellus hendrerit enim lectus. Nunc vitae eleifend metus. <br/>
            <br/>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus eu vehicula felis, vel congue purus. Integer ut elit feugiat sem semper mollis. Etiam malesuada eros turpis, id dignissim justo dictum et. Ut a nisl sed mauris luctus dapibus sed ut lacus. Phasellus sit amet neque tortor. Donec sit amet risus viverra, vulputate arcu et, pellentesque risus.
            </p>
        </div>
 
        <div>
       
   <div className="row g-2 my-5">
      <div className="col-md-6">
              <img src={e1} className='w-100 vh-100'/>
        </div>
      
        <div className="col-md-6">
              <img src={e4} className='w-100 vh-100'/>
        </div>
 
        <div className="col-md-6">
              <img src={e3} className='w-100 vh-100'/>
        </div>
 
        <div className="col-md-6">
              <img src={e2} className='w-100 vh-100'/>
        </div>
       </div>
     <div className='my-5 container-fluid'>
         <h2>Credits</h2>
         <h6>Firstname Lastname</h6>
         <h6>Title / Role</h6>
         <h6>Firstname Lastname</h6>
         <h6>Title / Role</h6>
         <h6>Firstname Lastname</h6>
         <h6>Title / Role</h6>
     </div>
         </div>
        </div>
    </div>
    </>
  )
}
