import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
// import planetsData from "./planets.json";
import Header from "./Components/Header";
import Planet from "./Components/Planet";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/mercury" />} />
        <Route path="/:planetName" element={<Planet />} />
      </Routes>
    </>
  );
}

export default App;
