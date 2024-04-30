import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar.js';
import { AllRoutes } from './Routes/AllRoutes.js';
import Footer from './Components/Footer.js';

function App() {
  return (
  <main>
  <Navbar/>
  <AllRoutes/>
  <Footer/>
  </main>
      
  );
}

export default App;
