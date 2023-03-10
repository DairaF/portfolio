
import './App.css';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import Landing from './routes/Landing';
import Project from './routes/Proyecto';
function App() {
  // const fetchData = async () => {
  //   const results = await axios.get('/.netlify/functions/getParam')
  // }
  return (
    <div className="App">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/proyectos/" element={<Project/>} />
            <Route path="/proyectos/:id" element={<Project/>} />
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
