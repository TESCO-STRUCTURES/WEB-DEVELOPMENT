import Navbar from '../component/Navbar/Navbar';
import Tensilehero from '../component/Tensilehero/Tensilehero';
import Tensileabout from '../component/Tensileabout/Tensileabout';
import Tensilewhy from '../component/Tensilewhy/Tensilewhy';
import Tensilekey from '../component/Tensilekey/Tensilekey';
import Tensileprojects from '../component/Tensileprojects/Tensileprojects';
import Tensilebuild from '../component/Tensilebuild/Tensilebuild';
import Tensileapplication from '../component/Tensileapplication/Tensileapplication';
import Tensilefaq from '../component/Tensilefaq/Tensilefaq';
import Footer from '../component/Footer/Footer';

export default function Tensile() {
  return (
    <>
      <Navbar />
      <Tensilehero />
      <Tensileabout />
      <Tensilewhy />
      <Tensilekey />
      <Tensileprojects />
      <Tensilebuild />
      <Tensileapplication />
      <Tensilefaq />
      <Footer />
    </>
  );
}
