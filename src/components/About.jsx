import aboutImg from "../assets/rafiki.png";
const About = () => {
    return (
        <>
         <div className=" px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 " id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 ">
           <div className="">
            <img src={aboutImg} alt="" />
           </div>
             <div className="md:w-3/5 mx-auto">
             <h2 className="text-4xl text-neutralDgray font-semibold mb-4 md:w-4/5">
             The unseen of spending three years at Pixelgrade
             </h2>
            <p className="md:w-4/5 text-sm text-neutralGray mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
             <button className="btn-primary">Learn More</button>
             </div>
        </div>
    </div> 
    
    <div className="px-4 lg:px-14 bg-neutralSilver max-w-screen-2xl mx-auto my-8 py-8 md:py-20">
        <div className=" flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="md:w-1/2">
                <h2 className="text-2xl md:text-4xl text-neutralDgray font-semibold mb-4 md:w-2/3">
                Helping a local <br /> <span className="text-brandPrimary">business reinvent itself</span> 
                </h2>
                <p className="text-sm text-neutralGray mb-4 md:mb-8">We reached here with our hard work and dedication</p>
            </div>

            <div className="md:w-1/2 mx-auto flex flex-wrap sm:items-center justify-around gap-8 md:gap-12">
                <div className="space-y-8"> 
                     <div className=" flex items-center gap-4 ">
                        <img src="/src/assets/Icon4.png" alt="" />
                        <div className="">
                            <h4 className=" text-lg md:text-2xl text-neutralDgray font-semibold"> 2,245,341</h4>
                            <p className="">Members</p>
                        </div>
                     </div>
                     <div className=" flex items-center gap-4 ">
                        <img src="/src/assets/Icon5.png" alt="" />
                        <div className="">
                            <h4 className=" text-lg md:text-2xl text-neutralDgray font-semibold"> 46,328</h4>
                            <p className="">Clubs</p>
                        </div>
                     </div>
                </div> 
                <div className="space-y-8">
                     <div className=" flex items-center gap-4 ">
                        <img src="/src/assets/Icon6.png" alt="" />
                        <div className="">
                            <h4 className=" text-lg md:text-2xl text-neutralDgray font-semibold"> 828,867</h4>
                            <p className="">Event Bookings</p>
                        </div> 
                     </div>
                     <div className=" flex items-center gap-4 ">
                        <img src="/src/assets/Icon7.png" alt="" />
                        <div className="">
                            <h4 className=" text-lg md:text-2xl text-neutralDgray font-semibold"> 1,926,436</h4>
                            <p className="">Payments</p>
                        </div>
                     </div>
                </div>
                

            </div>
        </div>
    </div>
</>

    );
}
 
export default About;