import './App.css';
import { Container } from '@mui/material';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import StepsSection from './components/StepsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header />
     <Container maxWidth="lg">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StepsSection />
      <ContactSection />
      <Footer />
    </Container>
    </>
  );
}

export default App;
