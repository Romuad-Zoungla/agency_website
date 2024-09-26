import { FaArrowRightLong } from "react-icons/fa6";
const Blog = () => {
    const blogs = [
        {
            id:1,
             title: "Creating Streamlined Safeguarding Processes with OneRen", 
            
            image: "/src/assets/image18.png"
        },
        {
            id:2, 
            title: "What are your safeguarding responsibilities and how can you manage them?", 
            
            image: "/src/assets/image2.png"
        },
        {
            id:3, 
            title: "Revamping the Membership Model with Triathlon Australia", 
           
             image: "src/assets/image20.png"
        },

    ]
    return (
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id="faq">
          <div className="text-center md:w-1/2 mx-auto">
          <h2 className="text-4xl text-neutralDgray font-semibold mb-4 ">
          Caring is the new marketing
             </h2>
           <p className="md:w-4/5 text-sm text-neutralGray mb-8 mx-auto">  The Nexcent blog is the best place to read about the latest membership insights, trends and more. 
            See who{"'"}s joining the community, read about how our community are 
            increasing their membership income and lot{"'"}s </p>
          </div> 

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-between">
            {blogs.map(blog => ( 
              <div key={blog.id} className=" mx-auto relative mb-12 cursor-pointer">
               
                  <img className="w-full h-auto object-cover rounded-lg hover:scale-95 transition-all duration-300" src={blog.image} alt={blog.title} />
                 
                  <div className="absolute px-4 py-2 mx-8   -bottom-24   lg:-bottom-16 shadow-lg rounded-lg bg-white mb-8 lg:mb-0">
                  <h3 className="mt-4 text-lg font-semibold text-neutral-700">
                    {blog.title} 
                  </h3>  

                  <div className="flex
                   items-center gap-8 justify-center"> 
                  <a href="/" className="font-bold text-brandPrimary hover:text-neutral-700">Read more </a>
                  <FaArrowRightLong className="text-brandPrimary inline-block ml-2" />
                  </div> 
                  </div>
              </div> 
            ))} 
          </div>

        


        </div>
      );
}
  
export default Blog;