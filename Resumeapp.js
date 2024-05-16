import React from 'react'
import "../Resume/Resume.css"
import resumeimg from '../Image1/resumebg.jpg'

function Resumeapp() {
  return (
    <div>
      <nav class="navbar">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1 " className='brndname'> Intelligent CV {/*<img src={logo} className='logo1'></img>*/}
          
          </span>
          {/* <form class="d-flex" role="search">
            <input class="form-control me-2" className='inputsrch' type="search" placeholder="Search" aria-label="Search" />&nbsp;&nbsp;
            <button class="btn btn-outline-success" type="submit" className='navsrchbtn'>Search</button>
          </form> */}

        </div>


      </nav>
<div class="card text-center">
        <img src={resumeimg} className='resumeimage' alt="..." width="1700px" height="700px" />
        <div class="card-img-overlay"><br></br><br></br><br></br><br></br><br></br><br></br>
          <h5 class="card-title" className='cardtle'>"Welcome to Intelligent CV - where your professional journey begins! Whether you're crafting your first resume or refining years of experience, we're here to guide you towards your career goals. Let's build something exceptional together!"</h5><br></br><br></br><br></br><br></br><br></br><br></br>
          <p class="card-text" className='cardtxt'>"Step into the future of resume building with Intelligent CV, where innovation meets professionalism. Our sleek interface and powerful features make crafting your perfect resume a breeze. Say goodbye to generic templates and hello to a personalized career story that captivates employers. Let's embark on this journey together and unlock endless opportunities!"</p><br></br>
          <a href="./Createres" class="btn btn-primary" className='cardbtn'><b>Create Resume</b> </a>
        </div>
      </div>
      <div class="card-footer text-body-secondary" className='footer1'>
    <p>THANKS FOR VISITING!...</p>
  </div>
    </div>
  )
}

export default Resumeapp