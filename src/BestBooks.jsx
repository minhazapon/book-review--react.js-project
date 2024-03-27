import { useEffect } from "react";
import { useState } from "react";
import Bestinfo from "./Bestinfo";




const BestBooks = () => {

    const [best, setBest] = useState([])

    useEffect( () => {

       fetch('best.json')
       .then(res => res.json())
       .then(data => setBest(data))

    } ,[])


    return (
        <div>
    
           <div className=" flex justify-center items-center gap-2 mt-10">
                <img className=" h-[40px]" src="https://i.ibb.co/Sy3gKd6/learning.png" alt="" />
               <h1 className=" text-4xl font-extrabold   text-center"> <span className=" text-violet-700">Best Books</span> </h1>
           </div>
             



            <div className=" flex justify-center items-center mt-5">
            <div className=" grid  md:grid-cols-3 gap-5">


               {

                   best.map( best => <Bestinfo key={best.id} best={best} ></Bestinfo>  )

               }

            </div>

            </div>



        </div>
    );
};

export default BestBooks;