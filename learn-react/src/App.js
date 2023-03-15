import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';
import Container from './components/pages/Container';
import PageNotFound from './components/pages/PageNotFound';
import GlobalStyles from './global.styles';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <GlobalStyles />

      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
