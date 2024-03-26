import { useEffect } from "react";
import { useState } from "react";
import Details from "./Details";




const BookDetails = () => {

   const [details, setDetails] = useState([]);


   useEffect( () => {

     fetch('details.json')
     .then(res => res.json())
     .then( data => setDetails(data))

   } , [])



    return (
        <div>

              <hr></hr>


                 <div className=" flex justify-center items-center gap-5 mt-10">

                    <img className=" h-[50px]" src="https://i.ibb.co/LQJgh8P/book-2.png" alt="" />
               
                   <h1 className=" text-5xl font-extrabold text-center ">Book Details   </h1>

                </div>


                <div>

                      {
                         details.map( details => <Details key={details.id} details={details}  ></Details>  )


                      }



                </div>
            
        </div>
    );
};

export default BookDetails;