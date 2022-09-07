import './Aboutus.css';
import './Aboutcenter2.css';
import './Aboutlast.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { Link } from "react-router-dom"; 
import React from 'react';
import Closemin from '../Images/Close-min.png'


import '../Landingpage/Navbar.css';
import Talogo from '../Images/Talogo.png'

import aboutmain from '../Images/AboutusImages/aboutmain.jpg'

import aboutimage2 from '../Images/AboutusImages/aboutimage2.jpg'
import aboutimage3 from '../Images/AboutusImages/aboutimage3.jpg'
import aboutimage4 from '../Images/AboutusImages/aboutimage4.jpg'
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
  
  <button type="button"  className="btn btn-primary" data-toggle="modal" style={{position:"absolute",marginTop:"4%",marginLeft:"90%",backgroundColor:"white",width:"10%",height:"7vh",padding:".3%"}} data-target="#myModal2">
  <div class="m1"></div>
<div class="m2"></div>
<div class="m3"></div>

    <p className='mtext'>Menu</p>
  </button>
  <Navbar/>
</div>

        </div> 
        <div className='main-conatiner-about'>
        <img className='aboutmainimage' src={aboutmain} alt='main-services'/> 
        <p className='abouttext1'>About Us</p>
        <p className='abouttext2'>Grow with&nbsp;<span style={{color:"rgba(217, 4, 61, 1)"}}>US.</span></p>
        <p className='abouttext3'>We live and breathe digital services powered by data. What drives us is making a lasting<br/> impact on your growth.</p>

   </div>
<div className='aboutcontanier2'>
<div className="rowabout">
  <div className="columnabout1">
  <img className='aboutimage2' src={aboutimage2} alt='main-services'/> 
    
      </div>
  <div className="columnabout2">
  <p className='columnabouttext1'>Why Work With&nbsp;<span style={{color:"rgba(217, 4, 61, 1)"}}>US.</span> </p>
  <p className='columnabouttext2'>We’re a passionate marketing team that loves taking an idea and turning it into something<br/> amazing. We think creatively and come up with innovative solutions, all while telling stories<br/> that engage our audience. </p>
  <p className='columnabouttext3'>We’re A brand Experienced Team<br/> 
That Understands&nbsp;<span style={{color:"rgba(217, 4, 61, 1)"}}>Business.</span> </p>
<p className='columnabouttext4'>We are not just an agency; we are a team of experienced, business-minded <br/>individuals that understand that the ultimate objective of your business is to <br/>drive sales while establishing and growing your brand.</p>
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
   <div>
   
   <div className='aboutlast'>
   <img className='aboutimage7' src={aboutimage7} alt='main-services'/> 

   <p className='aboutlasttext1'>
   There’s no other company that does it better. Konnect America<br/> professionalism, patnership and expertise is invaluable. They are a true <br/>extension of our team!
   </p>
 <p className='aboutlasttext2'>Lindsey K.</p>
 <p className='aboutlasttext3'>Demand Generation Leader, E-Builder Enterprise - A Trimble Company</p>
 

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
