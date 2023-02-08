
import './App.css';
import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Landing from './routes/Landing';
import Project from './routes/Proyecto';
function App() {
  return (
    <div className="App">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/proyectos/" element={<Project/>} />
            <Route path="/proyectos/:id" element={<Project/>} />
            <Route path="/:id" element={<Project/>} />
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
