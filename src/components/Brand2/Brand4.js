import '../Services/Services.css';
import '../Services/servicecenter.css';
import '../Services/servicelast.css';
import './Brand2.css';
import './Brand3.css';
import './Brand4.css';

import React from 'react';
import Closemin from '../Images/Close-min.png'
import Navbar from '../Navbar/Navbar';

import '../Landingpage/Navbar.css';


import Br2 from '../Images/brand2/brand4main.jpg'
import loyalty from '../Images/brand2/contentstra.jpg'
import corporate from '../Images/brand2/contentdev.jpg'
import webdesign from '../Images/brand2/contentcre.jpg'
import chat from '../Images/brand2/contentopti.jpg'
import headhunting from '../Images/brand2/contentopt.jpg'

import clogo from '../Images/clogo.png'
import arrowright from '../Images/arrowright.png'

import Footer from '../Footer/Footer';
import { useEffect } from 'react';
import $ from 'jquery';

import {Helmet} from"react-helmet";
function Brand4() {
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
        
        <p className='servicetext1'>Content Marketing</p>
        <p className='servicetext2'>That Delivers Results </p>
         <p className='marketingtext3one'>Make content marketing hassle-free with our content marketing services. With our</p>
        <p className='marketingtext3two'>  content marketing service, our team develops, writes, edits, and promotes custom (and</p>
        <p className='marketingtext3three'>  search engine friendly) content for your business. From blog posts to online guides to</p>
        <p className='marketingtext3four'>  videos, you can do it all with Konnect America.</p>
       
        <p className='servicetext4'>Our team of Content Writors,</p>
        <p className='servicetext4one'> Delivering Creative Content</p>
        <p className='servicetext4two'>Can Help Your Grand Grow:</p>
        <p className='servicetext4three'> Convey Your Message, Clearly:</p>
        
        
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
       <p className='centerservicetext1one'>Content Marketing</p>
        <p className='centerservicetext2'>You wouldn’t build a house without a blueprint, supporting materials, and a solid plan. Likewise, a website requires a great deal of attention </p>
        <p className='centerservicetext2one'> and planning. Here are the steps we take toward launching a successful website</p>
  
    <div className='brand2center'>
        <div className='brand2centerimages'>
        <img className='constraimg' src={loyalty} alt='logo'/> 
        <p className='producttext1'>Content Strategy</p>   
        <p className='loyaltytext2'>All our content marketing service</p>   
        <p className='loyaltytext3'>  packages include a custom content</p>   
        <p className='loyaltytext4'>  strategy, built for your business, your</p>
        <p className='loyaltytext5'>  audience, and your goals.</p>   
       
        </div>

        <div className='brand2centerimages1'>
        <img className='condevimg' src={corporate} alt='logo'/> 
        <p className='categorytext1'>Content Development</p>   
        <p className='loyaltytext2'>Next, we create a content calendar for</p>   
        <p className='loyaltytext3'> your company’s must-share content.</p>   
        <p className='loyaltytext4'>  Based on your plan, you may receive 3-10</p>
        <p className='loyaltytext5'>  pieces of content.</p>   
       
        </div>

        <div className='brand2centerimages2'>
        <img className='contentcreation' src={webdesign} alt='logo'/> 
        <p className='contentext1'>Content Creation</p>   
        <p className='loyaltytext2'>Our experienced in-house copywriting and</p>   
        <p className='loyaltytext3'>  marketing team begins creating your</p>   
        <p className='loyaltytext4'> custom content, whether it’s a blog post,</p>
        <p className='loyaltytext5'>   online guide, or video. </p>   
       
        </div>


        <div className='brand2centerimages2'>
        <img className='contopimg' src={chat} alt='logo'/> 
        <p className='contentopttext1'>Content Optimization</p>   
        <p className='loyaltytext2'>Your content marketing management</p>   
        <p className='loyaltytext3'>  services also include SEO services, which</p>   
        <p className='loyaltytext4'>  optimize your content for users and</p>
        <p className='loyaltytext5'>  search engines.</p>   
       
        </div>

        <div className='brand2centerimages2'>
        <img className='contimg' src={headhunting} alt='logo'/> 
        <p className='contentprotext1'>Content Promotion</p>   
        <p className='loyaltytext2'>Using our network of industry</p>   
        <p className='loyaltytext3'>  influencers, we help promote your</p>   
        <p className='loyaltytext4'> content online in the places that matter</p>
        <p className='loyaltytext5'>  most to your audience.</p>   
       
        </div>


   </div>
  
   <hr className='brandline'/>
   </div>
   <div className='brandlast'>
    <p className='slasttext1'>Our Content Marketing Services</p>
   <p className='slasttext2'>You wouldn’t build a house without a blueprint, supporting materials, and a solid plan. Likewise, a website requires a great deal<br/>
 of attention and planning. Here are the steps we take toward launching a successful website</p>
 
<p className='infobrand3text1'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blog Posts&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Articles&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Infographics&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Videos</p>
<p className='info2one'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Webinars&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;Ebooks&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Podcasts</p>


   </div>
<div className='smarglast'></div>
   <Footer/>

    </div>
  );
}

export default Brand4;
