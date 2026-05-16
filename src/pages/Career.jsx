import Navbar from '../component/Navbar/Navbar';
import Careerhero from '../component/Careerhero/Careerhero';
import CareerHiring from '../component/CareerHiring/CareerHiring';
import CareerResume from '../component/CareerResume/CareerResume';
import Footer from '../component/Footer/Footer';

export default function Career() {
  return (
    <>
      <Navbar />
      <Careerhero />
      <CareerHiring />
      <CareerResume />
      <Footer />
    </>
  );
}
