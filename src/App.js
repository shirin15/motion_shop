import './App.css';
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import {Route} from "react-router-dom";
import Women from "./Pages/Women";
import Men from "./Pages/Men";
import Children from "./Pages/Children";
import Shoes from "./Pages/Shoes";

function Routes() {
    return null;
}

function App() {
  return (
    <div className="App">
      <Header/>
        <Hero/>
      <Routes>
          <Route path="/women" element={<Women/>}/>
          <Route path="/men" element={<Men/>}/>
          <Route path="/children" element={<Children/>}/>
          <Route path="/shoes" element={<Shoes/>}/>
      </Routes>
    </div>
  );
}

export default App;
