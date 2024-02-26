import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'

import Container from './components/layout/Container'

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </ul>        
      <Container customClass="min-height">
        <Routes>
          <Route path='/' element={<Home/>}>
          </Route>
          <Route path='/company' element={<Company/>}>
          </Route>
          <Route path='/contact' element={<Contact/>}>
          </Route>
          <Route path='/newproject' element={<NewProject/>}>
          </Route>
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;