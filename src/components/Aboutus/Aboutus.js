import './Aboutus.css';
import './Aboutcenter2.css';
import './Aboutcenter2mb.css';
import './Aboutlast.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { Link } from "react-router-dom"; 
import React from 'react';
import Closemin from '../Images/Close-min.png'
import kamerica from '../Images/kamericalogo.png'
import kamerica2 from '../Images/kamericalogo2.png'
import commentarrow from '../Images/clogo.png'
import rectangle9 from '../Images/rectangle9.png'
import rectangle10 from '../Images/rectangle10.png'


import '../Landingpage/Navbar.css';
import Talogo from '../Images/Talogo.png'

import aboutmain from '../Images/AboutusImages/aboutmain.jpg'
import aboutmainmb from '../Images/AboutusImages/aboutmainmb.jpg'

import aboutimage2 from '../Images/AboutusImages/aboutimage2.jpg'
import aboutimage3 from '../Images/AboutusImages/aboutimage3.jpg'
import aboutimage4 from '../Images/AboutusImages/aboutimage4.jpg'
import aboutimage4mb from '../Images/AboutusImages/aboutimage4mb.jpg'

import aboutimage5 from '../Images/AboutusImages/aboutimage5.jpg'
import aboutimage6 from '../Images/AboutusImages/aboutimage6.jpg'
import aboutimage7 from '../Images/AboutusImages/aboutimage7.png'
import aboutimage8 from '../Images/AboutusImages/aboutimage8.jpg'
import aboutimage9 from '../Images/AboutusImages/aboutimage9.jpg'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

