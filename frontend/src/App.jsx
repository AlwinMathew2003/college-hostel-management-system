import Navbar from './components/Navbar/Navbar'
import Home from "./pages/home/Home";
import './index.css'
import './App.css'


const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
<div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Home />
      </div>
    </div>
  );
};

export default App;
