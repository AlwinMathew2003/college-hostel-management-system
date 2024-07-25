import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased  selection:bg-cyan-300 selection:text-cyan-900">
      <div className="container mx-auto px-8">
        <Navbar />
        <Home />
      </div>
    </div>
  );
};

export default App;
