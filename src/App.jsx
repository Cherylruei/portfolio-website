import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './scss/main.scss';
import About from './pages/About';
import Blog from './pages/Blog';
import Homepage from './pages/homepage';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div>
      <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
