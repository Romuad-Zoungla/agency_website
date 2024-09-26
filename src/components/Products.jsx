import { FaArrowRightLong } from "react-icons/fa6";
import aboutImg from "../assets/pana.png";
const Producs = () => {
    return ( 
        <>
        <div className=" px-4 lg:px-14 max-w-screen-2xl mx-auto my-12  " id="product">
       <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 ">
          <div className="">
           <img src={aboutImg} alt="" />
          </div>
            <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDgray font-semibold mb-4 md:w-4/5">
            How to design your site footer like we did
            </h2>
           <p className="md:w-4/5 text-sm text-neutralGray mb-8">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <button className="btn-primary">Learn More</button>
            </div>
       </div>
   </div> 
   
   <div className="px-4 lg:px-14 bg-neutralSilver max-w-screen-2xl mx-auto my-8 py-8 md:py-20">
       <div className=" flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="md:w-1/3">
             <img src="/src/assets/image1.png" alt="" className=""/>
           </div>

            <div className="md:w-2/3 mx-auto">
                <div className="">
                    <p className="md:w-4/5 text-sm md:text-md text-neutralGray mb-6 md:mb-8 leading-6 ">
                    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </p>
                    <h2 className="text-left font-semibold text-sm md:text-lg text-brandPrimary mb-4 ">Tim Smith</h2>
                     <p className="text-sm md:text-md text-neutralGray mb-6 md:mb-8 leading-6">
                        British Dragon Boat Racing Association</p>
                        <div>
                        <div className=" flex flex-wrap  gap-4 md:gap-8 items-center">
                            <img src="/src/assets/partn1.png" alt="" className="cursor-pointer" />
                            <img src="/src/assets/partn2.png" alt="" className="cursor-pointer"  />
                            <img src="/src/assets/partn3.png" alt="" className="cursor-pointer" /> 
                            <img src="/src/assets/partn4.png" alt="" className="cursor-pointer" />
                            <img src="/src/assets/partn5.png"  alt="" className="cursor-pointer" />
                            <img src="/src/assets/partn6.png" alt="" className="cursor-pointer" />
                             <div className="flex items-center">
                                <a href="/" className="font-bold text-brandPrimary hover:text-neutral-700">Meet all customers  </a>
                                <FaArrowRightLong className="text-brandPrimary inline-block ml-2" />
                             </div>
                             </div>
                        </div>
                </div>
           </div>

       </div>
   </div>
</>
     );
}
 
export default Producs;