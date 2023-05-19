import About from './components/about/About';
import './scss/main.scss';
import Portfolio from './components/portfolio/Portfolio';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Experiences from './components/experiences/Experiences';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Experiences />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
