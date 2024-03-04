import './App.css';
import NavBar from "./components/NavBar";
import Hero from './components/Hero';
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Projects/>
      <About></About>
      <Contact/>
      <Footer></Footer>
    </div>
  );
}

export default App;
