import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './global.styles';
import Container from './components/pages/Container';
import PageNotFound from './components/pages/PageNotFound';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import User from './components/pages/User';
import Footer from './components/Footer';
import Header from './components/Header';
import UserContextData from './UserContextData';

function App() {
  return (
    <Router>
      <GlobalStyles />

      <Header />
      <UserContextData>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/user/:name" element={<User />} />
          </Routes>
        </Container>
      </UserContextData>
      <Footer />
    </Router>
  );
}

export default App;
