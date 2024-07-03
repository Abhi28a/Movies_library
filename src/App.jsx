import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home'; // Assuming Home component exists
import Login from './pages/LoginPage'; // Assuming Login component exists
import './pages/styles.css'; // Global CSS import if needed

function App() {
    return (
        <Router>
            <div className="App">
              <Navbar/>
                <Home />
                <Routes>
                    <Route path="/" exact component={Home} />

                    <Route path="/login" component={Login} />
                </Routes>
            </div>
        </Router>
    );
}

export default App