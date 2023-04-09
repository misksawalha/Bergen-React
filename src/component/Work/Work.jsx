import style from './Work.module.css'
import { useNavigate } from 'react-router-dom'
import work1 from './work1.jpg';
import work2 from './work2.jpg';
import work3 from './work3.jpeg';
export default function Work() {

  let active;
  let path;
  let navigate=useNavigate();
  function setActive(e){
    active=e.target.value;
    path=(`/${active}`)
    if(active=='Residential'){
      navigate(path);
    }
    else if(active=='Commercial'){
      navigate(path);
    }
    else if(active=='Experiential'){
      navigate(path);
    }
  }
   
  return (
    <>
    <div className='container'> 
        <div className='workItems '>
          <h2 className='text-center my-3'>Creating spaces that are <br/> comfortable, memorable and <br/> inspiring.</h2>
        </div>  
        {/* first img */}
        <div className="">
        <div className={`my-5 ${style.item}`}  >
          <div className={`${style.myImg} `}>
            <img  className={`w-100  `} src={work1}  alt=" " />
          </div>
          </div>
        </div>
        <div className=' row position-relative'>
          <div className='col-md-6'>
          <h2>Residential Design</h2>
         <p>Apartments, homes and vacation properties.</p>
          </div>
          <div className="col-md-6 text-end">
          <button className='btn btn-dark ' value='Residential' onClick={setActive}>See project</button>
          </div>
        </div>
        {/* sec img */}
        <div className="">
        <div className={`my-5 ${style.item}`}  >
          <div className={`${style.myImg} `}>
            <img  className={`w-100  `} src={work2}  alt=" " />
          </div>
          </div>
          </div>
          <div className=' row position-relative'>
          <div className='col-md-6'>
          <h2>Commercial Design</h2>
         <p>Creative and inviting retail and hospitality environments.</p>
          </div>
          <div className="col-md-6 text-end">
          <button className='btn btn-dark ' value='Commercial' onClick={setActive}>See project</button>
          </div>
        </div>

      {/* third img  */}
        <div className="">
        <div className={`my-5 ${style.item}`}  >
          <div className={`${style.myImg} `}>
            <img  className={`w-100  `} src={work3} alt=" " />
          </div>
          </div>
          </div>
          <div className=' row position-relative'>
          <div className='col-md-6'>
          <h2>Experiential Design</h2>
         <p>Temporary and permanent branded spaces.</p>
          </div>
          <div className="col-md-6 text-end">
          <button className='btn btn-dark ' value='Experiential' onClick={setActive}>See project</button>
          </div>
        </div>
    </div>
    </>
  )
}
