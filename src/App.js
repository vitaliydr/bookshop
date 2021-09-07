import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';


function App() {
  return (
    <BrowserRouter>
      <div className="body-one">
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
    

  );
}

export default App;
