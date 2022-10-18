import './Careers.css';
import './Careerscenter2.css';
import './Careerscenter3.css';
import './Careerscenter5.css';
import './Careercenter6.css';
import Navbar from '../Navbar/Navbar';
import kamerica from '../Images/kamericalogo.png'
import kamerica2 from '../Images/kamericalogo2.png'

import Closemin from '../Images/Close-min.png'

import '../Landingpage/Navbar.css';
import Talogo from '../Images/Talogo.png'
import Formimage1 from '../Images/Form/Formimage1.jpg'
import Formimage1mb from '../Images/Form/Formimage1mb.jpg'
import careerimage1 from '../Images/Careerimages/careerimage1.jpg'
import careerimage2 from '../Images/Careerimages/careerimage2.jpg'
import careerimage3 from '../Images/Careerimages/careerimage3.jpg'
import careerimage4 from '../Images/Careerimages/careerimage4.jpg'
import careerimage4mb from '../Images/Careerimages/careerimage4mb.jpg'

import careerimage5 from '../Images/Careerimages/careerimage5.png'

import careerarrow from '../Images/Careerimages/careerarrow.png'
import careerimage6 from '../Images/Careerimages/careerimage6.jpg'
import careerimage6mb from '../Images/Careerimages/careerimage6mb.jpg'
import Footer from '../Footer/Footer';
import $ from 'jquery';

import { Link } from "react-router-dom"; 
import React from 'react';

