import Navbar from '../Navbar/Navbar';
import Allhero from '../Allhero/Allhero';
import Allabout from '../Allabout/Allabout';
import Allwhy from '../Allwhy/Allwhy';
import Allkey from '../Allkey/Allkey';
import Allprojects from '../Allprojects/Allprojects';
import Allbuild from '../Allbuild/Allbuild';
import Allapplication from '../Allapplication/Allapplication';
import Allfaq from '../Allfaq/Allfaq';
import Footer from '../Footer/Footer';

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
