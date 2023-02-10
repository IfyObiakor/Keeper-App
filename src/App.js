import { BrowserRouter , Routes , Route } from 'react-router-dom';
import React from 'react'
import './App.css';
import MainPage from './Components/MainPage';



function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<MainPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
