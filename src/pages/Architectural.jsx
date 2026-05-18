import Navbar from '../component/Navbar/Navbar';
import Architecturalhero from '../component/Architecturalhero/Architecturalhero';
import Architecturalabout from '../component/Architecturalabout/Architecturalabout';
import Architecturalkey from '../component/Architecturalkey/Architecturalkey';
import Architecturalwhy from '../component/Architecturalwhy/Architecturalwhy';
import Architecturalapplication from '../component/Architecturalapplication/Architecturalapplication';
import Architecturalprojects from '../component/Architecturalprojects/Architecturalprojects';
import Architecturalfaq from '../component/Architecturalfaq/Architecturalfaq';
import Architecturalbuild from '../component/Architecturalbuild/Architecturalbuild';
import Footer from '../component/Footer/Footer';

export default function Architectural() {
  return (
    <>
      <Navbar />
      <Architecturalhero />
      <Architecturalabout />
      <Architecturalkey />
      <Architecturalwhy />
      <Architecturalapplication />
      <Architecturalprojects />
      <Architecturalfaq />
      <Architecturalbuild />
      <Footer />
    </>
  );
}
