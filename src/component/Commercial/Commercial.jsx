import React from 'react'
import c1 from './c1.jpg'
import c2 from './c2.jpg'
import c3 from './c3.jpg'
import c4 from './c4.jpg'
export default function Commercial() {
  return (
    <>
    <div className='container my-5'>
    <div className="row my-5">
        <div className="col-md-6 my-5">
            <h1>Commercial Design</h1>
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
              <img src={c2} className='w-100 vh-100'/>
        </div>
      
        <div className="col-md-6">
              <img src={c4} className='w-100 vh-100'/>
        </div>
 
        <div className="col-md-6">
              <img src={c3} className='w-100 vh-100'/>
        </div>
 
        <div className="col-md-6">
              <img src={c1} className='w-100 vh-100'/>
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
