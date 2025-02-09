import logo from './logo.svg';
import './App.css';
import MainProduct from './Components/MainProduct';
import { Routes, Route } from "react-router-dom"
import Login from "./Components/Login";
import ProductPage from './Components/ProductPage';
import { useEffect } from 'react';
// import reportWebVitals from './reportWebVitals';






function App() {



  useEffect(() => { }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<MainProduct />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:productid/:productname/:productprice' element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
