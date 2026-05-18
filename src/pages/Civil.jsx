import Navbar from '../component/Navbar/Navbar';
import Civilhero from '../component/Civilhero/Civilhero';
import Civilabout from '../component/Civilabout/Civilabout';
import Civilkey from '../component/Civilkey/Civilkey';
import Civilwhy from '../component/Civilwhy/Civilwhy';
import Civilapplication from '../component/Civilapplication/Civilapplication';
import Civilprojects from '../component/Civilprojects/Civilprojects';
import Civilfaq from '../component/Civilfaq/Civilfaq';
import Civilbuild from '../component/Civilbuild/Civilbuild';
import Footer from '../component/Footer/Footer';

export default function Civil() {
  return (
    <>
      <Navbar />
      <Civilhero />
      <Civilabout />
      <Civilkey />
      <Civilwhy />
      <Civilapplication />
      <Civilprojects />
      <Civilfaq />
      <Civilbuild />
      <Footer />
    </>
  );
}
