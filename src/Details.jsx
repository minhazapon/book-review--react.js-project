

const Details = ({details}) => {

     const {images, adult, identity, book_name, author_name, type,
    
        rate, review, Number_of_Pages, Publisher, Year_of_Publishing
    
       } = details;

    return (
        <div className=" mt-10 ml-10 mr-10">
            


            <div className="hero  bg-base-200 ">
             <div className="hero-content flex-col lg:flex-row">
               <img src={images} className=" h-[500px] w-[500px] rounded-lg shadow-2xl" />
               <div>
                 <h1 className="text-5xl font-bold "> {book_name} </h1>
                 <p className="text-xl font-extrabold mt-1"> by: {author_name}   </p>
                  <p className=" text-xl font-bold mt-3 mb-3"> {type} </p>
                 <p className=" text-xl text-slate-400  mt-2"> review {review}  </p>

                  <div className=" flex items-center gap-10 mt-4 text-green-700 font-bold">
                    <h1 className=" text-xl font-bold text-black">Tag</h1>  
                    <h1> {adult} </h1>
                    <h1> {identity} </h1>
                  </div>
                   <p className=" text-xl font-bold text-blue-600"> number of pages {Number_of_Pages} </p>
                   <p className=" text-xl font-bold text-blue-600"> Publisher: {Publisher} </p>
                   <p className=" text-xl font-bold text-blue-600">Year of Publishing: {Number_of_Pages} </p>
                   <p className=" text-xl font-bold text-blue-600"> rate:  {rate} </p>

                 <button className="btn btn-primary">Get Started</button>
               </div>
             </div>
           </div>





        </div>
    );
};

export default Details;