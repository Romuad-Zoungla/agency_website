
import part1 from "../assets/partn1.png";
import part2 from "../assets/partn2.png";
import part3 from "../assets/partn3.png";
import part4 from "../assets/partn4.png";
import part5 from "../assets/partn5.png";
import part6 from "../assets/partn6.png";
import part7 from "../assets/partn6.png";


const Services = () => {
    const services = [
        {
            id:1,
             title: "Membership Organisations", 
            description:"Our membership management software provides full automation of membership renewals and payments", 
            image: "/src/assets/service3.png"
        },
        {
            id:2, 
            title: "National Associations", 
            description:"Our membership management software provides full automation of membership renewals and payments", 
            image: "/src/assets/service2.png"
        },
        {
            id:3, title: "Clubs And Groups", 
            description:"Our membership management software provides full automation of membership renewals and payments",
             image: "src/assets/service1.png"
        },

    ]
    return ( 
        <div className="md:px-14 px-4 py-8 md:py-16 max-w-screen-2xl mx-auto ">
           <div className="text-center my-8">
            <h2 className="text-4xl text-neutralDgray font-semibold mb-2">Our clients</h2>
            <p className="text-lg text-neutralGray mb-2">We have been working with some Fortune 500+ clients</p>
          
          <div className="py-6 md:py-12 flex flex-wrap gap-6 justify-center md:gap-12 items-center">
            <img src={part1} alt="" />
            <img src={part2} alt="" />
            <img src={part6} alt="" /> 
            <img src={part4} alt="" />
            <img src={part5} alt="" />
            <img src={part7} alt="" />
            <img src={part3} alt="" />
          </div>
           </div>
      <div className="mt-8 md:w-1/2 mx-auto text-center">
      <h2 className="px-4 text-xl md:text-3xl text-neutralDgray font-semibold mb-1">
        Our services are designed to help you build a resilient and innovative
      </h2>
      <p className="text-neutralGray"> Who is Nexcent suitable for ?</p>
      </div>
         
         {/* Cards */}
         <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12  py-8 md:py-16 ">
             {services.map(service => (
                 <div key={service.id} className=" px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full  ">
                     <div>
                     <div className="mb-4 bg-[#E8F5E9] h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                        <img className=" -ml-5 " src={service.image} alt="" /> </div>
                     <h3 className="text-lg md:text-2xl font-bold  text-neutralDgray mb-2 px-2">{service.title}</h3> 
                     <p className="text-sm text-neutralGray">{service.description}</p>
                 </div>
                 </div>
                 
             ))}
         </div>
         
        </div>
     );
}
 
export default Services;