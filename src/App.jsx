import './App.css';
import Appointment from './components/Appointment';
import Hero from './components/Hero';
import Reserve from './components/Reserve';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/Services';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Clients from './components/Clients';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Services/>
              <About/>
              <ContactUs/>
            </>
          } 
        />
        
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </Router>
  );
}

export default App;
