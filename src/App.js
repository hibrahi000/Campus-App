import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CampusPage from './CampusPage';

function App() {
  return (
    <div>
      <NavBar />
      <CampusPage />
      <Footer className="footer" />
    </div>
  );
}

export default App;
