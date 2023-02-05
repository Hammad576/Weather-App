
import './App.css';
import About from './components/About';
 
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Weather from './components/Weather';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Weathermin from './components/Weathermin';
import Home from './components/Home';




function App() {
 
  return (<>
 
       <Router>
       <Navbar/>
          <div className="container">
      
        <Routes>
          
        <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/c1" element={<Weathermin city="London"/>}/>
          <Route exact path="/c2" element={<Weathermin city="New York"/>}/>
          <Route exact path="/c3" element={<Weathermin city="Bath"/>}/>
          <Route exact path="/c4" element={<Weathermin city="Birmingham"/>}/>
          <Route exact path="/c5" element={<Weathermin city="Bristol"/>}/>
          <Route exact path="/c6" element={<Weathermin city="Los Angeles"/>}/>
          <Route exact path="/c7" element={<Weathermin city="Chicago"/>}/>
          <Route exact path="/c8" element={<Weathermin city="Houston"/>}/>
          
        
        </Routes>
        
        </div>
    
        </Router>
    <div className="App">
       
     
   
    </div>
    </>
  );
}

export default App;
