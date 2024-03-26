import { Link } from "react-router-dom";




const ErrorPage = () => {
    return (
        <div>


        <h1 className=" text-5xl font-extrabold mt-10 text-center">OOPS!!!</h1>
         

         <div className=" flex justify-center items-center ">
        <Link className=" text-xl  mt-10 btn p-1 text-center"   >  Go to Home</Link>
        </div>
        </div>
    );
};

export default ErrorPage;