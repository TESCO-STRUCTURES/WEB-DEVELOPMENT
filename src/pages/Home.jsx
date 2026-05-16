import Navbar from '../component/Navbar/Navbar';
import Hero from '../component/Hero/Hero';
import HomeCost from '../component/HomeCost/HomeCost';
import HomeServices from '../component/HomeServices/HomeServices';
import HomeEngineered from '../component/HomeEngineered/HomeEngineered';
import HomeTensile from '../component/HomeTensile/HomeTensile';
import HomeCivil from '../component/HomeCivil/HomeCivil';
import HomeDesign from '../component/HomeDesign/HomeDesign';
import HomeAll from '../component/HomeAll/HomeAll';
import HomeManufacturing from '../component/HomeManufacturing/HomeManufacturing';

import HomeWorked from '../component/HomeWorked/HomeWorked';
import HomePortfolio from '../component/HomePortfolio/HomePortfolio';
import HomeBlogs from '../component/HomeBlogs/HomeBlogs';






import HomeReady from '../component/HomeReady/HomeReady';


import Footer from '../component/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
       <HomeCost />
        <HomeServices />
           <HomeEngineered />
             <HomeTensile />
              <HomeCivil />
              
      <HomeDesign />
      <HomeAll />
      <HomeManufacturing />
       <HomeWorked />
          <HomePortfolio />
              <HomeBlogs />
      
     
  
     
     
   
   
   
      <HomeReady />
     
    
     
      <Footer />
    </>
  );
}
