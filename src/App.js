import './App.css';
import NavBar from "./components/NavBar";
import Hero from './components/Hero';
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Projects></Projects>
    </div>
  );
}

export default App;
