import { Routes, Route } from "react-router-dom";
import MovieProvider from "./context/MovieContext";
import Home from "./Pages/Home";
import Favorite from "./Pages/Favorites";
import NavBar from "./Components/NavBar";

import "./css/App.css";

function App() {
  return (
    <MovieProvider>
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
