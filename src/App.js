import './App.scss';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App" id="">
      <NavBar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
