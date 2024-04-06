import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Home from "./components/Home";
import Testimonials from "./components/Testimonials";
import Demo from "./components/Demo";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <>
      <Navbar />
    {/* <Router>
    
      <Routes>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
      </Routes>
      </Router> */}

      <Router>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          
        <Route path="/" element={<Home />} />
        <Route path="/workflow" element={<Workflow />} />  {/* Workflow route */}
        <Route path="/features" element={<FeatureSection />} />  {/* Features route */}
          <Route path="/pricing" element={<Pricing />} />   {/* Pricing route */}
          <Route path="/test" element={<Testimonials />} />  {/* Testimonials route */}
          <Route path="/demo" element={<Demo />} />  {/* Demo route */}
          <Route path="/portfolio" element={<Portfolio />} />  {/* portfolio route */}
          
      
         
        </Routes>
       
          <Footer/>
          </div>
      </Router>
      
    
       {/* <Router>
    
     <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/details" element={<Details />} />
          <Route path="/form" element={<Form />} />
          <Route path="/sample-loc" element={<SampleLoc />} />
          <Route path="/sort" element={<Sort />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
    
    </Router> */}
    </>
  );
};

export default App;
