
const List = ({list}) => {

    const { images, adult, identity, book_name, author_name, type, rate, Number_of_Pages, Publisher, YearOfPublishing } = list



    return (
        <div>
               <div className=" flex-col md:flex-row lg:flex-row   hero w-[800px] border-[1px] mt-5 border-green-600 rounded-2xl bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                  <img src={images} className=" h-[200px] w-[150px]   rounded-lg shadow-2xl" />
                  <div>
                    <h1 className="text-5xl font-bold"> {book_name} </h1>
                     <h1 className=" text-xl mt-2 font-bold"> by: {author_name} </h1>
                      <div className=" flex items-center gap-3 flex-col md:flex-row lg:flex-row ">
                         <h1 className=" text-xl font-bold text-green-600"> Tag: #{adult}   </h1>
                         <h1 className=" text-green-600 font-bold text-xl"> #{identity}  </h1>
                         <h1 className=" flex justify-center items-center text-xl font-bold text-slate-500"> 
                            

                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>


                            
                         YearOfPublishing:
                           {YearOfPublishing}
                           </h1>

                      </div>  

                      <div className=" flex items-center gap-5 flex-col md:flex-row lg:flex-row ">
                         
                         <h1 className=" text-xl font-bold">Publisher: {Publisher} </h1>

                        <h1 className=" text-xl font-bold" >Pages: {Number_of_Pages} </h1>


                      </div>
                      
                      <div className=" flex items-center gap-3 mt-3 flex-col md:flex-row lg:flex-row ">
                           <h1 className=" font-bold btn text-blue-500 border-[1px] border-blue-500"> category: {type} </h1>

                           <h1 className="  font-bold btn text-yellow-600  border-[1px] border-yellow-600" > rating: {rate} </h1>
                            
                            <button className=" text-xl btn bg-green-500 text-white">View Details</button>

                      </div>

                    
                  </div>
                </div>
              </div>


        </div>
    );
};

export default List;