import Navbar from '../component/Navbar/Navbar';
import Allhero from '../component/Allhero/Allhero';
import Allabout from '../component/Allabout/Allabout';
import Allkey from '../component/Allkey/Allkey';
import Allwhy from '../component/Allwhy/Allwhy';
import Allapplication from '../component/Allapplication/Allapplication';
import Allprojects from '../component/Allprojects/Allprojects';
import Allfaq from '../component/Allfaq/Allfaq';
import Allbuild from '../component/Allbuild/Allbuild';
import Footer from '../component/Footer/Footer';

export default function All() {
  return (
    <>
      <Navbar />
      <Allhero />
      <Allabout />
      <Allkey />
      <Allwhy />
      <Allapplication />
      <Allprojects />
      <Allfaq />
      <Allbuild />
      <Footer />
    </>
  );
}
