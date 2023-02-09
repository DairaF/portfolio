
import './App.css';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import Landing from './routes/Landing';
import Dos from './routes/Dos';
import Project from './routes/Proyecto';
function App() {
  return (
    <div className="App">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/dos" element={<Dos/>} />
            <Route path="/proyectos/" element={<Project/>} />
            <Route path="/proyectos/:id" element={<Project/>} />
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
