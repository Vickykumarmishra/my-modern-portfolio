import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik'
import { useRef } from 'react';
import * as yup from "yup";
import { signUpSchema } from './schemas/Index';
export default function Home() {

  const initialValues={

    name:"",
    Subject:"",
    useremail:"",
    
    message:"",
    }

    
  const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit:(values,action)=>{
    console.log(values);
    action.resetForm();
    }
    })
    const form = useRef();
  function handleclick(){

    Swal.fire({
      title: 'Hey!',
      text: 'You are on same website for which you are looking.',
      imageUrl: 'portfolio.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      color:'red',
    })
  }

  function handleForm(e){
  e.preventDefault()
let verify=document.getElementById('field1').value;
let verify2=document.getElementById('field2').value;
let verify3=document.getElementById('field3').value;
let verify4=document.getElementById('field4').value;

if(verify==''||verify2==''||verify3==''||verify4==''){
 
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'All details must be filled before sending',
    
  })

  
 
}



else{

  emailjs.sendForm('service_uh16qbn','template_gy42hqt',form.current,'FzQ82uEVhnavLDi3H').then((result) => {
    console.log(result.text);
    Swal.fire(
      'Message sent successfully to my email',
      'I will contact you soon 😊',
      'success'
    )
}, (error) => {  
    console.log(error.text);
});
    }
  }
  return (
    <div>
      

<nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">

  <img src="my photo black.jpg" style={{width:'100%'}}/>
  <a href="#" class="w3-bar-item w3-button w3-padding-large w3-black">
    <i class="fa fa-home w3-xxlarge"></i>
    <p>HOME</p>
  </a>
  <a href="#about" class="w3-bar-item w3-button w3-padding-large w3-black">
    <i class="fa fa-user w3-xxlarge"></i>
    <p>ABOUT</p>
  </a>
  <a href="#photos" class="w3-bar-item w3-button w3-padding-large w3-black">
    <i class="fa fa-eye w3-xxlarge"></i>
    <p>PROJECTS</p>
  </a>
  <a href="#contact" class="w3-bar-item w3-button w3-padding-large w3-black">
    <i class="fa fa-envelope w3-xxlarge"></i>
    <p>CONTACT</p>
  </a>
</nav>


<div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
  <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
    <a href="#" class="w3-bar-item w3-button" style={{width:'25% !important'}}>HOME</a>
    <a href="#about" class="w3-bar-item w3-button" style={{width:'25% !important'}}>ABOUT</a>
    <a href="#photos" class="w3-bar-item w3-button" style={{width:'25% !important'}}>PROJECTS</a>
    <a href="#contact" class="w3-bar-item w3-button" style={{width:'25% !important'}}>CONTACT</a>
  </div>
</div>


<div class="w3-padding-large" id="main">

  <header class="w3-container w3-padding-32 w3-center w3-black" id="home">
    <h1 class="w3-jumbo"><span class="w3-hide-small">I'm</span> Vicky Kumar Mishra.</h1>
    <h3><b>Full Stack developer.</b></h3>
    <img src="my photo black.jpg" alt="boy" class="w3-image" width="500" height="500" style={{borderRadius:'50%',border:'0.2rem solid white'}}/>
  </header>


  <div class="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
    <h2 class="w3-text-light-grey">About Me</h2>
    <hr style={{width:'200px'}} class="w3-opacity"/>
    <p>As a highly skilled and dedicated Full Stack Developer, I possess a strong foundation in React JS, JavaScript, Node JS, Express, and MongoDB. My proficiency in HTML, CSS, and Bootstrap, coupled with my experience in Redux Toolkit, Auth0, and Stripe, has enabled me to develop robust and user-friendly web applications.

With a keen eye for detail and a passion for continuous learning, I am eager to contribute my skills and expertise to a dynamic team. I am currently pursuing my B.Tech in Computer Science and Engineering at XYZ University, India. Feel free to explore my portfolio and get in touch with me for any further inquiries.
    </p>
    <h3 class="w3-padding-16 w3-text-light-grey">My Skills</h3>
    <p class="w3-wide">Javascript</p>
    <div class="w3-white">
      <div class="w3-dark-grey" style={{height:'28px' , width:'95%'}}></div>
    </div>
    <p class="w3-wide">React Js</p>
    <div class="w3-white">
      <div class="w3-dark-grey" style={{height:'28px' ,width:'90%'}}></div>
    </div>
    <p class="w3-wide">Node Js</p>
    <div class="w3-white">
      <div class="w3-dark-grey" style={{height:'28px',width:'70%'}}></div>
    </div>
    
    <p class="w3-wide">MongoDb</p>
    <div class="w3-white">
      <div class="w3-dark-grey" style={{height:'28px' , width:'85%'}}></div>
    </div>
    <p class="w3-wide">Html & Css</p>
    <div class="w3-white">
      <div class="w3-dark-grey" style={{height:'28px' , width:'90%'}}></div>
    </div>

    <p class="w3-wide">Bootstrap</p>
    <div class="w3-white">
      <div class="w3-dark-grey" style={{height:'28px' , width:'95%'}}></div>
    </div>

    <p class="w3-wide">Auth0</p>
    <div class="w3-white">
      <div class="w3-dark-grey" style={{height:'28px' , width:'100%'}}></div>
    </div>
    <br/>
    
    <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
      <div class="w3-quarter w3-section">
        <span class="w3-xlarge">0</span><br/>
        Partners
      </div>
      <div class="w3-quarter w3-section">
        <span class="w3-xlarge">10+</span><br/>
        Projects Done
      </div>
      <div class="w3-quarter w3-section">
        <span class="w3-xlarge">1+</span><br/>
        Happy Clients
      </div>
      <div class="w3-quarter w3-section">
        <span class="w3-xlarge">1+</span><br/>
        Meetings
      </div>
    </div>

    <a href='https://drive.google.com/file/d/1pjpSZU7pbQTGuV_FAhPEMYw06q4rSbjf/view?usp=sharing'><button class="w3-button w3-light-grey w3-padding-large w3-section">
      <i class="fa fa-download"></i> Download Resume
    </button></a>
    
    <h3 class="w3-padding-16 w3-text-light-grey">My Price</h3>
    <div class="w3-row-padding" style={{margin:'0 -16px'}}>
      <div class="w3-half w3-margin-bottom">
        <ul class="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
          <li class="w3-dark-grey w3-xlarge w3-padding-32">Basic</li>
          <li class="w3-padding-16">Frontend Development</li>
          <li class="w3-padding-16">3-5 pages</li>
          <li class="w3-padding-16">5GB Storage</li>
          <li class="w3-padding-16">Upto 3 Times support</li>
          <li class="w3-padding-16">
            <h2>$ 10</h2>
            <span class="w3-opacity"></span>
          </li>
          <li class="w3-light-grey w3-padding-24">
            <button class="w3-button w3-white w3-padding-large w3-hover-black">Sign Up</button>
          </li>
        </ul>
      </div>

      <div className="w3-half">
        <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
          <li className="w3-dark-grey w3-xlarge w3-padding-32">Pro</li>
          <li className="w3-padding-16">Frontend Development</li>
          <li className="w3-padding-16">5-10 Pages</li>
          <li className="w3-padding-16">20GB Storage</li>
          <li className="w3-padding-16">Endless Support</li>
          <li className="w3-padding-16">
            <h2>$ 25</h2>
            
          </li>
          <li className="w3-light-grey w3-padding-24">
            <button className="w3-button w3-white w3-padding-large w3-hover-black">Sign Up</button>
          </li>
        </ul>
      </div>

    </div>
    


  </div>
  
  <div class="w3-padding-64 w3-content" id="photos">
    <h2 class="w3-text-light-grey">My Projects</h2>
    <hr style={{width:'200px'}} class="w3-opacity"/>


    <div class="w3-row-padding" style={{margin:'0 -16px'}}>
      <div class="w3-half">
        <p style={{color:"white"}}>Travel Website</p>
        <img src="bike4.jpg" style={{width:'100%'}} />
       <a href='https://travel-website-xi-drab.vercel.app/'><div className='clickv' style={{color:'black',backgroundColor:"white"}}>Click to view</div></a> 
        <p style={{color:"white"}}>Portfolio website</p>
        <img src="portfolio.jpg" style={{width:'100%'}}/>
       <a href='#about'><div className='clickv' onClick={handleclick} style={{color:'black',backgroundColor:"white"}}>Click to view</div></a> 
        <p style={{color:"white"}}>Typing Website</p>
        <img src="typist.jpg" style={{width:'100%'}}/>
        <a href='https://my-touch-typing-app.vercel.app'><div className='clickv' style={{color:'black',backgroundColor:"white"}}>Click to view</div></a>
      </div>

      <div class="w3-half">
        <p style={{color:'white'}}>Tourism Website</p>
        <img src="tourism.jpg" style={{width:'100%'}}/>
       <a href='https://tourism-web-with-react-by-vicky.vercel.app'><div className='clickv' style={{color:'black',backgroundColor:"white"}}>Click to view</div></a> 
       
      </div>

    </div>

  </div>


  <div class="w3-padding-64 w3-content w3-text-grey" id="contact">
    <h2 class="w3-text-light-grey">Contact Me</h2>
    <hr style={{width:'200px'}} class="w3-opacity"/>

    <div class="w3-section">
      <p><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Punjab, India</p>
      <p><i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Phone: 8789657123</p>
      <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: mishravicky0141@gmail.com.com</p>
    </div><br/>
    <p>Let's get in touch. Send me a message:</p>

    <form  ref={form}  target="_blank" onSubmit={handleForm}>
      <p><input className="w3-input w3-padding-16"  id='field1' type="text" placeholder="Name" value={values.name} onChange={handleChange} onBlur={handleBlur}   name="name"/></p>
      {errors.name && touched.name?(<p  style={{color:'red'}} className='form-error'>{errors.name}</p>):null}

      <p><input className="w3-input w3-padding-16" id='field2' type="text" placeholder="Email" value={values.useremail} onChange={handleChange} onBlur={handleBlur}  name="useremail"/></p>
      {errors.useremail && touched.useremail?(<p  style={{color:'red'}} className='form-error'>{errors.useremail}</p>):null}
      <p><input className="w3-input w3-padding-16" id='field3' type="text" placeholder="Subject" value={values.Subject} onChange={handleChange} onBlur={handleBlur}  name="Subject"/></p>
      {errors.Subject && touched.Subject?(<p  style={{color:'red'}} className='form-error'>{errors.Subject}</p>):null}
      <p><input className="w3-input w3-padding-16" id='field4' type="text" placeholder="Message" value={values.message} onChange={handleChange} onBlur={handleBlur} name="message"/></p>
      {errors.message && touched.message?(<p  style={{color:'red'}} className='form-error'>{errors.message}</p>):null}
      <p>
        <button  className="w3-button w3-light-grey w3-padding-large" type="submit">
          <i class="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
      </p>
    </form>

  </div>
  
  <footer class="w3-content w3-padding-64 w3-text-grey w3-xlarge">
    <i class="fa fa-facebook-official w3-hover-opacity"></i>
    <i class="fa fa-instagram w3-hover-opacity"></i>
    <i class="fa fa-snapchat w3-hover-opacity"></i>
    <i class="fa fa-pinterest-p w3-hover-opacity"></i>
    <i class="fa fa-twitter w3-hover-opacity"></i>
    <i class="fa fa-linkedin w3-hover-opacity"></i>
   

  </footer>

</div>

    </div>
  )
}
