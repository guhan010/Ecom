import "./App.css";
import Main from "./components/Main";
// import Counter from "./components/Counter";
// import GrandParent from "./components/GrandParent";
// import Greet from "./components/Greet";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import SKills from "./pages/SKills";
// import Certifications from "./pages/Certifications";
// import { Contact as Cont } from "./pages/Contact";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <div style={{ backgroundColor: "grey", color: "white" }}>
      {/* <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/skills" element={<SKills />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Cont />} />
      </Routes> */}
      {/* <GrandParent /> */}
      {/* <Counter /> */}
      <Main />
    </div>
  );
}

export default App;
