import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Checkout from './Pages/Checkout';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
