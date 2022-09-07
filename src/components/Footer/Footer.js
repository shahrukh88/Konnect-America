import './Footer.css';
import './Footermodal.css';
import '../Landingpage/Navbar.css';
import Talogo from '../Images/Talogo.png'
import { Link } from "react-router-dom"; 
import React from 'react';

import { useEffect } from 'react';
import $ from 'jquery';
import footer from '../Images/footer.jpg'

import Closemin from '../Images/Close-min.png'
import {Helmet} from"react-helmet";

function Footer() {
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
              </Helmet>
      <div className='fcontainer'>
      
      <img className='footerimg' src={footer} alt='image'/> 
      <p className='letstalk'>Intrested,</p>
      <p className='talk'>Let’s Talk?</p>
      <div className='make'><a data-toggle="modal" data-target="#myModal" className='make2'>Make An Enquiry!</a></div>
     </div>
     <div className='fbelow'>
   <p className='fbelowtxt'>Konnect America - All Rights Reserved, 2022</p>
  <p className='fbelowtxt2'>USA, Florida</p>
  <p className='fbelowtxt3'><a href="tel:5614862825" className="fbelowtxt3">5614862825</a></p>



<div className="modal fade" id="myModal" role="dialog">
  <div className="modal-dialog ">
    <div className="modal-content">
      <div >
        
       
       </div>
      <div className="modal-body">
            <img className='close2' data-dismiss="modal" src={Closemin} alt='image'/> 
    
        <p className='modaltext1'>Intrested,</p>
        <p className='modaltext2'>Let’s Talk?</p>
        <p className='modaltext3'>Let’s make something awesome together.</p>
      <div className='modalform'>
        <label className='fnametext' for="fname">Your Name</label><br/>
    <input type="text" id="fname" name="firstname" />
    <br/>
    <label className='fnametext' >Your Email</label><br/>
    <input type="text" id="lname" name="lastname" />
    <br/>
    <label className='fnametext2' >Subject</label><br/>
    <input type="text" id="lname" name="lastname" />
    <br/>
    <label className='fnametext3' for="budget">BUDGET</label>
    <br/>
    <select id="country" name="budget">
      <option value="1">Budget $0 - $1,000</option>
      <option value="2">Budget $1000 - $2,000</option>
      <option value="3">Budget $2000 - $5,000</option>
      <option value="4">Budget $5000 - $10,000</option>
      <option value="5"> $10,000+</option>
    </select>
    <br/>
    <label className='fnametext4' for="subject">Your Message</label>
    <br/>
    <textarea id="subject" name="subject"   style={{height:"25vh"}}></textarea>
    <br/>
    <input type="submit" value="Send"/>
    </div>
    </div>
        </div>
  </div>
</div>

    </div>
    
       </div>
  );
}

export default Footer;
