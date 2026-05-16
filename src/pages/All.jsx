import Navbar from '../component/Navbar/Navbar';
import Allhero from '../component/Allhero/Allhero';
import Allabout from '../component/Allabout/Allabout';
import Allwhy from '../component/Allwhy/Allwhy';
import Allkey from '../component/Allkey/Allkey';
import Allprojects from '../component/Allprojects/Allprojects';
import Allbuild from '../component/Allbuild/Allbuild';
import Allapplication from '../component/Allapplication/Allapplication';
import Allfaq from '../component/Allfaq/Allfaq';
import Footer from '../component/Footer/Footer';

export default function All() {
  return (
    <>
      <Navbar />
      <Allhero />
      <Allabout />
      <Allwhy />
      <Allkey />
      <Allprojects />
      <Allbuild />
      <Allapplication />
      <Allfaq />
      <Footer />
    </>
  );
}
