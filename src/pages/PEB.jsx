import Navbar from '../component/Navbar/Navbar';
import PEBhero from '../component/PEBhero/PEBhero';
import PEBabout from '../component/PEBabout/PEBabout';
import PEBkey from '../component/PEBkey/PEBkey';
import PEBwhy from '../component/PEBwhy/PEBwhy';
import PEBapplication from '../component/PEBapplication/PEBapplication';
import PEBprojects from '../component/PEBprojects/PEBprojects';
import PEBfaq from '../component/PEBfaq/PEBfaq';
import PEBbuild from '../component/PEBbuild/PEBbuild';
import Footer from '../component/Footer/Footer';

export default function PEB() {
  return (
    <>
      <Navbar />
      <PEBhero />
      <PEBabout />
      <PEBkey />
      <PEBwhy />
      <PEBapplication />
      <PEBprojects />
      <PEBfaq />
      <PEBbuild />
      <Footer />
    </>
  );
}
