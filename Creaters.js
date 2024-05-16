import React,{ useState } from 'react'
import "../Resume/Resume.css"

function Creaters() {
    const[data,setdata]=useState({name:'',email:'',address:'',contact:''})
    const [edu,setedu]=useState({degree:'',instituition:'',CGPA:''})
    const[experience,setexperience]=useState({CompanyName:'',Position:'',duration:''})

    const functiondata=(personal)=>{
        setdata({...data,[personal.target.name]:personal.target.value})
        console.log(data)
    }
    const functionedu=(education)=>{
        setedu({...edu,[education.target.name]:education.target.value})
        console.log(edu)
    }
    const functionexp=(experi)=>{
        setexperience({...edu,[experi.target.name]:experi.target.value})
        console.log(edu)
    }
    const submitfn=(event)=>{
        event.preventDefault()
        // .then((result)=>{
        //     console.log("save")
        //     console.log(result)
        // })
        // .catch((error)=>{
        //  console.log(error)
        // })
        console.log("Save")
       }
  return (
    <div>
<form onSubmit={submitfn} className='form1'>
   <h3 className='formhead'>Please fill these Information</h3>
    <p>PERSONAL INFO</p>
    <input type='text' placeholder='Name' name='name' value={data.name} onChange={functiondata}></input><br></br>
    <input type='text' placeholder='Email' name='email' value={data.email} onChange={functiondata}></input><br></br>
    <input type='text' placeholder='Address' name='address' value={data.address} onChange={functiondata}></input><br></br>
    <input type='text' placeholder='Contact' name='contact' value={data.contact} onChange={functiondata}></input>
    
     <hr></hr>
    <p>EDUCATIONAL QUALIFICATION</p>
    <input type='text' placeholder='Degree' name='degree' value={edu.degree} onChange={functionedu}></input><br></br>
    <input type='text' placeholder='Institution' name='instituition' value={edu.instituition} onChange={functionedu}></input><br></br>
    <input type='text' placeholder='CGPA' name='CGPA' value={edu.CGPA} onChange={functionedu}></input><br></br>
    <button type='submit' className='formbutton'>Add</button>
    <hr></hr>
    <p>EXPERIENCE</p>
    <input type='text' placeholder='CompanyName' name='CompanyName' value={experience.CompanyName} onChange={functionexp}></input><br></br>
    <input type='text' placeholder='Position' name='Position' value={experience.Position} onChange={functionexp}></input><br></br>
    <input type='text' placeholder='Duration' name='duration' value={experience.duration} onChange={functionexp}></input><br></br>
    <button type='submit' className='formbutton'>Add</button>&nbsp;

</form>
<a href='./view'><button type='submit' className='formbutton'>View CV</button></a>
    </div>
  )
}

export default Creaters