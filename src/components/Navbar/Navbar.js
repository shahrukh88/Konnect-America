import '../Landingpage/Navbar.css';
import React from 'react';
import Closemin from '../Images/Close-min.png'

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
       <div className="dropdown ">
      <li ><a className='listyle'  style={{marginLeft:"26%"}} href='./services'>Services</a></li>
      
      <div className="dropdown-content">
        <div className='boxnav'>
        <p className='boxnavtext1'> Advertisment Campagin</p>
     
       <li ><a className='boxnavtext2' href='#'>Social Media Advertisment</a></li>
  
        <Link className='boxnavtext2' to="#">Videography</Link>
        <Link className='boxnavtext2' to="#">Campagin Strategy</Link>
        <Link className='boxnavtext2' to="#">Build Traction</Link>
        <Link className='boxnavtext2' to="#">Generate target Audience</Link>
        </div>
      <div className='boxnav2'>
      <p className='boxnavtext1'> Brand Strategy</p>
       
       <li ><a className='boxnavtext2' href='#'>Visual Identity</a></li>
   
       <Link className='boxnavtext2' to="#">Brand Messaging</Link>
       <li ><a className='boxnavtext2' href='./brand3'>Marketing Strategy</a></li>
        <Link className='boxnavtext2' to="#">Brand Guidelines</Link>
        <Link className='boxnavtext2' to="#">Engagement Growth</Link>
      
     
        </div>
        <div className='boxnav3'>
        <p className='boxnavtext1'> Website Design Strategy</p>
        <Link  className='boxnavtext2' to="/">Search Engine Optimization (SEO)</Link>
       <Link className='boxnavtext2' to="#">UI/UX Design</Link>
        <Link className='boxnavtext2' to="#">Wireframing & Userflow</Link>
        <Link className='boxnavtext2' to="#">Website Optimization</Link>
        <Link className='boxnavtext2' to="#">E-Commerce Implementation</Link>
      
      </div>
      <div className='boxnav4'>
        <p className='boxnavtext1'> Content Optimization</p>
        <Link  className='boxnavtext2' to="#">Product Data entry</Link>
       <Link className='boxnavtext2' to="#">Product Categorization</Link>
        <Link className='boxnavtext2' to="#">Products Data Management</Link>
        <Link className='boxnavtext2' to="#">Search Result Optimization</Link>
        <Link className='boxnavtext2' to="#">Image & Video Tagging</Link>
        </div>
        <div className='boxnav5'>
        <p className='boxnavtext1'> Content Marketing</p>
        <Link  className='boxnavtext2' to="#">Content Creation & Development</Link>
       <Link className='boxnavtext2' to="#">Promotion of Content</Link>
        <Link className='boxnavtext2' to="#">Content Optimization</Link>
        <li ><a className='boxnavtext2' href='./brand4'>Content Marketing</a></li>
      <Link className='boxnavtext3' to="#"></Link>
     
      
      </div>
      <div className='boxnav6'>
      <p className='boxnavtext1'>Lead Generation </p>

      <li ><a className='boxnavtext2' href='./generation'>Lead Generation</a></li>
     
    
       <Link className='boxnavtext2' to="3">Verified Authethic Leads</Link>
        <Link className='boxnavtext2' to="#">Right Leads for you</Link>
        <Link className='boxnavtext2' to="#">Emailing Campagin Lists</Link>
        <Link className='boxnavtext2' to="#">Mobile Direct Contacts</Link>
     
    
        </div>
      </div>
     </div>
      <li ><a className='listyle' href='./form'>Form</a></li>
      <li ><a className='listyle' href='./marketing'>Marketing</a></li>
      <li ><a className='listyle' href='/brand'>Brand</a></li>
      <li ><a className='listyle' href='./brand2'>Brand Strategy</a></li>
   
      <li ><a className='listyle'  href='./brand3'>E-Commerce</a></li>
     
      <li ><a className='listyle' href='./brand4'>Content Marketing</a></li>
     
      <li ><a className='listyle' href='./career'>Career</a></li>

      <li ><a className='listyle' href='./Aboutus'>About Us</a></li>
      
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default Navbar;