import {Helmet} from"react-helmet";
import { useEffect } from 'react';
import $ from 'jquery';
import Navbar2 from '../Navbar/Navbar2';

 
function Aboutus() {
  
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
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

       </Helmet>
    <div className='navservices'>
    <div className="modalcontainer">
  
  <button type="button"  className="btn-primary3" data-toggle="modal"  data-target="#myModal2">
  <div class="m1"></div>
<div class="m2"></div>
<div class="m3"></div>

    <p className='mtext'>Menu</p>
  </button>
  <Navbar/>
  <Navbar2/>
</div>

        </div> 
        <div className='main-conatiner-about'>
        <img className='aboutmainimage' src={aboutmain} alt='main-services'/> 
        <img className='aboutmainimagemb' src={aboutmainmb} alt='main-services'/> 
        <img className='kalogoabout' src={kamerica} alt='kamericalogo'/> 

<img className='kalogo2form' src={kamerica2} alt='kamericalogo'/> 

        <p className='abouttext1'>About Us</p>
        <p className='abouttext2'>Grow with&nbsp;<span style={{color:"rgba(217, 4, 61, 1)"}}>US.</span></p>
        <p className='abouttext3'>We live and breathe digital services powered by data. What drives us is making a lasting<br/> impact on your growth.</p>
        <p className='abouttext3mb1'>We live and breathe digital services powered by data.</p>
        <p className='abouttext3mb2'> What drives us is making a lasting impact on your growth.</p>
 
   </div>
<div className='aboutcontanier2'>
<div className="rowabout">
  <div className="columnabout1">
  <img className='aboutimage2' src={aboutimage2} alt='main-services'/> 
    <div className='bgwhite'><p  style={{visibility:"hidden",fontSize:"2.3vw"}}>s<br/>ss<br/>ss<br/>ss<br/>s<br/>ss<br/>ss<br/>ss<br/>ss<br/>ss<br/>ss<br/>ss<br/>ss<br/>ss<br/>ss<br/>ss<br/>ss</p></div>

      </div>
  <div className="columnabout2">
  <p className='columnabouttext1'>Why Work With&nbsp;<span style={{color:"rgba(217, 4, 61, 1)"}}>US.</span> </p>
  <p className='columnabouttext2'>We’re a passionate marketing team that loves taking an idea and turning it into something<br/> amazing. We think creatively and come up with innovative solutions, all while telling stories<br/> that engage our audience. </p>
  <p className='columnabouttext2mb'>We’re a passionate marketing team that loves taking an idea and <br/>turning it into something amazing. We think creatively and come<br/> up with innovative solutions, all while telling stories that engage our <br/>audience. </p>
  <p className='columnabouttext3'>We’re A brand Experienced Team<br/> 
That Understands&nbsp;<span style={{color:"rgba(217, 4, 61, 1)"}}>Business.</span> </p>
<p className='columnabouttext4'>We are not just an agency; we are a team of experienced, business-minded <br/>individuals that understand that the ultimate objective of your business is to <br/>drive sales while establishing and growing your brand.</p>
<p className='columnabouttext4mb'>We are not just an agency; we are a team of experienced, business<br/>-minded individuals that understand that the ultimate objective of your <br/>business is to drive sales while establishing and growing your brand.</p>

<hr className="aboutline"/>


     </div>
</div>

</div>
<div className='aboutcenter'>
<hr className="aboutline2"/>
<div className="rowaboutcenter">
  <div className="columnaboutcenter1" >
  <img className='aboutimage3' src={aboutimage3} alt='main-services'/> 

  </div>
  <div className="columnaboutcenter2" >
    
    <p className="aboutcentertext1">01</p>
    <p className="aboutcentertext2">Our Passion</p>
    <p className="aboutcentertext3">It all starts with a passion. We are a collaborative team with the passion to take an idea <br/>through the journey where thinking, storytelling, and innovation help us transform an idea<br/> into results.</p>
    <hr className="aboutline3"/>

  </div>
</div>

   </div>
   <div className='aboutcenter'>

<div className="rowaboutcenter2">
  <div className="columnaboutcenter11" >
  <p className="aboutcentertext11">02</p>
    <p className="aboutcentertext22">Our Thinking</p>
    <p className="aboutcentertext33">When we’re passionate about something, it ignites our thinking and help<br/> us come up with a strategy for making that idea a reality. This becomes <br/>our blueprint to success, a detailed plan for achieving our goals.</p>
    <hr className="aboutline4"/>

  </div>
  <div className="columnaboutcenter22" >
  <img className='aboutimage3' src={aboutimage4} alt='main-services'/> 
    

  </div>
</div>

   </div>
   <div className='aboutcenter'>
<div className="rowaboutcenter">
  <div className="columnaboutcenter1" >
  <img className='aboutimage3' src={aboutimage5} alt='main-services'/> 

  </div>
  <div className="columnaboutcenter2" >
    
    <p className="aboutcentertext1">03</p>
    <p className="aboutcentertext2">Our Storytelling</p>
    <p className="aboutcentertext3">This blueprint leads us to our audience with whom we connect and interact on a deeper level.<br/> We pull at their heartstrings and kindle their emotions through a visual and creative brand story.</p>
    <hr className="aboutline3"/>

  </div>
</div>

   </div>
   
   <div className='aboutcenter'>

<div className="rowaboutcenter2">
  <div className="columnaboutcenter11" >
  <p className="aboutcentertext11">04</p>
    <p className="aboutcentertext22">Our Innovation</p>
    <p className="aboutcentertext33">Instead of clinging to ancient modus operandi in this ever-changing world,<br/> we fuse innovation with brand story and avant-garde technologies to<br/> develop memorable brands. </p>
    <hr className="aboutline4"/>

  </div>
  <div className="columnaboutcenter22" >
  <img className='aboutimage3' src={aboutimage6} alt='main-services'/> 
    

  </div>
</div>

   </div>

   <div className='aboutcenter'>
<div className="rowaboutcenter">
  <div className="columnaboutcenter1" >
  <img className='aboutimage3' src={aboutimage8} alt='main-services'/> 

  </div>
  <div className="columnaboutcenter2" >
    
    <p className="aboutcentertext1">05</p>
    <p className="aboutcentertext2">Our Result</p>
    <p className="aboutcentertext3">Our passionate brand stories result in increased brand awareness, high conversation <br/>rate, low cost per acquisition (CPA), loyal customer and much more. </p>
    <hr className="aboutline3"/>

  </div>
</div>

   </div>
<div className='Aboutcenter2mb'>
  
  <div>
     <hr className="aboutline4mb"/>
     <img className='centerimgmb1' src={aboutimage3} alt='main-services'/> 
     <p className="aboutcentertext1mb">01</p>
     <p className="aboutcentertext2mb">Our Passion</p>
     <p className="aboutcentertext3mb">It all starts with a passion. We are a collaborative team with the passion to take <br/>an idea through the journey where thinking, storytelling, and innovation help us <br/>transform an idea into results.</p>
     <hr className="aboutline5mb"/>

  </div>

  <div>

     <img className='centerimgmb2' src={aboutimage4mb} alt='main-services'/> 
     <p className="aboutcentertext11mb">02</p>
     <p className="aboutcentertext22mb">Our Thinking</p>
     <p className="aboutcentertext33mb">When we’re passionate about something, it ignites our thinking and help<br/> us come up with a strategy for making that idea a reality. This becomes <br/>our blueprint to success, a detailed plan for achieving our goals.</p>
     <hr className="aboutline6mb"/>
    
  </div>
 
  <div>
     
     <img className='centerimgmb1' src={aboutimage5} alt='main-services'/> 
     <p className="aboutcentertext1mb">03</p>
     <p className="aboutcentertext2mb">Our Storytelling</p>
     <p className="aboutcentertext3mb">This blueprint leads us to our audience with whom we connect and interact on a<br/> deeper level. We pull at their heartstrings and kindle their emotions through a<br/> visual and creative brand story.</p>
     <hr className="aboutline5mb"/>

  </div>

   <div>

      <img className='centerimgmb2' src={aboutimage6} alt='main-services'/> 
      <p className="aboutcentertext11mb">04</p>
      <p className="aboutcentertext22mb">Our Innovation</p>
      <p className="aboutcentertext33mb">Instead of clinging to ancient modus operandi in this ever-changing world,<br/> we fuse innovation with brand story and avant-garde technologies to<br/> develop memorable brands. </p>
      <hr className="aboutline6mb"/>
    
  </div>
  

  <div>
     
     <img className='centerimgmb1' src={aboutimage8} alt='main-services'/> 
     <p className="aboutcentertext1mb">05</p>
    <p className="aboutcentertext2mb">Our Result</p>
    <p className="aboutcentertext3mb">Our passionate brand stories result in increased brand awareness, high conversation <br/>rate, low cost per acquisition (CPA), loyal customer and much more. </p>
     <hr className="aboutline5mb"/>

  </div>

   
</div>

   <div className='centerlast'>
   <p className='lastabouttext1'>What Our Clients</p> 
   <p className='lastabouttext2'>Are Saying About <span style={{color:"#D9043D"}}>&nbsp;US.</span></p>
   <img className='commarrowa' src={commentarrow} alt='main-services'/> 

   <img className='commarrowb' src={commentarrow} alt='main-services'/> 
 
   

   <div className='' style={{marginTop:"3%"}}>
 <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    
    <div className="carousel-item active">
    
      <div >
      <img className='rectangle9' src={rectangle9} alt='logo1'/>
      </div>
       
      <img className='rectangle10' src={rectangle10} alt='logo1'/>
        <img className='rectangle10a' src={rectangle10} alt='logo1'/>
      
      <div className="carousel-caption ">
   
      
 
      <img className='aboutimagelast7' src={aboutimage7} alt='main-services'/> 

      <p className='aboutlasttext1'>
   There’s no other company that does it better. Konnect America<br/> professionalism, patnership and expertise is invaluable. They are a true <br/>extension of our team!
   </p>
 <p className='aboutlasttext2'>Lindsey K.</p>
 <p className='aboutlasttext3'>Demand Generation Leader, E-Builder Enterprise - A Trimble Company</p>

 <p className='aboutlasttext3a'>Demand Generation Leader, E-Builder Enterprise - A Trimble Company</p>

 <p className='aboutlasttext3b'>Demand Generation Leader, E-Builder Enterprise - A Trimble Company</p>

 </div>



   </div>

    <div className="carousel-item">
    <div >
      <img className='rectangle9' src={rectangle10} alt='logo1'/>
      </div>
       
      <img className='rectangle10' src={rectangle9} alt='logo1'/>
        <img className='rectangle10a' src={rectangle9} alt='logo1'/>
      
       <div className="carousel-caption ">
    

       <img className='aboutimagelast7' src={aboutimage7} alt='main-services'/> 

<p className='aboutlasttext1'>
There’s no other company that does it better. Konnect America<br/> professionalism, patnership and expertise is invaluable. They are a true <br/>extension of our team!
</p>
<p className='aboutlasttext2'>Lindsey K.</p>
<p className='aboutlasttext3'>Demand Generation Leader, E-Builder Enterprise - A Trimble Company</p>

<p className='aboutlasttext3a'>Demand Generation Leader, E-Builder Enterprise - A Trimble Company</p>

<p className='aboutlasttext3b'>Demand Generation Leader, E-Builder Enterprise - A Trimble Company</p>

 
  </div>    </div>

    <div className="carousel-item">
    <div >
      <img className='rectangle9' src={rectangle9} alt='logo1'/>
      </div>
       
      <img className='rectangle10' src={rectangle10} alt='logo1'/>
        <img className='rectangle10a' src={rectangle10} alt='logo1'/>
      
       <div className="carousel-caption ">
    

       <img className='aboutimagelast7' src={aboutimage7} alt='main-services'/> 

<p className='aboutlasttext1'>
There’s no other company that does it better. Konnect America<br/> professionalism, patnership and expertise is invaluable. They are a true <br/>extension of our team!
</p>
<p className='aboutlasttext2'>Lindsey K.</p>
<p className='aboutlasttext3'>Demand Generation Leader, E-Builder Enterprise - A Trimble Company</p>

<p className='aboutlasttext3a'>Demand Generation Leader, E-Builder Enterprise - A Trimble Company</p>

<p className='aboutlasttext3b'>Demand Generation Leader, E-Builder Enterprise - A Trimble Company</p>

 
  </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" style={{Color:"red"}} href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only" >Next</span>
  </a>
</div>
 </div> 
  
   <MessengerCustomerChat
    pageId="108977208595666"
    appId="740002227086988"
    
    />
   </div>
<div></div>



  

   <div className='smarglast'></div>
   <Footer/>
    </div>
  );
}

export default Aboutus;
