import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<h1>Checkout</h1>} />
          <Route path='/login' element={<h1>Login</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
