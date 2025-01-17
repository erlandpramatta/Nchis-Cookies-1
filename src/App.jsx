import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Navbar from './components/navbar';
import Home from './components/home';
import Dashboard from './components/dashboard.jsx';
import Contact from "./components/contact.jsx";
import Footer from './components/footer';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <div className="bg-gradient-to-b from-black via-amber-950 to-black">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>    
      </div>
    </div>
  );

}

export default App;
