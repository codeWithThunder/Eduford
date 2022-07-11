import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navber from "./Components/Navber/Navber";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Course from "./Components/Course/Course";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div>

      <Navber></Navber>

      <Routes>

        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/course" element={ <Course/> } />
        <Route path="/blog" element={ <Blog/> } />
        <Route path="/contact" element={ <Contact/> } />

      </Routes>
      
    </div>
  );
}

export default App;
