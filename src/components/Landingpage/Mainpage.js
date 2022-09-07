import './Main.css';
import './Center.css';
import './Center2.css';
import './Centerlast.css';
import './Navbar.css';
import $ from 'jquery';
import React from 'react';

import { useEffect } from 'react';
import {Helmet} from"react-helmet";
import landing1 from '../Images/landing1.jpg'
import Talogo from '../Images/Talogo.png'
import log1 from '../Images/log1.png'
import log2 from '../Images/log2.png'
import log3 from '../Images/log3.png'
import clogo from '../Images/clogo.png'
import cimage1 from '../Images/cimage1.jpg'
import cimage2 from '../Images/cimage3.jpg'
import cimage3 from '../Images/cimage2.jpg'
import ctwologo1 from '../Images/ctwologo1.jpg'
import ctwologo2 from '../Images/ctwologo2.jpg'
import ctwologo3 from '../Images/ctwologo3.jpg'
import ctwologo4 from '../Images/ctwologo4.jpg'
import ctwologo5 from '../Images/ctwologo5.jpg'
import ctwologo6 from '../Images/ctwologo6.jpg'
import quotation from '../Images/quotation.png'
import arrow from '../Images/arrow.png'
import centermain from '../Images/centermain.jpg'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Closemin from '../Images/Close-min.png'

import { Link } from "react-router-dom"; 

