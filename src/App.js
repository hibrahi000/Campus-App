import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CampusDetailPage from './CampusPage';

function App() {
  return (
    <div>
      <NavBar />
      <h1>Home Page...</h1>
      <Footer className="footer" />
    </div>
  );
}

export default App;
