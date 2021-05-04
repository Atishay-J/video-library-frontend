import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Navbar, Playlist, Videos, Sidebar } from "./Components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Videos />} />
        <Route exact path="/navbar" element={<Navbar />} />
        <Route exact path="/playlist" element={<Playlist />} />
      </Routes>
      <Sidebar />
    </div>
  );
}

export default App;
