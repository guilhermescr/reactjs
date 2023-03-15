import SignUp from './components/pages/SignUp';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
