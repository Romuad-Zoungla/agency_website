import logo from "../assets/Logo_footer.png";
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const MyFooter = () => {
    return ( 
        <Footer container className="rounded-none bg-gray-700 custom-footer">
        <div className="w-full">
          {/* Section principale du footer avec une grille responsive */}
          <div className="grid w-full gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
            {/* Section logo et droits d'auteur */} 
            <div className="space-y-4 mb-2 col-span-2 md:col-span-1 ">
              <a href="/">
                <img src={logo} alt="logo" className="w-[110px] lg:w-[150px] inline-block items-center" />
              </a>
              <div>
                <p className="mb-1">Copyright © 2024 Nexcent ltd.</p>
                <p>All rights reserved</p>
              </div>
            </div>
      
            {/* Liens sur le site */}
            <div>
              <Footer.Title title="About" className="custom-footer" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Nexcent</Footer.Link>
                <Footer.Link href="#">React</Footer.Link>
              </Footer.LinkGroup>
            </div>
      
            {/* Suivez-nous */}
            <div>
              <Footer.Title title="Follow us" className="custom-footer" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
      
            {/* Section Légal */}
            <div>
              <Footer.Title title="Legal" className="custom-footer" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
      
          {/* Séparateur */}
          <Footer.Divider />
      
          {/* Section icônes des réseaux sociaux */}
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} className="custom-footer" />
              <Footer.Icon href="#" icon={BsInstagram} className="custom-footer" />
              <Footer.Icon href="#" icon={BsTwitter} className="custom-footer" />
              <Footer.Icon href="#" icon={BsGithub} className="custom-footer" />
              <Footer.Icon href="#" icon={BsDribbble} className="custom-footer" />
            </div>
          </div>
        </div>
      </Footer>
      
     );
}
 
export default MyFooter;