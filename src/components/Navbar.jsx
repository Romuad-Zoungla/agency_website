import logo from "../assets/logo_nav.png";
// import { useState, useEffect } from "react";
import {Link} from "react-scroll"; 

const Navbar = () => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [isSticky, setIsSticky] = useState(false);

    // //Menu mobile
    // const handleToggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // }
    // // navbar sticky ou non lors du scroll
    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 100) { 
    //             setIsSticky(true);
    //         } else {
    //             setIsSticky(false);
    //         }
    //     };
    
    //     window.addEventListener('scroll', handleScroll);
    
    //     // Nettoyage de l'événement lors du démontage du composant
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []); 
    
    // navItems array
    const navItems = [
        {  link: 'Home', path: 'home' },
        {  link: 'Service', path: 'service' },
        { link: 'About',path: 'about' },
        {  link: 'Product', path: 'product' },
        {  link: 'Testimonial', path: 'testimonial' },
        {  link: 'FAQ', path: 'faq' } 
      
    ];
    
    return ( 
      <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 ">
         <nav>
            <div className= "">
                <a href="/" >
                    <img src= {logo} alt="logo" className="md:w-[110px] lg:w-[150px] inline-block items-center" /></a>
            </div>
            {/*nav items pour les écrans larges */}
            <ul className=" md:flex space-x-12 "> 
                {navItems.map((item, path) => <Link key={path} to="path">{item}</Link>
                )}
            </ul>
            <div className="navbar-toggle" >
                <span></span>
                <span></span>
                <span></span>
            </div>
         </nav>
      </header>    );
}
 
export default Navbar;