import { hover } from '@testing-library/user-event/dist/hover';
function Mainpage() {
  
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
    <div>
         <Helmet>
          <title>Konnect America</title>
     < meta name="viewport" content="width=device-width, initial-scale=1.0"/>
     <meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="style.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
           <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>

       </Helmet>
     
      <div className="containerlanding"  >
      <img className='landing1' src={landing1} alt='header'/> 
      

      <p className='txt1'>A Marketing agency</p>
      <p className='txt11'>Solving business problems, help your</p>
   <p className='txt2'>Brands&nbsp;<span style={{color:"#D9043D"}}>GROW.</span></p>
   
   <p className='txt4'>We’re here to help you get the edge <br/>Konnect America: your one-stop-shop for all your marketing needs</p>
    <div className='letdiscus'><a className='letlink' href='./Aboutus'>Let’s Discuss your Brand</a></div>
    <div className="modalcontainer">
  
  <button type="button"  className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg" style={{position:"absolute",marginTop:"-47%",marginLeft:"90%",backgroundColor:"white",width:"10%",height:"7vh",padding:".3%"}} >
  <div class="m1"></div>
<div class="m2"></div>
<div class="m3"></div>

    <p className='mtext'>Menu</p>
  </button>
  

  <Navbar/>
</div>
  
      </div>

    <div className="float-container">

<div className="float-child">
<img className='log1' src={log1} alt='logo1'/> 
<p className='ftxt1'>Smart Solutions</p>
<p className='ftxt2'>We’re passionate about marketing, which <br/>allow us to come out-of-the-box and smart <br/>solutions for your business.</p>
</div>

<div className="float-child"><img className='log2' src={log2} alt='logo2'/> 
<p className='ftxt3'>Experienced Team</p>
<p className='ftxt4'>We recruit some of the best technology and <br/>creative talent in the world which enables us to <br/>drive meaningful results for our clients.</p></div>

<div className="float-child">
<img className='log3' src={log3} alt='logo3'/> 
<p className='ftxt5'>Results Driven</p>
<p className='ftxt6'>We believe in result driven marketing so you can <br/> experience short-term quick wins as well as long-term<br/>results that don't take forever to happen. </p></div>
</div>

 <div className='slidecontainer'>
 <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="bgimage"></div>
      <div className="carousel-caption ">
      <img className='logcaursol' src={log1} alt='logo1'/> 
<p className='caursoltxt11'>Smart Solutions</p>

<p className='causrsoltxt2'>We’re passionate about marketing, which </p> 
<p className='causrsoltxt22'>allow us to come out-of-the-box and smart </p> 
<p className='causrsoltxt222'>solutions for your business.</p> 

   </div>

    </div>
    <div className="carousel-item">
    <div className="bgimage"></div>
    <div className="carousel-caption ">
    <img className='logcaursol' src={log2} alt='logo2'/> 
 <p className='caursoltxt11'>Experienced Team</p> 

 <p className='causrsoltxt2'> We recruit some of the best technology and </p>
 <p className='causrsoltxt22'>creative talent in the world which enables us to</p> 
 <p className='causrsoltxt222'>drive meaningful results for our clients.</p> 
    

  </div>
    </div>

    <div className="carousel-item">
    <div className="bgimage"></div>
    <div className="carousel-caption ">
    
    <img className='logcaursol' src={log3} alt='logo3'/> 
<p className='caursoltxt11'>Results Driven</p>
 
<p className='causrsoltxt2'>We believe in result driven marketing so you can </p>
 <p className='causrsoltxt22'> experience short-term quick wins as well as long-term</p> 
 <p className='causrsoltxt222'>results that don't take forever to happen.</p> 
  </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
 </div>
<div className='center'>
<div className='landcenter11'>
  
<div className="float2-container2">

<div className="float2-child2">
<p className='ctxt1'>01</p>
<p className='ctxt2'>Digital Marketing Services At<br/> 
Your Fingertips</p>
<p className='ctxt3'>Dive into digital marketing with the help of best agency around.<br/>Get digital marketing services that deliver real results.</p>

<hr className='linemain'></hr>
</div>

<div className="float2-child2">
<img className='cimage1' src={cimage1} alt='cimage1'/> 

</div>
</div>
</div>
<div className='landcenter1'>
  
<div className="float2-container2">

<div className="float2mb-child2mb">
<img className='cimagemb' src={cimage1} alt='cimage1'/> 
</div>

<div className="float2mb-child2mb">

<p className='ctxt1mb'>01</p>
<p className='ctxt2mb'>Digital Marketing Services At<br/> 
Your Fingertips</p>
<p className='ctxt3mb'>Dive into digital marketing with the help of best agency around.<br/>Get digital marketing services that deliver real results.</p>
<hr className='linemainmb'></hr>

</div>
</div>
</div>




<div className="float3-container3">

<div className="float3-child3">
<img className='cimage2' src={cimage2} alt='cimage2'/> 
</div>

<div className="float3-child3">
    
<p className='ctxt11'>02</p>
<p className='ctxt22'>We are growth partners who care <br/>about you and your success</p>
<p className='ctxt33'>We are a digital marketing agency that offers a wide variety  of <br/>services to help you take your business to the next level.<br/>  We work hard for your success-let us do our part!</p>
<hr className='line2'></hr>
</div>
</div>


<div className='landcenter11'>
<div className="float4-container4">

<div className="float4-child4">
<p className='ctxt1' style={{marginTop:"3%"}}>03</p>
<p className='ctxt2'>Designing a better brand<br/>
experience. 
</p>
<p className='ctxt3'>Designing a better brand experience. (Building brands for the future).<br/>Konnect America take a strategic approach to building brands and <br/>delivering results. By merging innovation and consumer experience<br/> we build brands for the future.</p>
<hr className='linemain'></hr>
</div>

<div className="float4-child4">
<img className='cimage1' src={cimage3} alt='cimage1'/> 

</div>
</div>
</div>
<div className='landcenter1'>
  
<div className="float2-container2">

<div className="float2mb-child2mb">
<img className='cimagemb' src={cimage3} alt='cimage1'/> 
</div>


<div className="float2mb-child2mb">

<p className='ctxt1mb'>03</p>
<p className='ctxt2mb'>Designing a better brand<br/>
experience. </p>
<p className='ctxt3mb'>Designing a better brand experience. (Building brands for the <br/>future). Konnect America take a strategic approach to building <br/>brands and delivering results. By merging innovation and<br/> consumer experience we build brands for the future.</p>
<hr className='linemainmb'></hr>

</div>
</div>
</div>

</div>

<div className='centerlanding2'>

<p className='t'>.</p>
<p className='services'>Our Services</p>
<div className='gbrand'>Services To Grow Your Brand</div>

<div className='centerlanding22'>
<div className="float5-container5">

<div className="float5-child5">
<div className='scon7'>
<img className='ctwolog1' src={ctwologo1} alt='cimage'/> 
<p className='centertwotxt1'>WEB DESIGN STRATEGY</p>
<p className='centertwotxt22'>Designing a better brand
experience.</p>
<p className='centertwotxt33'>It’s no secret that a website is one of the most important pieces of your digital marketing strategy. We can create a website tailored to your needs that will be easy to use, functional, and polished.</p>
<a href='#'>
<img className='arrow' src={arrow} alt='arrow'/> 
</a>
</div>
</div>

<div className="float5-child5">
<div className='scon2'>
<img className='ctwolog2' src={ctwologo2} alt='cimage'/> 
<p className='centertwotxt1'>BRAND CREATION</p>
<p className='centertwotxt2'>Create a brand that <br/>stands out.</p>
<p className='centertwotxt3'>A strong brand is a successful business. We will evaluate your current brand and find ways to strengthen it and make it memorable.</p>
<br/><br/>
<a href='#'>

<img className='arrow' src={arrow} alt='arrow'/> 

</a>

</div>
</div>

<div className="float5-child5">
<div className='scon3'>
<img className='ctwolog3' src={ctwologo3} alt='cimage'/> 
<p className='centertwotxt1'>CONTENT MARKETING</p>
<p className='centertwotxt2'>Get the most out of your content marketing efforts.</p>
<p className='centertwotxt3'>Running ads isn't enough to reach potential customers or grow your business, we will create content that will resonate with your audience and turn them into your brand ambassadors.</p><a href='#'>
<img className='arrow' src={arrow} alt='arrow'/> 
</a>
</div>
</div>


</div>


<div className="float5-container5">

<div className="float5-child5">
<div className='scon4'>
<img className='ctwolog4' src={ctwologo4} alt='cimage'/> 
<p className='centertwotxt1'>CONTENT OPTIMIZATION</p>
<p className='centertwotxt2'>Designing a better brand
experience.</p>
<p className='centertwotxt3'>It's important that your audience   engages with your content. We’ll optimize your content for maximum exposure across all channels, so all eyes are on you!<span style={{   visibility: "hidden"}}>shah hshahah shahahshahs s</span> </p>
<a href='#'>
<img className='arrow' src={arrow} alt='arrow'/> 
</a>
</div>
</div>

<div className="float5-child5">
<div className='scon5'>
<img className='ctwolog5' src={ctwologo5} alt='cimage'/> 
<p className='centertwotxt1'>ADVERTISING CAMPAGIN</p>
<p className='centertwotxt2'>A better way to advertise.<br/><span style={{   visibility: "hidden"}}>shah hshahah </span></p>
<p className='centertwotxt3'>Advertisement Campaign (Media Buying) Do you need more visibility? More customers? More growth? We will strategically buy ads on the best channels to reach the right audience for your business.


</p><a href='#'>
<img className='arrow' src={arrow} alt='arrow'/> 
</a>
</div>
</div>

<div className="float5-child5">
<div className='scon6'>
<img className='ctwolog6' src={ctwologo6} alt='cimage'/> 
<p className='centertwotxt1'>LEAD GENERATION</p>
<p className='centertwotxt2'>Get leads that matter.<br/><span style={{   visibility: "hidden"}}>shah hshahah </span></p>
<p className='centertwotxt3'>A business can never survive without effective lead generation process, we will generate leads of various types based on your needs, ensuring that quality is compromised.</p>
<a href='#'>
<img className='arrow' src={arrow} alt='arrow'/> 
</a>
</div>
</div>
</div>
</div>




<div className='centerlanding22mb'>
<div className="float5mb-container5mb">

<div className="float5mb-child5mb">
<div className='scon7mb'>
<img className='ctwolog1mb' src={ctwologo1} alt='cimage'/> 
<p className='centertwotxt1mb'>WEB DESIGN STRATEGY</p>
<p className='centertwotxt22mb'>Designing a better brand
experience.</p>
<p className='centertwotxt33mb'>It’s no secret that a website is one of the most important pieces of your digital marketing strategy. We can create a website tailored to your needs that will be easy to use, functional, and polished.

</p>
<a href='#'>
<img className='arrowmb' src={arrow} alt='arrow'/> 
</a>
</div>
</div>



<div className="float5mb-child5mb">
<div className='scon2mb'>
<img className='ctwolog2mb' src={ctwologo2} alt='cimage'/> 
<p className='centertwotxt1mb'>BRAND CREATION</p>
<p className='centertwotxt2mb'>Create a brand that <br/>stands out.</p>
<p className='centertwotxt3mb'>A strong brand is a successful business. We will evaluate your current brand and find ways to strengthen it and make it&nbsp;&nbsp;<span style={{   visibility: "hidden"}}> ssssssssss</span> memorable.&nbsp;&nbsp;&nbsp;&nbsp;<span style={{   visibility: "hidden"}}> hshahah shahahshahs s</span></p>

<a href='#'>
<img className='arrowmb' src={arrow} alt='arrow'/> 
</a>
</div>
</div>

</div>


<div className="float5mb-container5mb">

<div className="float5mb-child5mb">
<div className='scon4mb'>
<img className='ctwolog4mb' src={ctwologo4} alt='cimage'/> 
<p className='centertwotxt1mb'>CONTENT OPTIMIZATION</p>
<p className='centertwotxt2mb'>Designing a better brand
experience.</p>
<p className='centertwotxt3mb'>It's important that your audience   engages with your content. We’ll optimize your content for maximum exposure across all channels, so all &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; eyes are on you!<span style={{   visibility: "hidden"}}>shah hshahah shahahshahs ssssssssssssss</span></p>

<a href='#'>
  
<img className='arrowmb' src={arrow}  alt='arrow'/> 
</a>
</div>
</div>

<div className="float5mb-child5mb">
<div className='scon3mb'>
<img className='ctwolog3mb' src={ctwologo3} alt='cimage'/> 
<p className='centertwotxt1mb'>CONTENT MARKETING</p>
<p className='centertwotxt2mb'>Get the most out of your content marketing efforts.</p>
<p className='centertwotxt3mb'>Running ads isn't enough to reach potential customers or grow your business, we will create content that will resonate with your audience and turn them into your brand ambassadors.</p>
<a href='#'>

<img className='arrowmb2' src={arrow} alt='arrow'/> 
</a>
</div>
</div>
</div>




<div className="float5mb-container5mb">

<div className="float5mb-child5mb">
<div className='scon5mb'>
<img className='ctwolog5mb' src={ctwologo5} alt='cimage'/> 
<p className='centertwotxt1mb'>ADVERTISING CAMPAGIN</p>
<p className='centertwotxt2mb'>A better way to advertise.</p>
<p className='centertwotxt3mb'>Advertisment Campagin(Media Buying)Do you need more visibility?More customers?More growth?We will strategically buy ads on the best channels to reach the right audience for your business.</p><a href='#'>
<img className='arrowmb' src={arrow} alt='arrow'/> 
</a>
</div>
</div>

<div className="float5mb-child5mb">
<div className='scon6mb'>
<img className='ctwolog6mb' src={ctwologo6} alt='cimage'/> 
<p className='centertwotxt1mb'>LEAD GENERATION</p>
<p className='centertwotxt2mb'>Get leads that matter.</p>
<p className='centertwotxt3mb'>A business can never survive without effective lead generation process, we will generate leads of various types based on your needs,ensuring that quality is compromised. </p>
<a href='#'>
<img className='arrowmb' src={arrow} alt='arrow'/> 
</a>
</div>
</div>
</div>
</div>

</div>

<div className='centerlast'>

<div className='viewall'>s</div>
<p className='work'>Our Work Drives</p> 
<p className='work2'>Your Businesses Forward!</p>
<p className='fuel'>We fuel brand growth and have the numbers to prove it. Here’s just a few of oure superior results.</p>

<div className="float6-container6">

<div className="float6-child6">
<p className='x3'>3x</p>
<p className='member'>Members Acquisition<br/>
& Enrollment</p>
</div>

<div className="float6-child6">
<p className='x33'>40%</p>
<p className='member2'>+ Ecommerce<br/>
Growth</p>

</div>
<div className="float6-child6">
<p className='x333'>26x</p>

<p className='member3'>Strengthen ROI On 
<br/>
Social Connections</p>
</div>

</div>
<div className='centerlast'>
<img className='centerimg' src={centermain} alt='cimage'/> 
<div className='priority'>
<img className='quoatation' src={quotation} alt='cimage'/> 

   <p className='pri'>	#Digital Is Our Priority</p>
   
   <p className='pri2'>The world has gone digital, and we with it. Our Team of Strategic Thinkers,<br/>
Content Creators, and Innovative Technologists are so fully integrated into the<br/> 
latest innovations and technology.</p>
</div>
</div>
</div>
<Footer/>
    </div>
  );
}

export default Mainpage;