import {Helmet} from"react-helmet";
import { useEffect } from 'react';
import Navbar2 from '../Navbar/Navbar2';
function Careers() {
    function myFunction() {
        document.getElementById("getFile").click();
      }
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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
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

  <Navbar/>
  <Navbar2/>
</div>

      </div>
<div className='Formmaincontainer'>
<img className='Formmainimage' src={Formimage1} alt='main-services'/> 
<img className='Formmainimagemb' src={Formimage1mb} alt='main-services'/> 
<img className='kalogoform' src={kamerica} alt='kamericalogo'/> 

<img className='kalogo2form' src={kamerica2} alt='kamericalogo'/> 

<p className='Formtext1'>Big thinkers who make</p>
<p className='Formtext2'>It Happen.</p>
<p className='Formtext4'>Our people are our edge. We go out of our way to make sure our team<br/> members are fulfilled,supported, and inspired every day to bring their <br/>best to each client.</p>
</div>
<div className='carrercenter'>
<p className='carrertext1'>Our People</p>
<p className='carrertext1a'>Are Our First PRIORITY.</p>
<p className='carrertext2'>From day one, we’ve built our agency around the talent, dedication, and passion of our people. We know<br/> every client win, novel solution, and ingenious strategy comes from putting our people first. Develop the <br/>career, and the life, you want with our flexible and supportive culture that invests in your growth and <br/>challenges you to be your best.</p>
<hr className='carrerline'/>
</div>
<div className='carrercenter2'>
<p className='carrercentertext1'>Our People-First Approach</p>
<p className='carrercentertext1a'>Makes A Difference.</p>
<p className='carrercentertext2'>From day one, we’ve built our agency around the talent, dedication, and passion of our people. We know every client win, novel solution, and ingenious<br/> strategy comes from putting our people first. Develop the career, and the life, you want with our flexible and supportive culture that invests in your <br/>growth and challenges you to be your best.</p>
<p className='carrercentertext2mb'>From day one, we’ve built our agency around the talent, dedication, and passion of our people.<br/> We know every client win, novel solution, and ingenious strategy comes from putting our<br/> people first. Develop the career, and the life, you want with our flexible and supportive culture <br/>that invests in your growth and challenges you to be your best.</p>
<img className='careerimage1' src={careerimage1} alt='image'/> 
<img className='careerimage2' src={careerimage2} alt='image'/> 
<img className='careerimage3' src={careerimage3} alt='image'/> 
<p className='careercentertext3'>50%</p>
<p className='careercentertext4'>less employee turnover than the<br/> industry average</p>
<p className='careercentertext4mb1'>less employee turnover than the</p>
<p className='careercentertext4mb2'> industry average</p>
<hr className='carrerline2'/>


<p className='careercentertext33'>54%</p>
<p className='careercentertext44'>of senior leadership positions<br/> are held by women</p>
<p className='careercentertext4mb1c'>of senior leadership positions are held by</p>
<p className='careercentertext4mb2d'>women</p>
<hr className='carrerline22'/>


<p className='careercentertext333'>35+</p>
<p className='careercentertext444'>mentorship + training opportunities<br/> across channels, platforms, and services</p>
<p className='careercentertext4mb1a'>mentorship + training opportunities</p>
<p className='careercentertext4mb2b'>women</p>

<hr className='carrerline222'/>
<hr className='carrerline3'/>

</div>
<div className='careercenter3'>
</div>
<div className='careercenter4'>
<img className='careerimage4' src={careerimage4} alt='image'/> 
<img className='careerimage4mb' src={careerimage4mb} alt='image'/> 

<div className='priority2'>
<img className='careerimage5' src={careerimage5} alt='image'/> 
<p className='digital2'>#Digital Is Our Priority</p>
<p className='digital3'>We believe businesses can shape our world for the
better, and they can do it<br/> with strong communities
of people behind them.</p>
</div>

</div>
<div className='careercenter5'>
<p className='careercenter5text1'>Open Positions</p>
<p className='careercenter5text2'>Join Our&nbsp;<span style={{color:"rgba(217, 4, 61, 1)"}}>Mission</span> </p>
<p className='careercenter5text3'>to provide industry-leading digital marketing services to clients while growing both<br/> personally and professionally.</p>
<div className='box1'>
<p className='boxtext1'>Digtial Marketing</p>
<div className='boxmini'>
<p className='boxminitext1'>Manager, Digital Advertising</p>
<i className="fa fa-clock-o" id='fclock' ></i>
<p className='boxminitext2'>Full time</p>
<i class='fas fa-map-marker-alt' id='fmap'  />
<p className='boxminitext3'>Florida, USA</p>
<img className='careerarrow' src={careerarrow} alt='image'/> 

</div>
</div>
<div className='box1'>
<p className='boxtext1'>Client Services</p>
<div className='boxmini'>
<p className='boxminitext1'>Jr.Copywriter</p>
<i className="fa fa-clock-o" id='fclock' ></i>
<p className='boxminitext2'>Full time</p>
<i class='fas fa-map-marker-alt' id='fmap' />
<p className='boxminitext3'>Florida, USA</p>
<img className='careerarrow' src={careerarrow} alt='image'/> 

</div>
</div>
<div className='box1'>
<p className='boxtext1'>Digital Media</p>
<div className='boxmini'>
<p className='boxminitext1'>Jr.Copywriter</p>
<i className="fa fa-clock-o" id='fclock' ></i>
<p className='boxminitext2'>Full time</p>
<i class='fas fa-map-marker-alt' id='fmap' />
<p className='boxminitext3'>Florida, USA</p>
<img className='careerarrow' src={careerarrow} alt='image'/> 

</div>
<br/>
<div className='boxmini'>
<p className='boxminitext1'>Jr.Copywriter</p>
<i className="fa fa-clock-o"  id='fclock'></i>
<p className='boxminitext2'>Full time</p>
<i class='fas fa-map-marker-alt' id='fmap' />
<p className='boxminitext3'>Florida, USA</p>
<img className='careerarrow' src={careerarrow} alt='image'/> 

</div>
</div>
<div className='box1'>
<p className='boxtext1'>SEO</p>
<div className='boxmini'>
<p className='boxminitext1'>Jr.Copywriter</p>
<i className="fa fa-clock-o" id='fclock' ></i>
<p className='boxminitext2'>Full time</p>
<i class='fas fa-map-marker-alt' id='fmap' />
<p className='boxminitext3'>Florida, USA</p>
<img className='careerarrow' src={careerarrow} alt='image'/> 

</div>
</div>
<div className='box1'>
<p className='boxtext1'>Accounting And Finance</p>
<div className='boxmini'>
<p className='boxminitext1'>Jr.Copywriter</p>
<i className="fa fa-clock-o" id='fclock' ></i>
<p className='boxminitext2'>Full time</p>
<i class='fas fa-map-marker-alt' id='fmap' />
<p className='boxminitext3'>Florida, USA</p>
<img className='careerarrow' src={careerarrow} alt='image'/> 

</div>
</div>
<div className='box1'>
<p className='boxtext1'>Misc</p>
<div className='boxmini'>
<p className='boxminitext1'>Jr.Copywriter</p>
<i className="fa fa-clock-o" id='fclock' ></i>
<p className='boxminitext2'>Full time</p>
<i class='fas fa-map-marker-alt'  id='fmap'/>
<p className='boxminitext3'>Florida, USA</p>
<img className='careerarrow' src={careerarrow} alt='image'/> 

</div>
</div>
</div>
<div className='careercenter6'>
<img className='careerimage6' src={careerimage6} alt='image'/> 
<img className='careerimage6mb' src={careerimage6mb} alt='image'/> 

<p className='careercenter6text1'>Don't See Any Positions You're </p>
<p className='careercenter6text2'>Interested In? No Problem.</p>
<p className='careercenter6text3'>Upload your resume and we’ll keep you in mind for future opportunities.</p>
<div className='resumesub'>
Submit Your Resume
</div>
</div>
   <Footer/>

    </div>
  );
}

export default Careers;
