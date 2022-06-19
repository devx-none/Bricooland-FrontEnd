import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import RegisterPro from './pages/Handyman/Register';
import Demande from "./pages/Customer/Demande";
import Handyman from './pages/Handyman';
import Dashboard from './pages/Handyman/Dashboard';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/pro/register" element={<RegisterPro />} />
        <Route exact path="demande" element={<Demande />} />
        <Route exact path="/pro" element={<Handyman />} />
        <Route  path="/pro/*" element={<Dashboard />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
