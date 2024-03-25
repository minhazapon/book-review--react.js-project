
const BookInfo = ({book}) => {

    const {images, adult, identity, book_name, author_name, type, rate} = book

    return (
        <div>
            
              <div>

              <div className="card w-[350px] bg-base-100 shadow-xl border-[1px] border-blue-500">
               <figure className="px-10 pt-10">
                 <img src={images} alt="Shoes" className="rounded-xl h-[200px] w-[200px]" />
               </figure>
               <div className="flex justify-center items-center gap-16 mt-1 ">
                 <h2 className="card-title text-green-500 font-bold"> {adult} </h2>
                 <p className="card-title text-green-500 font-bold" > {identity} </p>
               </div>
                <h1 className=" text-center mt-5 text-3xl font-bold text-blue-600" > {book_name} </h1>
                <h1 className=" text-center font-bold text-3xl"> BY: {author_name}  </h1>

                <div className=" flex justify-center items-center gap-28 mb-5">
                   <h1 className=" text-xl  font-bold"> {type} </h1>
                   <h1  className=" text-xl font-bold flex gap-2"  > {rate}  

                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                   </svg>

                   
                   
                   
                    </h1>


                </div>

             </div>












              </div>




        </div>
    );
};

export default BookInfo;