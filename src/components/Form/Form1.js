import './Form1.css';

import '../Landingpage/Navbar.css';
import Talogo from '../Images/Talogo.png'
import Formimage1 from '../Images/Form/Formimage1.jpg'
import Footer from '../Footer/Footer';
import Closemin from '../Images/Close-min.png'
import Navbar from '../Navbar/Navbar';

import {Helmet} from"react-helmet";
import { useEffect } from 'react';
import $ from 'jquery';

import { Link } from "react-router-dom"; 
import React from 'react';
function Form1() {
    function myFunction() {
        document.getElementById("getFile").click();
      }
      useEffect(() => {      
        $(document).ready(function(){
           $('.button').click(function(){
             if($(this).hasClass('expand')){
               $('ul').slideUp(function(){
                 $('.button').removeClass('expand');
                 $('.fas').removeClass('expand')
               });
             }else{
               $(this).addClass('expand');
               setTimeout(function(){
                 $('.fas').addClass('expand');
                 $('ul').stop().slideDown();
               },200);
             }
           });
         });
    
      }, []);
  return (
    <div >
      <Helmet>
     < meta name="viewport" content="width=device-width, initial-scale=1.0"/>
     <meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="style.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>

       </Helmet>
    <div className='navservices'>
    <div className="modalcontainer">
  
  <button type="button"  className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg" style={{position:"absolute",marginTop:"4%",marginLeft:"90%",backgroundColor:"white",width:"10%",height:"7vh",padding:".3%"}} >
  <div class="m1"></div>
<div class="m2"></div>
<div class="m3"></div>

    <p className='mtext'>Menu</p>
  </button>
  
  <Navbar/>
</div>

   
      </div>
<div className='Formmaincontainer'>
<img className='Formmainimage' src={Formimage1} alt='main-services'/> 
<p className='Formtext1'>Apply at</p>
<p className='Formtext2'>Konnect</p>
<p className='Formtext3'>America</p>

</div>
<div className='Formcenter'>
    <p className='Formcentertext1'>Ready To Join<br/> 
Our Amazing&nbsp;<span style={{color:"rgba(217, 4, 61, 1)"}}>TEAM?</span> </p>
<p className='Formcentertext2'>Thank you for your interest in working with Konnect America. Please complete the following form, upload a<br/> resume and your best, most relevant portfolio examples. We look forward to reviewing your work.</p>
<p className='Formcentertext3'>Required*</p>
<p className='Formcentertext4'>Full Time Position</p>
</div>
<div className='formdiv'>
<label className='formfnametext1' for="fname">First Name</label><br/>
    <input type="text" id="fname"  placeholder='First Name' name="fname" />
    <br/>
    <label className='formfnametext1' for="lname">Last Name</label><br/>
    <input type="text" id="fname"  placeholder='Last Name' name="lname" />
    <br/>

    <label className='formfnametext1' >Your Email</label><br/>
    <input type="text" id="lname" name="email"  placeholder='someone@example.com'/>
    <br/>
    <label className='formfnametext2' >Phone</label><br/>
    <input type="text" id="lname" name="email"  placeholder='XXX XXX XXXX'/>
    <br/>
    <label className='formfnametext3' >Preferred contact method*</label><br/>
    <div className='radiobuton'>
    <input type="radio" id="html" name="fav_language" value="HTML"/>
  <label for="html" className='formfnametexthtml'>Email</label>
  <input type="radio" id="css" name="fav_language" value="CSS"/>
  <label for="css" className='formfnametexthtml'>Phone</label>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
  <label for="javascript" className='formfnametexthtml'>Text Message</label>
</div>
  <br/>
    <label className='formfnametext4' for="budget">Which full-time position are you applying for? *</label>
    <br/>
    <select id="country" name="budget">
      <option value="1">Select Position</option>
 
    </select>
   
     <br/>
     <label className='formfnametext2' >Salary*</label><br/>
    <input type="text" id="lname" name="salary"  placeholder='$ 00,000 - $ 000,000'/>
    <br/>
    <label className='formfnametext5' >Upload your resume and/​or portfolio (PDF only)</label><br/>
    
    <div className='fileupload'>
    <button  style={{display:"block",height:"30px",width:"120px",backgroundColor:"#D9043D",color:"white",borderStyle:"none",fontFamily:"Raleway"}} onClick={myFunction}>Upload</button>
  <input type='file' id="getFile" style={{display:"none"}}/>
  <p className='dragfile'>or drag files here.</p>
    </div>
    <br/>
    <label className='formfnametext7' >Or provide the URL of your online portfolio or resume *</label><br/>
    <input type="text" id="lname" name="url"  placeholder='Http://'/>
    <br/>
   
    <input type="submit2" value="Submit"/>

</div>
<div className='formmmarglast'></div>

<Footer/>
    </div>
  );
}

export default Form1;
