import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import Heading from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <Heading />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
