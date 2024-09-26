import { Carousel } from "flowbite-react";
import 'flowbite/dist/flowbite.min.css'; 
import banner1 from "../assets/Illustration.png"
const HeroSection = () => {
  return (
    <div className="bg-neutralSilver  "  id="home"> 
    <div className="px-4 lg:px-14 mx-6 lg:mx-32 max-w-screen-2xl  min-h-screen h-screen">
      <Carousel
        className="w-full mx-auto relative"
        leftControl=" " // Cacher les boutons Previous
        rightControl=" " // Cacher les boutons Next
        indicators={false} // Activer la pagination
      >
        {/* Slide 1 */}
        <div className="my-8 md:my-8 py-8  flex flex-col md:flex-row-reverse items-center justify-between gap-12 lg:gap-20">
         
          <div className="md:w-1/2">
            <h1 className="text-5xl font-semibold mb-4 text-neutralDgray leading-snug">
              Lessons and insights <span className="text-brandPrimary leading-snug">from 8 years</span>
            </h1>
            <p className="text-neutralGray text-base mb-8">
              Where to grow your business as a photographer: site or social media?
            </p>
            <button className="btn-primary">Register</button> 
          </div>
          <div>
            <img src={banner1} alt="banner1" className="object-cover " />
          </div>
        </div> 
  
        {/* Slide 2 */}
        <div className="my-16 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 lg:gap-20">
         
          <div className="md:w-1/2">
            <h1 className="text-5xl font-semibold mb-4 text-neutralDgray leading-snug">
              Learn and Earn Money <span className="text-brandPrimary leading-snug">in 4 Months</span>
            </h1>
            <p className="text-neutralGray text-base mb-8">
              Grow your business as a photographer: site or social media?
            </p>
            <button className="btn-primary">Register</button>
          </div> 
          <div>
            <img src={banner1} alt="banner1" className="object-cover " />
          </div>
        </div>
  
        {/* Slide 3 */}
        <div className="my-16 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 lg:gap-20">
        
         <div className="md:w-1/2">
         

            <h1 className="text-5xl font-semibold mb-4 text-neutralDgray leading-snug">
              Lessons and<span className="text-brandPrimary leading-snug"> from 8 years</span>
            </h1>
            <p className="text-neutralGray text-base mb-8">
              Where to grow your business as a photographer: site or social media?
            </p>
            <button className="btn-primary">Register</button>
          </div>
          <div>
            <img src={banner1} alt="banner1" className="object-cover" />
          </div>
        
        </div>
      </Carousel>
    </div>
  </div>
  
  );
}

export default HeroSection;
