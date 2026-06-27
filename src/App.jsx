import './App.css';
import useReveal from './hooks/useReveal.js';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Steps from './components/Steps.jsx';
import Pillars from './components/Pillars.jsx';
import Principles from './components/Principles.jsx';
import Personas from './components/Personas.jsx';
import Vision from './components/Vision.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useReveal();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Steps />
        <Pillars />
        <Principles />
        <Personas />
        <Vision />
      </main>
      <Footer />
    </>
  );
}
