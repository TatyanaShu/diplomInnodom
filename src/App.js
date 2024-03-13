import {Routes, Route} from 'react-router'
import logo from './logo.svg';
import './App.css';
import Main from './pages/Main/Main';
import About from './pages/About/About';
import Programs from './pages/Programs/Programs';
import Recipes from './pages/Recipes/Recipes';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
