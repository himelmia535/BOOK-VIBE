import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-lg px-4 sm:px-8 fixed z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <NavLink to='/' className={({isActive}) => isActive? 'btn btn-outline btn-success' : 'font-bold'}>Home</NavLink>
        <NavLink to='/listedbooks' className={({isActive}) => isActive? 'btn btn-outline btn-success' : 'font-bold' }>Listed Books</NavLink>
        <NavLink to='/pagestoread' className={({isActive}) => isActive? 'btn btn-outline btn-success' : 'font-bold' }>Pages to Read</NavLink>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-xl font-bold lg:text-2xl">Book Bounder</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal flex items-center px-1 gap-5">
        <NavLink to='/' className={({isActive}) => isActive? 'btn btn-outline btn-success' : 'font-bold'}>Home</NavLink>
        <NavLink to='/listedbooks' className={({isActive}) => isActive? 'btn btn-outline btn-success' : 'font-bold' }>Listed Books</NavLink>
        <NavLink to='/pagestoread' className={({isActive}) => isActive? 'btn btn-outline btn-success' : 'font-bold' }>Pages to Read</NavLink>
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <div>
    <a  className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
<span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span className="relative">Sign In</span>
</a>
    </div>
    <div>
    <a  className="relative rounded px-5 py-2.5 overflow-hidden group bg-cyan-500 relative hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-cyan-400 transition-all ease-out duration-300">
<span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span className="relative">Sign Up</span>
</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Nav;