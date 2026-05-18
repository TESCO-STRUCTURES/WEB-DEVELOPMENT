import Navbar from '../component/Navbar/Navbar';
import Tensilehero from '../component/Tensilehero/Tensilehero';
import Tensileabout from '../component/Tensileabout/Tensileabout';
import Tensilekey from '../component/Tensilekey/Tensilekey';
import Tensilewhy from '../component/Tensilewhy/Tensilewhy';
import Tensileapplication from '../component/Tensileapplication/Tensileapplication';
import Tensileprojects from '../component/Tensileprojects/Tensileprojects';
import Tensilefaq from '../component/Tensilefaq/Tensilefaq';
import Tensilebuild from '../component/Tensilebuild/Tensilebuild';
import Footer from '../component/Footer/Footer';

export default function Tensile() {
  return (
    <>
      <Navbar />
      <Tensilehero />
      <Tensileabout />
      <Tensilekey />
      <Tensilewhy />
      <Tensileapplication />
      <Tensileprojects />
      <Tensilefaq />
      <Tensilebuild />
      <Footer />
    </>
  );
}
