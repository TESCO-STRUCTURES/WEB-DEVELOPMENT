import Navbar from '../component/Navbar/Navbar';
import AboutHero from '../component/AboutHero/AboutHero';
import AboutWho from '../component/AboutWho/AboutWho';
import AboutWhatWeDo from '../component/AboutWhatWeDo/AboutWhatWeDo';
import AboutBuild from '../component/AboutBuild/AboutBuild';
import AboutWhy from '../component/AboutWhy/AboutWhy';
import AboutMission from '../component/AboutMission/AboutMission';
import AboutWork from '../component/AboutWork/AboutWork';
import AboutLocation from '../component/AboutLocation/AboutLocation';
import Footer from '../component/Footer/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <AboutWho />
      
      <AboutWhy />
      <AboutMission />

      <AboutWork />
      <AboutWhatWeDo />
      <AboutLocation />
      <AboutBuild />
      <Footer />
    </>
  );
}