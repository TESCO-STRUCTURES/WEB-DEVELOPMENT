import Navbar from '../component/Navbar/Navbar';
import PEBhero from '../component/PEBhero/PEBhero';
import PEBabout from '../component/PEBabout/PEBabout';
import PEBwhy from '../component/PEBwhy/PEBwhy';
import PEBkey from '../component/PEBkey/PEBkey';
import PEBprojects from '../component/PEBprojects/PEBprojects';
import PEBbuild from '../component/PEBbuild/PEBbuild';
import PEBapplication from '../component/PEBapplication/PEBapplication';
import PEBfaq from '../component/PEBfaq/PEBfaq';
import Footer from '../component/Footer/Footer';

export default function PEB() {
  return (
    <>
      <Navbar />
      <PEBhero />
      <PEBabout />
      <PEBwhy />
      <PEBkey />
      <PEBprojects />
      <PEBbuild />
      <PEBapplication />
      <PEBfaq />
      <Footer />
    </>
  );
}
