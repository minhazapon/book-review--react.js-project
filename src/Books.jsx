import { useEffect } from "react";
import { useState } from "react";
import BookInfo from "./BookInfo";
import { Link } from "react-router-dom";



const Books = () => {


   

    const [book, setBook] = useState([])

  


    useEffect( () => {

      fetch('books.json')
      .then(res => res.json())
      .then(data => setBook(data))



    } , [])



    return (



        // <Link to="/BookDetails" >
        <div className=" mt-16 ml-10 mr-10">
      
          <div>
               
               <h1 className=" text-center font-extrabold text-5xl mb-10 text-blue-600">Books</h1>

          </div>


           <div className=" grid md:grid-cols-3 gap-5 mb-10 ">

              {

                book.map( book => <BookInfo key={book.id} book={book} ></BookInfo>  )

              }


           </div>

        </div>
        // </Link>


    );
};

export default Books;