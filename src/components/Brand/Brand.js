import '../Services/Services.css';
import '../Services/servicecenter.css';
import '../Services/servicelast.css';
import './Brand.css';
import { Link } from "react-router-dom"; 
import React from 'react';
import Closemin from '../Images/Close-min.png'
import Navbar from '../Navbar/Navbar';
import kamerica from '../Images/kamericalogo.png'
import kamerica2 from '../Images/kamericalogo2.png'

import '../Landingpage/Navbar.css';
import Talogo from '../Images/Talogo.png'

import Br1 from '../Images/Br1.jpg'
import clogo from '../Images/clogo2.png'
import arrowright from '../Images/arrowright.png'
import v10 from '../Images/v10.png'
import Footer from '../Footer/Footer';
import { useEffect } from 'react';
import $ from 'jquery';

import {Helmet} from"react-helmet";
import Navbar2 from '../Navbar/Navbar2';
function Brand() {
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

<img className='kalogo2market' src={kamerica2} alt='kamericalogo'/> 

  <Navbar/>
  <Navbar2/>
</div>

    </div> 
        <div className='main-conatiner-service'>
        <img className='servicesimage' src={Br1} alt='main-services'/> 
        
        <p className='servicetext1'>Advertising Campagin</p>
        <p className='servicetext2'>That Delivers Results</p>
        <p className='servicetext3'>Your website is unquestionably the number one resource that buyers use for evaluating <br/>your company, products and services– often times before ever speaking with a sales rep.<br/> A website performs many jobs: brand ambassador, product/service educator, 24/7 digital<br/> sales rep and customer caretaker — all in one. Therefore it should have the capacity to <br/>nurture buyers along every stage of the buyer’s journey and measurably support deeper <br/>engagement to drive sales.</p>
        <p className='servicetext4'>Our Team Of Designers, </p>
        <p className='servicetext44'> Developers And Web Strategists</p>
        <p className='servicetext444'> Can Help You:</p>
      
            <p className='servicetext5'>Improve organic search (SEO) traffic</p>
        <img className='slogo1ba' src={clogo} alt='logo'/> 
        <p className='servicetext6'>Generate top-of-funnel leads</p>
        <img className='slogo2ba' src={clogo} alt='logo'/> 
        <p className='servicetext7'>Increase measurable engagement</p>
        <img className='slogo3ba' src={clogo} alt='logo'/> 
        <p className='servicetext8'>Support the buyer's journey</p>
        <img className='slogo4ba' src={clogo} alt='logo'/> 
        <p className='servicetext9'>Drive sales growth</p>
        <img className='slogo5ba' src={clogo} alt='logo'/> 
      <hr className='new4'/>
        </div>
        <div className='servicecenter'>
       <p className='centerservicetext1'>Our Approach To Better Advertising <br/>
Campagin Results</p>
<p className='centerservicetext1mb'>Our Approach To Better Advertising</p>
       <p className='centerservicetext1amb'>Campagin Results</p>
     
        <p className='centerservicetext2'>We believe that consistent, incremental change can yield exceptional results. Striving for better is where we shine.</p>
        <p className='centerservicetext2a'>We believe that consistent, incremental change can yield exceptional results.</p>
        <p className='centerservicetext2b'>Striving for better is where we shine.</p>
   <p className='brandtext1'>Current%</p>
   <p className='brandtext2'>Establish Baseline</p>
   <p className='brandtext3'>We believe that consistent, incremental<br/> change can yield exceptional results.<br/> Striving for better is where we shine.</p>
   <img className='arrowright' src={arrowright} alt='logo'/> 
   <p className='brandtext11'>1-2%</p>
   <p className='brandtext22'>Build Traction</p>
   <p className='brandtext33'>We believe that consistent, incremental<br/> change can yield exceptional results.<br/> Striving for better is where we shine.</p>
   <img className='arrowright2' src={arrowright} alt='logo'/> 

   <p className='brandtext111'>3-5%+</p>

   <p className='brandtext222'>Accelerate Growth</p>
   <p className='brandtext333'>We believe that consistent, incremental<br/> change can yield exceptional results.<br/> Striving for better is where we shine.</p>
   

   <hr className='brandline'/>
   </div>
   <div className='brandlast'>
    <p className='blasttext1'>Our Creative advertisment Services</p>
    
   <p className='blasttext2'>You wouldn’t build a house without a blueprint, supporting materials, and a solid plan. Likewise, a website requires a great deal<br/>
 of attention and planning. Here are the steps we take toward launching a successful website</p>

 <p className='blasttext2mb1'>You wouldn’t build a house without a blueprint, supporting materials,and a </p>

 <p className='blasttext2mb2'> solid plan. Likewise, a website requires a great deal
 of attention and planning.</p>
 <p className='blasttext2mb3'>Here are the steps we take toward launching a successful website</p>

<p className='info1'>InfoGraphic&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Videography &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Photography&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Copywriting</p>

<p className='info2'>Poster Design&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Digital Design &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Product Design</p>
<p className='info3'>Content Writing&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Digital Design </p>
<p className='info4'>Digital Design</p>

   </div>
<div className='smarglast'></div>
   <Footer/>

    </div>
  );
}

export default Brand;
