import Navbar from '../component/Navbar/Navbar';
import Architecturalhero from '../component/Architecturalhero/Architecturalhero';
import Architecturalabout from '../component/Architecturalabout/Architecturalabout';
import Architecturalwhy from '../component/Architecturalwhy/Architecturalwhy';
import Architecturalkey from '../component/Architecturalkey/Architecturalkey';
import Architecturalprojects from '../component/Architecturalprojects/Architecturalprojects';
import Architecturalbuild from '../component/Architecturalbuild/Architecturalbuild';
import Architecturalapplication from '../component/Architecturalapplication/Architecturalapplication';
import Architecturalfaq from '../component/Architecturalfaq/Architecturalfaq';
import Footer from '../component/Footer/Footer';

export default function Architectural() {
  return (
    <>
      <Navbar />
      <Architecturalhero />
      <Architecturalabout />
      <Architecturalwhy />
      <Architecturalkey />
      <Architecturalprojects />
      <Architecturalbuild />
      <Architecturalapplication />
      <Architecturalfaq />
      <Footer />
    </>
  );
}
