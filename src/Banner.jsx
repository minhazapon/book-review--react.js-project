



const Banner = () => {
    return (
        <div className=" ml-10 mr-10 mb-10 bg-slate-200 rounded-2xl p-5 mt-16">
            
               <div className=" flex justify-center items-center gap-40 flex-col md:flex-row lg:flex-row ">


                  <div>
                   <h1 className=" text-4xl font-extrabold"> Books to freshen<br></br> Up your BooksShelf </h1>

                   <button className=" btn bg-green-400 w-[200px] text-white  text-xl  mt-10">View The List</button>

                  </div>



                  <div>

                     <img className=" h-[400px] w-[300px] rounded-xl" src="https://i.ibb.co/zfNBRTk/next-js.webp" alt="" />


                  </div>
               </div>









        </div>
    );
};

export default Banner;