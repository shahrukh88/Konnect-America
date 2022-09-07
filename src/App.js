import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  } from "react-router-dom";
  import React from 'react';
  
import Form1 from './components/Form/Form1';
import generation from './components/Genrationpage/Genration';
import Landingpage from './components/Landingpage/Mainpage';
import Aboutus from './components/Aboutus/Aboutus';
import Brand from './components/Brand/Brand';
import Brand2 from './components/Brand2/Brand2';
import Brand3 from './components/Brand2/Brand3';
import Brand4 from './components/Brand2/Brand4';
import Marketing from './components/Marketing/Marketing';
import Services from './components/Services/Services';
import Careers from './components/Careers/Careers';

function App() {
  return (
    <>
      <>
     <Router>
      <Switch>
      <Route exact path="/" component={Landingpage} />
        
      <Route path="/aboutus" component={Aboutus} />
      <Route path="/brand" component={Brand} />
      <Route path="/brand2" component={Brand2} />
      <Route path="/brand3" component={Brand3} />
      <Route path="/brand4" component={Brand4} />
      
      <Route path="/career" component={Careers} />
      <Route path="/form" component={Form1} />
      <Route path="/Aboutus" component={Aboutus} />
      <Route path="/marketing" component={Marketing} />
      <Route path="/services" component={Services} />
      <Route path="/generation" component={generation} />
      <Redirect to="/" />
      </Switch>
    </Router>
    </>
    </>
  );
}

export default App;
