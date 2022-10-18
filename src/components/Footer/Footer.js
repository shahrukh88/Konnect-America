import './Footer.css';
import './nav.css';
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
  <p className='fbelowtxt3'><a href="tel:5614862825" className="fbelowtxt3">561.486.2825</a></p>



<div className="modal fade" id="myModal" role="dialog">
  <div className="modal-dialog ">
    <div className="modal-content">
      <div >
        
       
       </div>
      <div className="bodyfooter" >
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
    <select id="country"style={{fontSize:"1.2vw"}} name="budget">
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



<div className="modal fade" id="myModal3" role="dialog">
  <div className="modal-dialog ">
    <div className="modal-content">
      <div >
        
       
       </div>
      <div className="modal-body2">
            <img className='close2nav' data-dismiss="modal" src={Closemin} alt='image'/> 
            <p className='bxmtext2'>OUR MARKETING </p>
                <p className='bxmtext2b'>SOLUTIONS</p>
                <div className='boxmininav'>
                <p className='bxmtext1'> Advertisment Campagin</p>
     
                <p className='bxmtext' >Social Media Advertisment</p>
                <p className='bxmtext' >Videography</p>
                <p className='bxmtext' >Campagin Strategy</p>
                <p className='bxmtext' >Build Traction</p>
                <p className='bxmtext' >Generate target Audience</p>
   
             </div>
             <div className='boxmininav'>
             <p className='bxmtext1'> Brand Strategy</p>
       
       <p className='bxmtext' >Visual Identity</p>
   
       <p className='bxmtext' >Brand Messaging</p>
       <p className='bxmtext' >Marketing Strategy</p>
        <p className='bxmtext' >Brand Guidelines</p>
        <p className='bxmtext' >Engagement Growth</p>
      
             </div>
             <div className='boxmininav'>
             <p className='bxmtext1'> Website Design Strategy</p>
         <p  className='bxmtext' >Search Engine Optimization (SEO)</p>
        <p className='bxmtext' >UI/UX Design</p>
        <p className='bxmtext' >Wireframing & Userflow</p>
        <p className='bxmtext' >Website Optimization</p>
        <p className='bxmtext' >E-Commerce Implementation</p>
       </div>
             <div className='boxmininav'>
             <p className='bxmtext1'> Content Optimization</p>
        <p  className='bxmtext' >Product Data entry</p>
       <p className='bxmtext' >Product Categorization</p>
        <p className='bxmtext' >Products Data Management</p>
        <p className='bxmtext' >Search Result Optimization</p>
        <p className='bxmtext' >Image & Video Tagging</p>
        </div>
             <div className='boxmininav'>
             <p className='bxmtext1'> Content Marketing</p>
        <p  className='bxmtext' >Content Creation & Development</p>
       <p className='bxmtext' >Promotion of Content</p>
        <p className='bxmtext' >Content Optimization</p>
        <p className='bxmtext' >Content Marketing</p>
        <p className='bxmtext' style={{visibility:"hidden"}} >Content Optimization</p>

      <p className='bxmtext' ></p>
       </div>
             <div className='boxmininav'>
             <p className='bxmtext1'>Lead Generation </p>

<p className='bxmtext' >Lead Generation</p>


 <p className='bxmtext' >Verified Authethic Leads</p>
  <p className='bxmtext' >Right Leads for you</p>
  <p className='bxmtext' >Emailing Campagin Lists</p>
  <p className='bxmtext' t>Mobile Direct Contacts</p>
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
