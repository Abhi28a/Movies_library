
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Library from './pages/Library';
import Footer from './pages/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/about"  Component={About}/>
          <Route path='/library' Component={Library}/>
          <Route path="/login"  Component={Login}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
