import Navbar from '../component/Navbar/Navbar';
import Civilhero from '../component/Civilhero/Civilhero';
import Civilabout from '../component/Civilabout/Civilabout';
import Civilwhy from '../component/Civilwhy/Civilwhy';
import Civilkey from '../component/Civilkey/Civilkey';
import Civilprojects from '../component/Civilprojects/Civilprojects';
import Civilbuild from '../component/Civilbuild/Civilbuild';
import Civilapplication from '../component/Civilapplication/Civilapplication';
import Civilfaq from '../component/Civilfaq/Civilfaq';
import Footer from '../component/Footer/Footer';

export default function Civil() {
  return (
    <>
      <Navbar />
      <Civilhero />
      <Civilabout />
      <Civilwhy />
      <Civilkey />
      <Civilprojects />
      <Civilbuild />
      <Civilapplication />
      <Civilfaq />
      <Footer />
    </>
  );
}
