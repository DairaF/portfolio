
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Landing from './routes/Landing';
import Project from './routes/Proyecto';
import Navigation from './components/navigation/Navigation'
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/proyectos/" element={<Project/>} />
            <Route path="/proyectos/:id" element={<Project/>} />
          </Routes>

          
      </BrowserRouter>
    </div>
  );
}

export default App;
