import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Product from './components/product';
import Contact from "./components/contact.jsx";
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <div className="bg-gradient-to-b from-black via-amber-950 to-black">
        <About/>
        <Product/>
        <Contact/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
