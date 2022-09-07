.modal-content{
    height: 85vh;
    width: 100%;
    }
    .modal-body{
      margin-top: 8%;
    }
    
li{
    list-style-type: none;
  }
  .listyle{
    font-family: 'Raleway',sans-serif;
   font-weight: 700;
    font-size: 2.5vw;
    color: rgba(52, 52, 52, 1);
    margin-left: 2%;
    
  }
  .active, .listyle:hover{
   color: #D9043D ;
  }
  .modaltextnav{
    position: absolute;
    font-family: 'Raleway',sans-serif;
   font-weight: 700;
    font-size: 2vw;
    color: #343434;
      margin-left: 20%;
  margin-top: 4.5%;
      text-align: left;
   
  }
  .dropbtn {
    font-family: 'Raleway',sans-serif;
   font-weight: 700;
    font-size: 2.5vw;
    color: rgba(52, 52, 52, 1);
    margin-left: 15%;
    text-align: left;
   
  }
  
  .dropdown {
    position: relative;
    display: inline-block;
  margin-left: 1.7%;
  }
  
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    width: 800%;
  
    margin-top: -80%;
    margin-left: 160%;
    z-index: 1;
  }
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  .dropdown-content a:hover {background-color: #ddd;}
  
   .dropdown-content {display: block;}
  
  
  
  .boxnavtext1{
    font-size: 1.5vw;
    font-family: 'Raleway';
    font-weight: 700;
   cursor: pointer;
  margin-left: 9%;
  }
  .boxnavtext1{
  
  }
  
  
  .boxnavtext2{
    font-size: .9vw;
    font-family: 'Raleway';
    font-weight: 500;
    margin-left: 5%;
    color: #343434;
    margin-top: -5%;
  }
  .boxnavtext2:hover{
    color: #D9043D;
    cursor: pointer;
  }
  
  .boxnav{
    position:absolute;
  width: 30%;
  background: #F8F8F8;
  box-shadow: 6px 4px 6px rgba(0, 0, 0, 0.25);
  color: #343434;
  }
  .boxnav:hover{
  border-top: 3px solid #D9043D;
  color: #D9043D;
  }
  .boxnav2{
  
    position:absolute;
  margin-left: 33%;
    width: 30%;
  background: #F8F8F8;
  color: #343434;
  box-shadow: 6px 4px 6px rgba(0, 0, 0, 0.25);
  }
  
  .boxnav2:hover{
    border-top: 3px solid #D9043D;
    color: #D9043D;
    }
  .boxnav3{
  
    position:absolute;
    color: #343434;
  margin-left: 66%;
    width: 30%;
  background: #F8F8F8;
  box-shadow: 6px 4px 6px rgba(0, 0, 0, 0.25);
  }
  
  .boxnav3:hover{
    border-top: 3px solid #D9043D;
    color: #D9043D;
    }
  .boxnav4{
  
    position:absolute;
    margin-top: 18%;
    color: #343434;
    width: 30%;
  background: #F8F8F8;
  box-shadow: 6px 4px 6px rgba(0, 0, 0, 0.25);
  }
  
  .boxnav4:hover{
    border-top: 3px solid #D9043D;
    color: #D9043D;
    }
  .boxnav5{
  
    position:absolute;
  margin-top: 18%;
  color: #343434;
    width: 30%;
    margin-left: 33%;
  background: #F8F8F8;
  box-shadow: 6px 4px 6px rgba(0, 0, 0, 0.25);
  }
  
  .boxnav5:hover{
    border-top: 3px solid #D9043D;
    color: #D9043D;
    }
  .boxnav6{
  
    position:absolute;
    margin-top: 18%;
  margin-left: 66%;
    width: 30%;
    color: #343434;
  background: #F8F8F8;
  box-shadow: 6px 4px 6px rgba(0, 0, 0, 0.25);
  }
  
  .boxnav6:hover{
    border-top: 3px solid #D9043D;
    color: #D9043D;
   
    }
  .close3{
    position: absolute;
    width: 1.5%;
    margin-left: 94%;
    margin-top: 4%;
  }
  .close3:hover{
    opacity: .3;
  }
<div className="modalcontainer">
  
<button type="button" className="btn btn-primary" data-toggle="modal" style={{position:"absolute",marginTop:"-50%",marginLeft:"88%"}} data-target="#myModal">
  Open modal
</button>

<div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content" >
    <img className='close3' data-dismiss="modal" src={Closemin} alt='image'/> 

      <p className='modaltextnav'>OUR MARKETING SOLUTIONS</p>
      <div className="modal-body" id="myDIV">
      <li ><Link  to="/" className='listyle'>Home</Link>
      </li>
      <div className="dropdown ">
      <li className="listyle active">Services</li>
      <div className="dropdown-content">
        <div className='boxnav'>
        <p className='boxnavtext1'> Advertisment Campagin</p>
       <Link className='boxnavtext2' to="/">Social Media Advertisment</Link>
        <Link className='boxnavtext2' to="/">Videography</Link>
        <Link className='boxnavtext2' to="/">Campagin Strategy</Link>
        <Link className='boxnavtext2' to="/">Build Traction</Link>
        <Link className='boxnavtext2' to="/">Generate target Audience</Link>
        </div>
      <div className='boxnav2'>
      <p className='boxnavtext1'> Brand Strategy</p>
       <Link  className='boxnavtext2' to="/">Visual Identity</Link>
       <Link className='boxnavtext2' to="/">Brand Messaging</Link>
        <Link className='boxnavtext2' to="/">Marketing Strategy</Link>
        <Link className='boxnavtext2' to="/">Brand Guidelines</Link>
        <Link className='boxnavtext2' to="/">Engagement Growth</Link>
      
     
        </div>
        <div className='boxnav3'>
        <p className='boxnavtext1'> Website Design Strategy</p>
        <Link  className='boxnavtext2' to="/">Search Engine Optimization (SEO)</Link>
       <Link className='boxnavtext2' to="/">UI/UX Design</Link>
        <Link className='boxnavtext2' to="/">Wireframing & Userflow</Link>
        <Link className='boxnavtext2' to="/">Website Optimization</Link>
        <Link className='boxnavtext2' to="/">E-Commerce Implementation</Link>
      
      </div>
      <div className='boxnav4'>
        <p className='boxnavtext1'> Content Optimization</p>
        <Link  className='boxnavtext2' to="/">Product Data entry</Link>
       <Link className='boxnavtext2' to="/">Product Categorization</Link>
        <Link className='boxnavtext2' to="/">Products Data Management</Link>
        <Link className='boxnavtext2' to="/">Search Result Optimization</Link>
        <Link className='boxnavtext2' to="/">Image & Video Tagging</Link>
        </div>
        <div className='boxnav5'>
        <p className='boxnavtext1'> Content Marketing</p>
        <Link  className='boxnavtext2' to="/">Content Creation & Development</Link>
       <Link className='boxnavtext2' to="/">Promotion of Content</Link>
        <Link className='boxnavtext2' to="/">Content Optimization</Link>
        <Link className='boxnavtext3' to="/"></Link>
        <Link className='boxnavtext3' to="/"></Link>
     
      
      </div>
      <div className='boxnav6'>
      <p className='boxnavtext1'>Lead Generation </p>
      <Link  className='boxnavtext2' to="/">Lead Generation</Link>
       <Link className='boxnavtext2' to="/">Verified Authethic Leads</Link>
        <Link className='boxnavtext2' to="/">Right Leads for you</Link>
        <Link className='boxnavtext2' to="/">Emailing Campagin Lists</Link>
        <Link className='boxnavtext2' to="/">Mobile Direct Contacts</Link>
     
    
        </div>
      </div>
     </div>
      <li className='listyle'>Work</li>
      <li ><Link  className='listyle' to="/career">Career</Link></li>
      <li ><Link className='listyle' to="/aboutus">About Us</Link></li>
      <li className='listyle'>Contact Us</li>
      </div>
      
    </div>
  </div>
</div>

</div>
