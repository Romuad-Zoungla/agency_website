import { FaArrowRightLong } from "react-icons/fa6";
const Newletter = () => {
    return ( 
        <div className=" mx-auto py-8 bg-slate-100">
        

            <div className=" text-center mx-auto w-3/4  mb-6">
                <h1 className=" text-xl md:text-2xl lg:text-4xl font-bold text-black ">Pellentesque suscipit fringilla libero eu.</h1>
            </div>
          
            <div className="  flex justify-center items-center text-white  ">
            <a href="" className=" btn-primary px-4 py-2 font-semibold text-lg lg:text-xl">
                         Get a Demo  <FaArrowRightLong className="text-white inline-block ml-2" />
            </a>
            </div>
         
        </div>
     );
}
 
export default Newletter; 