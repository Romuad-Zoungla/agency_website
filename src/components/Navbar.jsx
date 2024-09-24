import logo from "../assets/logo_nav.png";
import { useState, useEffect } from "react"; 
import { Link } from 'react-scroll';
import { FaXmark, FaBarsStaggered } from "react-icons/fa6";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    //Menu mobile
    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    // navbar sticky ou non lors du scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { 
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Nettoyage de l'événement lors du démontage du composant
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 
    
    // navItems array
    const navItems = [
        {  link: "Home", path: "home" },
        {  link: "Service", path: "service"},
        { link: "About", path: "about" },
        {  link: "Product", path: "product" },
        {  link: "Testimonial", path: "testimonial"},
        {  link: "FAQ", path: "faq" } 
      
    ];
    
    return ( 
      <header className="w-full bg-white  md:bg-transparent fixed top-0 left-0 right-0 ">
         <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300 " : ""}`}>
            <div className= "flex justify-between items-center text-base gap-6 ">
                <a href="/" >
                    <img src= {logo} alt="logo" className="w-[110px] lg:w-[150px] inline-block items-center" /></a>
            
            {/*nav items pour les écrans larges */}
            <ul className=" hidden md:flex space-x-6 ">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.path} smooth={true}  spy= {true} offset={-100} 
                        className="block text-base cursor-pointer text-gray900 hover:text-brandPrimary
                        first:font-medium ">
                            {item.link} 
                        </Link>
                    </li> 
                ))} 
            </ul>
            <div className="space-x-8 hidden lg:flex items-center" >
              <a href="/" className="text-md font-semibold hidden border hover:border-brandPrimary border-stone-900 rounded px-4 py-2 lg:flex items-center text-brandPrimary hover:text-gray900">
              Login</a>
              <button className="bg-brandPrimary text-white py-2 px-4 transition-all 
              duration-300 rounded hover:bg-neutralDgray">
       Sign up
              </button>
            </div>
            {/* Menu mobile */}
            <div className="md:hidden flex gap-2 ">
                
                    <button className="text-sm font-semibold hover:text-brandPrimary">
                    Login
                    </button>
                    <button className="text-sm bg-brandPrimary text-white py-1 px-2 transition-all duration-300 rounded hover:bg-neutralDgray">
                    Sign up
                    </button>
            
                <button  onClick={handleToggleMenu}
                className="text-neutralDgray focus:outline-none focus:text-gray-500">
                      {
                        isMenuOpen? 
                        <FaXmark className="h-6 w-6 text-neutralDgray" /> : 
                        <FaBarsStaggered className="h-6 w-6 text-neutralDgray" />
                      }
                </button>

            </div>
            </div>

            {/* Menu mobile */}
            <div className={`md:hidden space-x-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen? 
                "block fixed top-0 right-0 left-0 " : "hidden"}`}>
                <ul className="space-y-6">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link to={item.path} smooth={true} spy={true} offset={-100} 
                            className="block text-sm font-medium text-white hover:text-gray-100">
                                {item.link} 
                            </Link>
                        </li> 
                    ))}
                </ul>
            </div>
         </nav>

      </header> 
         );
}
 
export default Navbar;