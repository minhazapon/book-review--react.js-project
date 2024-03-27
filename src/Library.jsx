import { useEffect } from "react";
import { useState } from "react";
import LibraryInfo from "./LibraryInfo";



const Library = () => {

     const [library, setLibrary] = useState([])


     useEffect( () => {
        
           fetch('library.json')
           .then(res => res.json())
           .then(data => setLibrary(data))

     } , [])


    return (
        <div className=" ml-10 mr-10">
        
            <div className=" flex justify-center items-center gap-3 mt-10 bg-purple-100 p-2 rounded-2xl">
                 <img className=" h-[50px]" src="https://i.ibb.co/T0NSLwg/bookshelf.png" alt="" />
                <h1 className=" text-center font-extrabold text-4xl text-blue-600">World Most popular library </h1>
            </div>

             

             <div className=" grid  md:grid-cols-3 gap-5 mt-10">



               {

                  library.map( library => <LibraryInfo key={library.id} library={library} ></LibraryInfo>  )

               }
 




             </div>
           
            





        </div>
    );
};

export default Library;