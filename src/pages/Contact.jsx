import Navbar from '../component/Navbar/Navbar';
import ContactEnquiry from '../component/ContactEnquiry/ContactEnquiry';
import ContactMap from '../component/ContactMap/ContactMap';
import Footer from '../component/Footer/Footer';
import './Contact.css';

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="ct-page">
        <ContactEnquiry />
        <ContactMap />
      </div>
      <Footer />
    </>
  );
}
