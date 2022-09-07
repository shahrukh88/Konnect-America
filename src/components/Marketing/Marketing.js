import './Marketing.css';
import './MarketingCenter2.css';
import Closemin from '../Images/Close-min.png'
import Navbar from '../Navbar/Navbar';

import Talogo from '../Images/Talogo.png'

import mainmage from '../Images/Marketingimages/m-main.jpg'
import msolutioncenter2 from '../Images/msolutioncenter2.png'

import markertcimage from '../Images/Marketingimages/markertcimage.png'
import bullhorn from '../Images/Marketingimages/bullhorn-min.png'
import website1 from '../Images/Marketingimages/website1.png'
import emailmarketing from '../Images/Marketingimages/emailmarketing.png'
import contentmanagement from '../Images/Marketingimages/contentmanagement.png'
import onlineshop from '../Images/Marketingimages/onlineshop.png'
import userengagement from '../Images/Marketingimages/userengagement.png'
import envlop from '../Images/Marketingimages/envlop.jpg'
import envlop2 from '../Images/Marketingimages/envlop2.png'
import envlop3 from '../Images/Marketingimages/envlop3.png'
import envlop4 from '../Images/Marketingimages/envlop4.png'
import envlop5 from '../Images/Marketingimages/envlop5.png'
import envlop6 from '../Images/Marketingimages/envlop6.png'

import Footer from '../Footer/Footer';

import '../Landingpage/Navbar.css';
import {Helmet} from"react-helmet";
import $ from 'jquery';

import { Link } from "react-router-dom"; 
import React from 'react';
import { useEffect } from 'react';
function Marketing() {
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
     
    <div className='marketing-header'>
    
   
    </div>
   
   <div className='main-container-marketing'>

   <img className='marketimage' src={mainmage} alt='main-services'/> 
   <div className="modalcontainer">
  
  <button type="button"  className="btn btn-primary" data-toggle="modal" style={{position:"absolute",marginTop:"4%",marginLeft:"90%",backgroundColor:"white",width:"10%",height:"7vh",padding:".3%"}} data-target="#myModal2">
  <div class="m1"></div>
<div class="m2"></div>
<div class="m3"></div>

    <p className='mtext'>Menu</p>
  </button>
  <Navbar/>
</div>

        <p className='markettext1'>Scale your Business with our</p>
        <p className='markettext2'>Marketing Solutions</p>
        
        <p className='marketbutton1'><a data-toggle="modal" data-target="#myModal">Get your Solution</a></p>
       
   </div>
   <div className='market-center'>
   <img className='marketimage2' src={markertcimage} alt='markertcimage'/> 
   <img className='marketimage22' src={msolutioncenter2} alt='markertcimage'/> 
   <img className='bullhorn' src={bullhorn} alt='markertcimage'/> 
   <img className=' website1' src={ website1} alt='markertcimage'/> 
   <img className='emailmarketing' src={emailmarketing} alt='markertcimage'/> 
   <img className=' contentmanagement' src={ contentmanagement} alt='markertcimage'/> 
   <img className='onlineshop' src={onlineshop} alt='markertcimage'/> 
   <img className=' userengagement' src={ userengagement} alt='markertcimage'/> 
   <p className='markettext4'>Advertising Campagin</p>
   <p className='markettext4a'>Advertising </p>
   <p className='markettext4b'>Campagin</p>
   <p className='markettext5'>Web design strategy</p>
   <p className='markettext6'>Brand strategy</p>
   <p className='markettext7'>content Marketing</p>
   <p className='markettext8'>E-Commerce Marketing</p>

   <p className='markettext9'>lead generation</p>

    </div>
<div className='Market-center2'>
    <div class="market-row">
  <div class="market-column" >
    
    <p  className='marketctext1'>Digital &nbsp;Advertising &nbsp;Campaigns </p>
    
    <p  className='marketctext2'>A Better Way to Advertise</p>
<p  className='marketctext3'>It’s 2022, it’s time to stop wasting your money on old-school advertising. Time to buy digital media and get the most out of your budget ad.</p>
  <p className='marketcbutton1'>
  Learn More
   </p>  
  </div>
  <div class="market-column" >
  <img className='envlop' src={envlop} alt='logo'/> 

  </div>
  <hr className="marketline"></hr>
</div>
</div>

<div className='Market-center3'>
    <div class="market-row">
  <div class="market-column" >
  <img className='envlop2' src={envlop2} alt='logo'/> 
    
   </div>
  <div class="market-column" >
  <p  className='marketctext11'>Brand Strategy</p>
    
    <p  className='marketctext22'>Create a Brand that </p>
    <p  className='marketctext22a'>Stands Out</p>
<p  className='marketctext33'>We help you articulate your brand story and create a strategy to bring to life. From <br/>brand design to digital marketing, we’ll help you build a foundation for success. </p>
  <p className='marketcbutton11'>
  Learn More
   </p>  
 
  </div>
  <hr className="marketline"></hr>
</div>
</div>
<div className='Market-center4'>
    <div class="market-row">
  <div class="market-column" >
    
    <p  className='marketctext1a'>Web Design Strategy</p>
    
    <p  className='marketctext2'>Redefine Your Web</p>
    <p  className='marketctext2a'>Presence</p>
<p  className='marketctext3'>From strategy to design to development and marketing, we provide everything you <br/>need to create an online presence that's truly stunning.</p>
  <p className='marketcbutton1'>
  Learn More
   </p>  
  </div>
  <div class="market-column" >
  <img className='envlop' src={envlop3} alt='logo'/> 

  </div>
  <hr className="marketline"></hr>
</div>
</div>

<div className='Market-center5'>
    <div class="market-row">
  <div class="market-column" >
  <img className='envlop4' src={envlop4} alt='logo'/> 
    
   </div>
  <div class="market-column" >
  <p  className='marketctext11'>Content Marketing</p>
    
    <p  className='marketctext22'>Get the Most Out of Your </p>
    <p  className='marketctext22a'>Content Marketing Efforts</p>
<p  className='marketctext33'>Done right, content marketing can help you achieve your business goals. Cut through the noise and speak directly to your target audience with content that resonates. </p>
  <p className='marketcbutton11'>
  Learn More
   </p>  
 
  </div>
  <hr className="marketline"></hr>
</div>
</div>
<div className='Market-center6'>
    <div class="market-row">
  <div class="market-column" >
    
    <p  className='marketctext1b'>E-Commerce Marketing</p>
    
    <p  className='marketctext2'>Reach More Customers</p>
    <p  className='marketctext2a'>Sell More Products.</p>
<p  className='marketctext3'>Strategic marketing plans that increase traffic and conversions. Expert services that will help you maximize your E-Commerce potential.</p>
  <p className='marketcbutton1'>
  Learn More
   </p>  
  </div>
  <div class="market-column" >
  <img className='envlop' src={envlop5} alt='logo'/> 

  </div>
  <hr className="marketline"></hr>
</div>
</div>

<div className='Market-center7'>
    <div class="market-row">
  <div class="market-column" >
  <img className='envlop4' src={envlop6} alt='logo'/> 
    
   </div>
  <div class="market-column" >
  <p  className='marketctext11'>Lead Generation</p>
    
    <p  className='marketctext22'>Get Leads that Matter.</p>
<p  className='marketctext33'>Lead generation is tough so let us take the load off of you and put in the extra <br/>effort to get you the high quality leads you need. </p>
  <p className='marketcbutton11'>
  Learn More
   </p>  
 
  </div>
</div>
</div>
<div className='mmarglast'></div>

<Footer/>

    </div>
  );
}

export default Marketing;
