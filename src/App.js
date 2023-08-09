import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Filters from './pages/Filters';
import MoviePage from './pages/MoviePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filters" element={<Filters />} />
        <Route path="/movie/:name" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
