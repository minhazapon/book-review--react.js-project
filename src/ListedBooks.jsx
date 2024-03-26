


const ListedBooks = () => {



    return (
        <div className=" ml-10 mr-10 ">
              <div className="  flex justify-center items-center ">
                  
                <h1 className=" flex justify-center items-center gap-1 text-5xl font-bold text-center mt-10 bg-slate-200 w-[1200px] p-2 rounded-2xl">
                    
                <img className=" h-[40px]" src="https://i.ibb.co/10P65qN/listing.png" alt="" />
                    
                    
                    Books  </h1>

              </div>
              

              <div className=" flex justify-center">
                 
                  <h1 className=" btn flex justify-center items-center gap-1 text-xl mt-10 bg-green-600 h-[50px] w-[200px] 
                    rounded-xl text-white
                  
                  ">Sort by


                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                    </svg>

                  </h1>
              </div>


             <hr className=" mt-10"></hr>
             


             <div>

                <h1 className=" font-bold text-2xl mt-10">Read Books:  </h1>
             </div>

             <hr className=" mt-10"></hr>

        </div>
    );
};

export default ListedBooks;