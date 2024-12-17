import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import ServiceSection from './components/ServiceSection/ServiceSection';
import ServiceSection2 from './components/ServiceSection/ServiceSection2';
import FaqSection from './components/FaqSection/FaqSection';

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <ServiceSection2 />
      <FaqSection />
      <Footer />
    </>
  )
}

export default App
