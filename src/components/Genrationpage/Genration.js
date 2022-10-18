import './Genration.css';
import './Gneration2.css';
import './Generationlast.css';
import Talogo from '../Images/Talogo.png'
import womensky from '../Images/womensky.png'
import clogo from '../Images/clogo.png'
import $ from 'jquery';
import { useEffect } from 'react';


import generation2 from '../Images/generation2.jpg'
import Footer from '../Footer/Footer';

import mailing from '../Images/mailing.png'
import mailing2 from '../Images/mailing2.png'
import mailing3 from '../Images/mailing3.png'
import frame8 from '../Images/frame8.png'
import frame9 from '../Images/frame9.png'
import frame10 from '../Images/frame10.png'
import frame11 from '../Images/frame11.png'
import frame12 from '../Images/frame12.png'
import mailing4 from '../Images/g4container.png'
import Navbar from '../Navbar/Navbar';

import '../Landingpage/Navbar.css';
import {Helmet} from"react-helmet";
import Navbar2 from '../Navbar/Navbar2';

function Genration() {
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
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
       </Helmet>
     
    <div className='main-genration-header'>
   
    </div>
    <div className='main-generation'>
    
  <button type="button"  className="btn-primary3" data-toggle="modal" data-target=".bd-example-modal-lg"  >
  <div class="m1"></div>
<div class="m2"></div>
<div class="m3"></div>

    <p className='mtext'>Menu</p>
  </button>
  

  <Navbar/>
  <Navbar2/>
    <img className='wsky' src={womensky} alt='wsky'/> 
   <p className='g1text'>Scale your sales with our</p>
   <p className='g2text'>Lead Generations Service</p>
   <p className='g3text'>Over 130k+ Business Professionals in the US use Track America to book more<br/> appointments & get their next sale-instantly!</p>
<p className='startnow'>Get Started Now</p>
    </div>
 <div className='generation2-container'>
 <img className='generation2slide' src={generation2} alt='wsky'/> 

 <p className='g2sub'>Everything You Need to Expand Your Business</p>
 <p className='g3sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus arcu turpis feugiat at quis quis quis. Cras non faucibus platea <br/>nulla amet scelerisque aenean dictum. Cursus lorem non maecenas pharetra vivamus fermentum arcu. Donec </p>
<div className='growsmarg'>
 <div className="g2row">
  <div className="g2column">
    <p className='g2button1text1'>Bussiness Mailing List</p>
  </div>
  <div className="g2column">
  <p className='g2button2text1'>Consumer Mailing List</p>
    
  </div>
  <div className="g2column">
  <p className='g2button3text1'>Email List</p>
    
    </div>
    <div className="g2column">
    <p className='g2button4text1'>eMail Campaigns</p>
    
    </div>
       
  </div>
  </div>
 </div>

 <div className='generation3-container'>
 <div className="g3row">
  <div className="g3column">
  <img className='g3arrow' src={clogo} alt='arrow'/>
   <p className='g3containertext'>Bussiness Mailing List</p>
  <p className='g3containertext2'>Use comprehensive, industry-leading data to find your ideal business customers when <br/>you use search selects like number of employees, square footage, ZIP Code, carrier<br/> routes, and more.</p>
  <button className='fbutton2'><p className='fbuttontext2'>Build a Business List</p></button>

  </div>
  <div className="g3column2">
  <img className='g3arrow2' src={clogo} alt='arrow'/>

  <img className='mailing' src={mailing} alt='mailing'/> 

  
</div>    
  </div>

 </div>
<div className='g4-container'>
<img className='mailingg4' src={mailing4} alt='mailing'/> 

<p className='g4text1'>Our 100+ Clients Typically see</p>
<p className='g4text2'>25x</p>
<p className='g4text3'>33%</p>
<p className='g4text4'>26x</p>
<p className='g4text5'>1 in 4</p>
<p className='g4text6'>200%</p>
<p className='g4text22'>Faster Sales Cycle</p>
<p className='g4text33'>Increase in Sales</p>
<p className='g4text44'>ROI on our Lists</p>
<p className='g4text55'>Leads moving into Profits</p>
<p className='g4text66'>Increase in Opportunities</p>

</div>
<div className='generation4-container'>
 <div className="g4row">
  <div className="g4column">
  <img className='mailing2' src={mailing2} alt='mailing'/> 

   </div>
  <div className="g4column2">
  <p className='g4containertext'>The Highest Quality, For Accurate</p>
  <p className='g4containertexttwo'>Lists & Freshest Data You Can Find</p>
<p className='g4containertext2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in ipsum ultrices diam.<br/> Etiam pulvinar varius suscipit nisl aenean vulputate in.</p>
  </div>    
  </div>



  <div className="g5row">
  <div className="g5column">
   <p className='g4containertext1'>Accounts-Based Sales</p>
   <p className='g4containertext1two'>Done Right!</p>
<p className='g4containertext22'>We’ll find you top-teir leads by multiple contacts accross our lists to find <br/>right leads for you! our expert online marketing team professionals will<br/> research and target the right channels for your business to create<br/> revenue.</p>
 
   </div>
  <div className="g5column2">
  <img className='mailing3' src={mailing3} alt='mailing'/> 

   </div>    
  </div>

 </div>

 <div className='generationlast'>
 <img className='frame8' src={frame8} alt='frame'/> 
 <img className='frame9' src={frame9} alt='frame'/> 
 <img className='frame10' src={frame10} alt='frame'/> 
 <img className='frame11' src={frame11} alt='frame'/> 
 <img className='frame12' src={frame12} alt='frame'/> 
<p className='frame8text'>Find The Right</p>
<p className='frame8text1'>Leads For You</p>
<p className='frame88text'>Use our search filters to<br/>
uncover contacts and<br/>
companies that match <br/>
your buyer profile.</p>
<p className='frame9text'>Get Insights of </p>
<p className='frame9text1'>Their Info</p>
<p className='frame99text'>
Grab your contact’s email<br/>
and phone number. See what<br/>
is your starting point in<br/>
your conversation.
</p>
<p className='frame10text'>Verified Data</p>
<p className='frame10text1'>In Real Time</p>
<p className='frame1010text'>Track America’s real time<br/>
leads verification ensures<br/>
you are always connecting <br/>
with real, qualified leads.</p>
<p className='frame11text'>Mobile Direct</p>
<p className='frame11text1'>Contacts</p>
<p className='frame111text'>Get mobile & direct dial<br/>
phone numbers for leads</p>
<p className='frame12text'>Intent </p> 
<p className='frame12text1'>Data</p>
<p className='frame122text'>Find customers who are<br/> 
actively looking to buy your<br/>
servies/product and engage<br/>
buyers .</p>

 </div>
 <div className='final'>
 <hr className="newgenline"/>
<p className='finaltext1'>Ready To Improve Your Sales Development? </p>
 <p className='finaltext2'>Contact  our team today to learn more about how we can suggest you a list<br/>
that better suits your business and drive revenue and fill your sales.</p>
<button className='fbutton'><p className='fbuttontext'>Get in Touch</p></button>
 </div>
 <Footer/>

    </div>
  );
}

export default Genration;
