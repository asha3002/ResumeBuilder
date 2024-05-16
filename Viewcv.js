import react from 'react'

function Viewcv(data,edu,experience) {
    // const[data,setdata]=useState({name:'Asha',email:'',address:'',contact:''})
    
  return (
    <div>
{
    <p>Name:{data.name}<br></br>
   Email:{data.email}<br></br>
    Address:{data.address}<br></br>
    Contact:{data.contact}<br></br>
    Degree:{edu.degree}<br></br>
    Institution:{edu.instituiton}<br></br>
    CGPA:{edu.CGPA}
   
    </p>
}
    </div>
  )
}

export default Viewcv