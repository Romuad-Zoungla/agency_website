import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

const App = () => { 
  return ( 
    <div className=" overflow-hidden antialiased ">
    
    <div className="absolute top-0 -z-10 h-full w-full bg-white">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]">
        </div>
        </div>
   
   
    <div className="">
      <div >
        <Navbar/>
        <HeroSection/>
        <Services/>
        <About/>
      </div>
    </div>
    </div>
   );
}
 
export default App;