
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project";
import Resume from "./Components/Resume";
import Blog from "./Components/Blog";

const App = ()=>{
  return(
    <Router>
       <Navbar/>
       <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/project"  element={<Project/>}/>
        <Route path="/resume"  element={<Resume/>}/>
        <Route path="/blog"  element={<Blog/>}/>
        <Route path="/about"  element={<About/>}/>
       </Routes>

    </Router>
  )
}

export default App;
