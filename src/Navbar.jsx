import { NavLink } from "react-router-dom";


const Navbar = () => {

     const links = <>
     
        <li><NavLink to="/">Home</NavLink></li>
        <li ><NavLink to="/Listed">Listed Books</NavLink></li>
        <li ><NavLink to="/pages">Pages to Read</NavLink></li>
        <li ><NavLink to="/best">Best Books</NavLink></li>
        <li ><NavLink to="/library">library</NavLink></li>
        
     
     
     </>


    return (
        <div>


            <div className=" ml-5 mr-5 mt-5">

                      <div className="navbar bg-base-100">
                      <div className="navbar-start">
                        <div className="dropdown">
                          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                          </div>
                          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                          </ul>
                        </div>
                        <a className="btn btn-ghost text-2xl font-bold">Book Vibe</a>
                      </div>
                      <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                          {links}
                        </ul>
                      </div>
                      <div className="navbar-end">
                        <a className="btn bg-green-500 text-white">Sign In</a>
                      </div>
                      <div className=" ml-2">
                        <a className="btn bg-blue-500 text-white ">Sign Up</a>
                      </div>
                    </div>
                    















            </div>
            
        </div>
    );
};

export default Navbar;