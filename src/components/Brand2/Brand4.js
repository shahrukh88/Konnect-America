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
import kamerica from '../Images/kamericalogo.png'
import kamerica2 from '../Images/kamericalogo2.png'

import clogo from '../Images/clogo2.png'
import arrowright from '../Images/arrowright.png'

import Footer from '../Footer/Footer';
import { useEffect } from 'react';
import $ from 'jquery';

import {Helmet} from"react-helmet";
import Navbar2 from '../Navbar/Navbar2';
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
        <p className='marketingtext3fourmb'>Make content marketing hassle-free with our content marketing services. <br/>With our content marketing service, our team develops, writes, edits, and <br/>promotes custom (and search engine friendly) content for your business.<br/> From blog posts to online guides to  videos, you can do it all with Konnect<br/> America.</p>
   
        
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
       <p className='brand4centerservicetext1'>Our Approach To Building A Successful</p>
       <p className='centerservicetext1one'>Content Marketing</p>
        <p className='centerservicetext2'>You wouldn’t build a house without a blueprint, supporting materials, and a solid plan. Likewise, a website requires a great deal of attention </p>
        <p className='centerservicetext2one'> and planning. Here are the steps we take toward launching a successful website</p>
  
    <div className='brand2center'>
           
    <img className='loyaltybrand2img1' style={{marginLeft:"14%"}} src={loyalty} alt='logo'/> 
    <p className='loyaltybrand2img1txt1' style={{marginLeft:"13%"}}>Content Strategy</p>
    <p className='loyaltybrand2img1txt2' style={{marginLeft:"11%"}}>All our content marketing service <br/>packages include a custom content<br/> strategy, built for your business, your <br/>audience, and your goals.</p> 
   
    <img className='loyaltybrand2img2' style={{marginLeft:"30%"}} src={corporate} alt='logo'/> 
    <p className='loyaltybrand2img2txt1' style={{marginLeft:"28.4%"}}>Content Strategy</p>
    <p className='loyaltybrand2img2txt2' style={{marginLeft:"26%"}}>Next, we create a content calendar for <br/>your company’s must-share content.<br/> Based on your plan, you may receive 3-10 <br/>pieces of content. </p> 
   
    <img className='loyaltybrand2img3'style={{marginLeft:"48%",marginTop:"2.8%"}} src={webdesign} alt='logo'/> 
    <p className='loyaltybrand2img3txt1' style={{marginLeft:"46.6%",marginTop:"8.6%"}}>Content Creation</p>
    <p className='loyaltybrand2img3txt2'>Our experienced in-house copywriting and<br/> marketing team begins creating your<br/> custom content, whether it’s a blog post, <br/>online guide, or video.</p> 
   

    <img className='loyaltybrand2img4' style={{marginLeft:"64.7%",marginTop:"2.8%"}} src={chat} alt='logo'/> 
    <p className='loyaltybrand2img4txt1' style={{marginLeft:"61.6%",marginTop:"8.6%"}}>Content Optimization</p>
    <p className='loyaltybrand2img4txt2' style={{marginLeft:"60%"}}>Your content marketing management<br/> services also include SEO services, which <br/>optimize your content for users and<br/> search engines.</p> 
   
    
    <img className='loyaltybrand2img5' style={{marginLeft:"81%",marginTop:"2.8%"}} src={headhunting} alt='logo'/> 
    <p className='loyaltybrand2img5txt1' style={{marginLeft:"78.6%",marginTop:"8.6%"}}>Content Promotion</p>
    <p className='loyaltybrand2img5txt2'>Using our network of industry<br/> influencers, we help promote your <br/>content online in the places that matter<br/> most to your audience.</p> 


        <div className='brand2centermb'>
    <div className='brand2centermbcol1'>
        <img className='loyaltymb' style={{marginLeft:"40%"}} src={loyalty} alt='logo'/> 
        <p className='loyaltytext1mb' style={{marginLeft:"28%"}}>Content Strategy</p>   
        <p className='loyaltytext2mb'>All our content marketing service<br/>packages include a custom content <br/> strategy, built for your business, your<br/>audience, and your goals.</p>   
    </div>
    

    <div className='brand2centermbcol1'>
        <img className='loyaltymb' src={corporate} alt='logo'/> 
        <p className='loyaltytext1mb' style={{marginLeft:"21%"}}>Content Development</p>   
        <p className='loyaltytext2mb'>Next, we create a content calendar for<br/> your company’s must-share content.<br/> Based on your plan, you may receive 3-10<br/>pieces of content.</p>   
    </div>
    
    <div className='brand2centermbcol1'>
        <img className='loyaltymb' style={{marginLeft:"40%"}} src={webdesign} alt='logo'/> 
        <p className='loyaltytext1mb' style={{marginLeft:"28%"}}>Content Creation</p>   
        <p className='loyaltytext2mb'>Our experienced in-house copywriting <br/>and marketing team begins creating your<br/> custom content, whether it’s a blog post,<br/> online guide, or video.</p>   
    </div>
    

    <div className='brand2centermbcol1'>
        <img className='loyaltymb' style={{marginLeft:"38%"}} src={chat} alt='logo'/> 
        <p className='loyaltytext1mb' style={{marginLeft:"24%"}}>Content Optimization</p>   
        <p className='loyaltytext2mb'>Your content marketing management<br/> services also include SEO services, which<br/> optimize your content for users and<br/> search engines. </p>   
    </div>
    

    <div className='brand2centermbcol2'>
        <img className='loyaltymb2'  style={{marginLeft:"43.5%"}} src={headhunting} alt='logo'/> 
        <p className='loyaltytext1mb' style={{marginLeft:"38%",marginTop:"1%"}}>Content Promotion</p>   
        <p className='loyaltytext2mb' style={{marginLeft:"1%",marginTop:"-4%"}}>Using our network of industry<br/> influencers, we help promote your<br/> content online in the places that matter<br/> most to your audience.</p>   
    </div>
    
 </div>
   </div>
  
   <hr className='brandlinestratgey'/>
   </div>
   <div className='brandlast'>
   <div className='brand4midmargin'>
    
    <p className='slasttext1brand3'>Our Content Marketing Services</p>
   <p className='slasttext2brand'>You wouldn’t build a house without a blueprint, supporting materials, and a solid plan. Likewise, a website requires a great deal<br/>
 of attention and planning. Here are the steps we take toward launching a successful website</p>
 
<p className='infobrand3text1'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blog Posts&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Articles&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Infographics&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Videos</p>
<p className='info2one' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Webinars&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;Ebooks&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Podcasts</p>

</div>

   </div>
<div className='smarglast'></div>
   <Footer/>

    </div>
  );
}

export default Brand4;
