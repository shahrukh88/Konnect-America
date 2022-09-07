import '../Services/Services.css';
import '../Services/servicecenter.css';
import '../Services/servicelast.css';
import './Brand2.css';
import './Brand3.css';

import React from 'react';
import Closemin from '../Images/Close-min.png'
import Navbar from '../Navbar/Navbar';

import '../Landingpage/Navbar.css';


import Br2 from '../Images/brand2/brand3main.jpg'
import loyalty from '../Images/brand2/description.jpg'
import corporate from '../Images/brand2/categorzation.jpg'
import webdesign from '../Images/brand2/searchreavlnce.jpg'
import chat from '../Images/brand2/productmangment.jpg'
import headhunting from '../Images/brand2/tagging.jpg'

import clogo from '../Images/clogo.png'
import arrowright from '../Images/arrowright.png'

import Footer from '../Footer/Footer';
import { useEffect } from 'react';
import $ from 'jquery';

import {Helmet} from"react-helmet";
function Brand3() {
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
        <div className='main-conatiner-service'>
        <img className='brand3image' src={Br2} alt='main-services'/> 
        
        <p className='servicetext1'>E-Commerce</p>
        <p className='servicetext2'>Solutions For </p>
        <p className='servicetext2one'>Your Online Business</p>
        <p className='servicetext3one'>Your website is unquestionably the number one resource that buyers use for evaluating</p>
        <p className='servicetext3two'> your company, products and services– often times before ever speaking with a sales rep.</p>
        <p className='servicetext3three'> A website performs many jobs: brand ambassador, product/service educator, 24/7  digital</p>
        <p className='servicetext3four'> sales rep and customer caretaker — all in one. Therefore it should have the capacity to </p>
        <p className='servicetext3five'> nurture buyers along every stage of the buyer’s journey and measurably support deeper </p>
        <p className='servicetext3six'> engagement to drive sales. </p>
       
        <p className='servicetext4'>Our team of Designers,</p>
        <p className='servicetext4one'>Delivering Creative Services That</p>
        <p className='servicetext4two'>Can Help Your Grand Grow:</p>
        
        
        <p className='servicetext5'>Improve organic search (SEO) traffic</p>
        <img className='slogo1' src={clogo} alt='logo'/> 
        <p className='servicetext6'>Generate top-of-funnel leads</p>
        <img className='slogo2' src={clogo} alt='logo'/> 
        <p className='servicetext7'>Increase measurable engagement</p>
        <img className='slogo3' src={clogo} alt='logo'/> 
        <p className='servicetext8'>Support the buyer's journey</p>
        <img className='slogo4' src={clogo} alt='logo'/> 
        <p className='servicetext9'>Drive sales growth</p>
        <img className='slogo5' src={clogo} alt='logo'/> 
      <hr className='new4'/>
        </div>
        <div className='servicecenter'>
       <p className='centerservicetext1'>Our Approach To Building A Successful</p>
       <p className='centerservicetext1one'>E-Commerce Website</p>
        <p className='centerservicetext2'>You wouldn’t build a house without a blueprint, supporting materials, and a solid plan. Likewise, a website requires a great deal of attention </p>
        <p className='centerservicetext2one'> and planning. Here are the steps we take toward launching a successful website</p>
  
    <div className='brand2center'>
        <div className='brand2centerimages'>
        <img className='loyalty' src={loyalty} alt='logo'/> 
        <p className='producttext1'>Product Description</p>   
        <p className='loyaltytext2'>Drive results with an effective and</p>   
        <p className='loyaltytext3'> authentic brand story across all</p>   
        <p className='loyaltytext4'> touchpoints. From websites to videos and</p>
        <p className='loyaltytext5'> sales tools to social, we help your </p>   
       
        </div>

        <div className='brand2centerimages1'>
        <img className='brandimg' src={corporate} alt='logo'/> 
        <p className='categorytext1'>Product categorization</p>   
        <p className='loyaltytext2'>Drive results with an effective and</p>   
        <p className='loyaltytext3'> authentic brand story across all</p>   
        <p className='loyaltytext4'> touchpoints. From websites to videos and</p>
        <p className='loyaltytext5'> sales tools to social, we help your </p>   
       
        </div>

        <div className='brand2centerimages2'>
        <img className='searchrel' src={webdesign} alt='logo'/> 
        <p className='corporatetext1'>Search Relevance</p>   
        <p className='loyaltytext2'>Drive results with an effective and</p>   
        <p className='loyaltytext3'> authentic brand story across all</p>   
        <p className='loyaltytext4'> touchpoints. From websites to videos and</p>
        <p className='loyaltytext5'> sales tools to social, we help your </p>   
       
        </div>


        <div className='brand2centerimages2'>
        <img className='loyalty' src={chat} alt='logo'/> 
        <p className='mangtext1'>Product Data Management</p>   
        <p className='loyaltytext2'>Drive results with an effective and</p>   
        <p className='loyaltytext3'> authentic brand story across all</p>   
        <p className='loyaltytext4'> touchpoints. From websites to videos and</p>
        <p className='loyaltytext5'> sales tools to social, we help your </p>   
       
        </div>

        <div className='brand2centerimages2'>
        <img className='tagingimg' src={headhunting} alt='logo'/> 
        <p className='tagtext1'>Image & Video Tagging</p>   
        <p className='loyaltytext2'>Drive results with an effective and</p>   
        <p className='loyaltytext3'> authentic brand story across all</p>   
        <p className='loyaltytext4'> touchpoints. From websites to videos and</p>
        <p className='loyaltytext5'> sales tools to social, we help your </p>   
       
        </div>


   </div>
  
   <hr className='brandline'/>
   </div>
   <div className='brandlast'>
    <p className='slasttext1'>Our E-Commerce Services</p>
   <p className='slasttext2'>You wouldn’t build a house without a blueprint, supporting materials, and a solid plan. Likewise, a website requires a great deal<br/>
 of attention and planning. Here are the steps we take toward launching a successful website</p>
 
<p className='infobrand3text1'>Webstore Setup&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;E-Commerce Integration&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Digital Marketing Automation</p>
<p className='info2one'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Web Optimization&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;Audit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E-Commerce Testing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SEO</p>
<p className='info3onebrand'>E-Commerce Development&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;UI/UX Design&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Maintenance</p>
<p className='info4brand3'>Entry Consulting&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Development</p>

   </div>
<div className='smarglast'></div>
   <Footer/>

    </div>
  );
}

export default Brand3;
