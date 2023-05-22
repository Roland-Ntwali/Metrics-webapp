import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './components/Details';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Details" element={<Details />} />
          </Routes>
        </div>

      </div>
    </Router>

  );
}

export default App;
