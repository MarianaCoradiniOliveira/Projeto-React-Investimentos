import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router> //este componente adpta toda a aplicacão para o Router
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/empresa" element={<Empresa />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;