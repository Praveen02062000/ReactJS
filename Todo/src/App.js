import logo from './logo.svg';
import './App.css';
import MainProduct from './Components/MainProduct';
import { Routes, Route } from "react-router-dom"
import TODO from './Components/TODO';
import { useEffect } from 'react';
// import reportWebVitals from './reportWebVitals';






function App() {



  useEffect(() => { }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<TODO />} />
      </Routes>
    </div>
  );
}

export default App;
