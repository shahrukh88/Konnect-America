import './Services.css';
import './servicecenter.css';
import './servicelast.css';
import Closemin from '../Images/Close-min.png'
import Navbar from '../Navbar/Navbar';

import '../Landingpage/Navbar.css';
import Talogo from '../Images/Talogo.png'
import campaign from '../Images/campaign.png'
import campaign2 from '../Images/campaign2.png'
import campaign3 from '../Images/campaign3.png'
import campaign4 from '../Images/campaign4.png'
import campaign5 from '../Images/campaign5.png'
import kamerica from '../Images/kamericalogo.png'
import kamerica2 from '../Images/kamericalogo2.png'
import services from '../Images/services.png'
import clogo from '../Images/clogo2.png'
import v9 from '../Images/v9.png'
import v10 from '../Images/v10.png'
import Footer from '../Footer/Footer';
import $ from 'jquery';

import { Link } from "react-router-dom"; 
import React from 'react';

import { useEffect } from 'react';

import {Helmet} from"react-helmet";
import Navbar2 from '../Navbar/Navbar2';
function Services() {
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
  
  <div  className="btn-primary3" data-toggle="modal"  data-target="#myModal2">
  <div class="m1"></div>
<div class="m2"></div>
<div class="m3"></div>

    <p className='mtext'>Menu</p>
  </div>
  <img className='kalogoservices' src={kamerica} alt='kamericalogo'/> 

<img className='kalogo2services' src={kamerica2} alt='kamericalogo'/> 


  <Navbar/>
  <Navbar2/>
</div>

   
        </div> 
        <div className='main-conatiner-service'>
        <img className='servicesimage' src={services} alt='main-services'/> 
      
        <p className='servicetext1'>Transform your Website</p>
        <p className='servicetext2'>Into A Growth Engine</p>
        <p className='servicetext3'>Your website is unquestionably the number one resource that buyers use for evaluating <br/>your company, products and services– often times before ever speaking with a sales rep.<br/> A website performs many jobs: brand ambassador, product/service educator, 24/7 digital<br/> sales rep and customer caretaker — all in one. Therefore it should have the capacity to <br/>nurture buyers along every stage of the buyer’s journey and measurably support deeper <br/>engagement to drive sales.</p>
        <p className='servicetext4'>Our Team Of Designers, </p>
        <p className='servicetext44'> Developers And Web Strategists</p>
        <p className='servicetext444'> Can Help You:</p>
        <img className='slogo1' src={clogo} alt='logo'/> 
        
      <p className='servicetext5'>Improve organic search (SEO) traffic</p>
      <img className='slogo2' src={clogo} alt='logo'/> 

        <p className='servicetext6'>Generate top-of-funnel leads</p>
        <img className='slogo3' src={clogo} alt='logo'/> 

        <p className='servicetext7'>Increase measurable engagement</p>
        <img className='slogo4' src={clogo} alt='logo'/> 

        <p className='servicetext8'>Support the buyer's journey</p>
        <img className='slogo5' src={clogo} alt='logo'/> 

        <p className='servicetext9'>Drive sales growth</p>
      <hr className='new4'/>
        </div>
        <div className='servicecenter'>
       <p className='centerservicetext1'>Our Approach To Building A Successful Website</p>
       <p className='centerservicetext1mb'>Our Approach To Building</p>
       <p className='centerservicetext1amb'> A Successful Website</p>
        <p className='centerservicetext2'>You wouldn’t build a house without a blueprint, supporting materials, and a solid plan. Likewise, a website requires a great deal<br/>
 of attention and planning. Here are the steps we take toward launching a successful website</p>
 
 <img className='centerservicelogo1' src={campaign} alt='logo'/> 
 <img className='centerservicelogo2' src={campaign2} alt='logo'/> 
 <p className='slogo1text'>Technology</p>  
  <p className='slogo2text'>Sitemap & User Flows</p>  
   
 
 <img className='centerservicelogo3' src={campaign3} alt='logo'/> 
 <img className='centerservicelogo4' src={campaign4} alt='logo'/> 
 <img className='centerservicelogo5' src={campaign5} alt='logo'/>       
   <p className='slogo3text'>Wireframes</p>  
   
  <p className='slogo4text'>Design & Development</p>
  <p className='slogo5text'>Launch & Iterate</p>  
   <p className='slogo1text1'>Drive results with an effective and <br/>authentic brand story across all<br/> touchpoints. From websites to videos and <br/>sales tools to social, we help your </p>
   <p className='slogo1text2'>Drive results with an effective and <br/>authentic brand story across all<br/> touchpoints. From websites to videos and <br/>sales tools to social, we help your </p>
   <p className='slogo1text3'>Drive results with an effective and <br/>authentic brand story across all<br/> touchpoints. From websites to videos and <br/>sales tools to social, we help your </p>
   <p className='slogo1text4'>Drive results with an effective and <br/>authentic brand story across all<br/> touchpoints. From websites to videos and <br/>sales tools to social, we help your </p>
   <p className='slogo1text5'>Drive results with an effective and <br/>authentic brand story across all<br/> touchpoints. From websites to videos and <br/>sales tools to social, we help your </p>
   <hr className='news'/>
   </div>
   <div className='servicelast'>
    <p className='slasttext1'>Website Design & Development Services</p>
    <p className='slasttext1mba'>Our Approach to Building</p>
    <p className='slasttext1mbb'>a Successful Website</p>
   
   <p className='slasttext2'>You wouldn’t build a house without a blueprint, supporting materials, and a solid plan. Likewise, a website requires a great deal<br/>
 of attention and planning. Here are the steps we take toward launching a successful website</p>

 <p className='slasttext2mb'>You wouldn’t build a house without a blueprint, supporting materials, and a <br/>solid plan. Likewise, a website requires a great deal
 of attention and planning.<br/> Here are the steps we take toward launching a successful website</p>
 <img className='v9' src={v9} alt='v9'/>     
<img className='v10' src={v10} alt='v10'/> 
<p className='v9text'>DESIGN</p>
<p className='v10text'>DEVELOPMENT</p>
<div className="servicerow">
  <div class="servicecolumn">
   <p className='rdesign1'>RESPONSIVE DESIGN</p>
   <p className='rdesign2'>Drive results with an effective and authentic brand story<br/> across all touchpoints. From websites to videos and sales tools<br/> to social, we help your </p>
   <p className='rdesign2mb'>Drive results with an effective and authentic brand story across all <br/>touchpoints. From websites to videos and sales tools to social, we<br/> help your </p>
   <p className='rdesign11'>Brand Messaging & Positioning</p>
   <p className='rdesign2'>Drive results with an effective and authentic brand story<br/> across all touchpoints. From websites to videos and sales tools<br/> to social, we help your </p>
   <p className='rdesign5mb'>Drive results with an effective and authentic brand story across all <br/>touchpoints. From websites to videos and sales tools to social, we<br/> help your </p>
  
   </div>
  <div className="servicecolumn">
  <p className='rdesign3'>UI/UX</p>
  <p className='rdesign4mb'>Drive results with an effective and authentic brand story across all <br/>touchpoints. From websites to videos and sales tools to social, we<br/> help your </p>
   <p className='rdesign4'>Drive results with an effective and authentic brand story<br/> across all touchpoints. From websites to videos and sales tools<br/> to social, we help your </p>
   <p className='rdesign33'>CONTENT DEVELOPMENT</p>
   <p className='rdesign4'>Drive results with an effective and authentic brand story<br/> across all touchpoints. From websites to videos and sales tools<br/> to social, we help your </p>
   <p className='rdesign6mb'>Drive results with an effective and authentic brand story across all <br/>touchpoints. From websites to videos and sales tools to social, we<br/> help your </p>
  
      
  </div>

</div>

   </div>
<div className='smarglast'></div>
   <Footer/>

    </div>
  );
}

export default Services;
