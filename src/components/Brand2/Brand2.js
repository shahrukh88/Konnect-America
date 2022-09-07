import '../Services/Services.css';
import '../Services/servicecenter.css';
import '../Services/servicelast.css';
import './Brand2.css';

import React from 'react';
import Closemin from '../Images/Close-min.png'
import Navbar from '../Navbar/Navbar';

import '../Landingpage/Navbar.css';


import Br2 from '../Images/brand2/brand2main.jpg'
import loyalty from '../Images/brand2/loyalty.jpg'
import corporate from '../Images/brand2/corporate.jpg'
import webdesign from '../Images/brand2/webdesign.jpg'
import chat from '../Images/brand2/chat.jpg'
import headhunting from '../Images/brand2/headhunting.jpg'

import clogo from '../Images/clogo.png'
import arrowright from '../Images/arrowright.png'

import Footer from '../Footer/Footer';
import { useEffect } from 'react';
import $ from 'jquery';

import {Helmet} from"react-helmet";
function Brand2() {
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
        <img className='brand2image' src={Br2} alt='main-services'/> 
        
        <p className='servicetext1'>Brand Strategy</p>
        <p className='servicetext2'>That Delivers Results</p>
        <p className='servicetext3'>Position your brand to win with a brand strategy that helps you understand </p>
        <p className='servicetext3next'> who you are and how to communicate it in a meaningful way.</p>
          
        <p className='servicetext4'>Our team of Strategists,</p>
        <p className='servicetext4one'>Delivering Creative Strategies</p>
        <p className='servicetext4two'>That Can Help Make Your Better</p>
        <p className='servicetext4three'>Decisions:</p>

        
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
       <p className='centerservicetext1'>Our Approach to Building a Best</p>
       <p className='centerservicetext1one'>Strategy for your brand</p>
        <p className='centerservicetext2'>Whether you’re a growth-stage startup or an established brand, our brand development services give you the tools you need to attract </p>
        <p className='centerservicetext2one'>  lifelong customers, align your team, and build a brand that lasts.</p>
  
    <div className='brand2center'>
        <div className='brand2centerimages'>
        <img className='loyalty' src={loyalty} alt='logo'/> 
        <p className='loyaltytext1'>Brand Heart</p>   
        <p className='loyaltytext2'>Align your business, brand, and story by </p>   
        <p className='loyaltytext3'> identifying and articulating the core </p>   
        <p className='loyaltytext4'>principles that make up your brand heart.</p>   
       
        </div>

        <div className='brand2centerimages1'>
        <img className='brandimg' src={corporate} alt='logo'/> 
        <p className='corporatetext1'>Brand Guidelines</p>   
        <p className='loyaltytext2'>Preserve your brand integrity with beautifully </p>   
        <p className='loyaltytext3'> designed and easy-to-use guidelines that</p>   
        <p className='loyaltytext4'>keep your content on brand at all times.</p>   
       
        </div>

        <div className='brand2centerimages2'>
        <img className='visualiden' src={webdesign} alt='logo'/> 
        <p className='corporatetext1'>Visual Identity</p>   
        <p className='loyaltytext2'>Bring your brand to life with an expertly </p>   
        <p className='loyaltytext3'> designed identity that makes you stand </p>   
        <p className='loyaltytext4'>out from your competition.</p>   
       
        </div>


        <div className='brand2centerimages2'>
        <img className='loyalty' src={chat} alt='logo'/> 
        <p className='corporatetext1'>Brand Messaging</p>   
        <p className='loyaltytext2'>Make your brand messaging stick with a </p>   
        <p className='loyaltytext3'>framework that helps you tell a consistent,</p>   
        <p className='loyaltytext4'> cohesive brand story.</p>   
       
        </div>

        <div className='brand2centerimages2'>
        <img className='employimg' src={headhunting} alt='logo'/> 
        <p className='corporatetext1'>Employer Brand</p>   
        <p className='loyaltytext2'>Attract and retain the best and brightest in </p>   
        <p className='loyaltytext3'> your industry by building an employer </p>   
        <p className='loyaltytext4'>brand that people want to work for.</p>   
       
        </div>


   </div>
  
   <hr className='brandline'/>
   </div>
   <div className='brandlast'>
    <p className='slasttext1'>Our Brand Strategy Services</p>
   <p className='slasttext2'>You wouldn’t build a house without a blueprint, supporting materials, and a solid plan. Likewise, a website requires a great deal<br/>
 of attention and planning. Here are the steps we take toward launching a successful website</p>
 
<p className='info1'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Brand Story&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Funnel Mapping &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Logo Identity</p>
<p className='info2one'>Market Positioning&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;Market & Competitive Research &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Marketing Strategy</p>
<p className='info3one'>Sales Enablement&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Message Development</p>
<p className='info4one'>Brand Voice</p>

   </div>
<div className='smarglast'></div>
   <Footer/>

    </div>
  );
}

export default Brand2;
