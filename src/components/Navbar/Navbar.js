import '../Landingpage/Navbar.css';
import React from 'react';
import Closemin from '../Images/Close-min.png'
import navbarlogo from '../Images/navbarlogo.png'

import { Link } from "react-router-dom"; 

function Navbar() {
  return (
    <>
   <div className="modal fade bd-example-modal-lg" id="myModal2">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
    <img className='close3' data-dismiss="modal" src={Closemin} alt='image'/> 

      <p className='modaltextnav'>OUR MARKETING SOLUTIONS</p>
      <div className="modal-body2" id="myDIV">
        <br/><br/>
      <li ><a className='listyle'  href='/'>Home</a></li>
      <br/>
       <div className="dropdown ">
      <li ><a className='listyle'  style={{marginLeft:"108%"}} href='./services'>Market&nbsp;Solutions                 <i className='bx bxs-chevron-right arrow'></i>
</a></li>
      
      <div className="dropdown-content">
        
<div className="bgrow">
  <div className="bgcolumn" >
  <div className='boxnav'>
        <p className='boxnavtext1'> Advertisment Campagin</p>
     
       <p className='boxnavtext2' >Social Media Advertisment</p>
        <p className='boxnavtext2' >Videography</p>
        <p className='boxnavtext2' >Campagin Strategy</p>
        <p className='boxnavtext2' >Build Traction</p>
        <p className='boxnavtext2' >Generate target Audience</p>
        </div>
  
  </div>
  <div className="bgcolumn" >
  <div className='boxnav2'>
      <p className='boxnavtext1'> Brand Strategy</p>
       
       <p className='boxnavtext2' >Visual Identity</p>
   
       <p className='boxnavtext2' >Brand Messaging</p>
       <p className='boxnavtext2' >Marketing Strategy</p>
        <p className='boxnavtext2' >Brand Guidelines</p>
        <p className='boxnavtext2' >Engagement Growth</p>
      
     
        </div>
  
  </div>
</div>
      <div className="bgrow">
  <div className="bgcolumn" >
  <div className='boxnav3'>
        <p className='boxnavtext1'> Website Design Strategy</p>
        <p  className='boxnavtext2' >Search Engine Optimization (SEO)</p>
       <p className='boxnavtext2' >UI/UX Design</p>
        <p className='boxnavtext2' >Wireframing & Userflow</p>
        <p className='boxnavtext2' >Website Optimization</p>
        <p className='boxnavtext2' >E-Commerce Implementation</p>
      
      </div>


  </div>
  <div className="bgcolumn" >
  <div className='boxnav4'>
        <p className='boxnavtext1'> Content Optimization</p>
        <p  className='boxnavtext2' >Product Data entry</p>
       <p className='boxnavtext2' >Product Categorization</p>
        <p className='boxnavtext2' >Products Data Management</p>
        <p className='boxnavtext2' >Search Result Optimization</p>
        <p className='boxnavtext2' >Image & Video Tagging</p>
        </div>
  </div>
</div>

<div className="bgrow">
  <div className="bgcolumn" >
  <div className='boxnav5'>
        <p className='boxnavtext1'> Content Marketing</p>
        <p  className='boxnavtext2' >Content Creation & Development</p>
       <p className='boxnavtext2' >Promotion of Content</p>
        <p className='boxnavtext2' >Content Optimization</p>
        <p className='boxnavtext2' >Content Marketing</p>
        <p className='boxnavtext2' style={{visibility:"hidden"}} >Content Optimization</p>

      <p className='boxnavtext3' ></p>
     
      
      </div>
     
  </div>
  <div className="bgcolumn" >

  <div className='boxnav6'>
      <p className='boxnavtext1'>Lead Generation </p>

      <p className='boxnavtext2' >Lead Generation</p>
     
    
       <p className='boxnavtext2' >Verified Authethic Leads</p>
        <p className='boxnavtext2' >Right Leads for you</p>
        <p className='boxnavtext2' >Emailing Campagin Lists</p>
        <p className='boxnavtext2' t>Mobile Direct Contacts</p>
     
    
        </div>
       </div>
</div>
 </div>
     </div>
     <br/>
     <br/>
      <li ><a className='listyle' href='./form'>Work</a></li>
      <br/>
      <li ><a className='listyle' href='./marketing'>Marketing</a></li>
      <br/>
      <li ><a className='listyle' href='./career'>Careers</a></li>
       <br/>
      <li ><a className='listyle' href='./Aboutus'>About Us</a></li>
      
      </div>
      <img className='navbarlogo'  src={navbarlogo} alt='image'/> 

    </div>
  </div>
</div>

    </>
  );
}

export default Navbar;

