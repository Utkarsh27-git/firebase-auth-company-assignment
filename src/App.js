import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Signup from './components/signupp/Signup';
function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* <Route path="/" element={<Home />} /> */}

            </Routes>
      </Router>
    </div>
  );
}

export default App;
