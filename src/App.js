import './App.css';
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import {Routes, Route } from "react-router-dom";
import Women from "./Pages/Women";
import Men from "./Pages/Men";
import Children from "./Pages/Children";
import Shoes from "./Pages/Shoes";


function App() {
  return (
    <div className="App">
      <Header/>


      <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/qw/women" element={<Women/>}/>
          <Route path="/qw/men" element={<Men/>}/>
          <Route path="/qw/children" element={<Children/>}/>
          <Route path="/qw/shoes" element={<Shoes/>}/>

      </Routes>

    </div>
  );
}

export default App;
