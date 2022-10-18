import './Navbar2.css';
import './Navbar3.css';
import React, { useEffect } from 'react';
import Closemin from '../Images/Close-min.png'
import { Helmet } from 'react-helmet';
import $ from 'jquery';



function Navbar2() {
    useEffect(() => {      
    
          // search-box open close js code
let navbar = document.querySelector(".navbar");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");



// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}





      }, []);
    
    
  return (
    <>
        <Helmet>
            <meta charset="UTF-8"/>

    <link rel="stylesheet" href="style.css"/>
    
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'/>
     <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
     <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>

    </Helmet>

   <div>

  <nav>
    <div class="navbar">
      
      <i class='bx bx-menu' style={{marginLeft:"85%",color:"#D9043D",backgroundColor:"white"}}></i>
      <div class="nav-links">
        <div class="sidebar-logo">
          <i class='bx bx-x'  style={{color:"#D9043D"}} ></i>
        </div>
        <ul class="links">
          <li><a href="./">HOME</a></li>
          
          <li>
            

            <a   data-toggle="modal"   data-target="#myModal3">Services <i className='fas fa-angle-right' style={{fontSize:"12px"}}></i></a>
            <ul class="js-sub-menu sub-menu" >
            <li className='navbar3' >
            <button type="button" class="close" data-dismiss="modal">&times;</button>

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
                
            </li>  
            </ul>
          </li>
          <li ><a  href='./form'>Form</a></li>
      <li ><a  href='./marketing'>Marketing</a></li>
      <li ><a  href='/brand'>Brand</a></li>
      <li ><a  href='./brand2'>Brand Strategy</a></li>
   
      <li ><a   href='./brand3'>E-Commerce</a></li>
     
      <li ><a  href='./brand4'>Content Marketing</a></li>
     
      <li ><a  href='./career'>Career</a></li>

      <li ><a  href='./Aboutus'>About Us</a></li>
      
        </ul>
      </div>
      
    </div>
  </nav>



   </div>

    </>
  );
}

export default Navbar2;

