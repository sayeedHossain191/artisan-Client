import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }


    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allArtAndCraft'>All Art & Craft Items</NavLink></li>
        <li><NavLink to='/addCraft'>Add Craft Item</NavLink></li>
        <li><NavLink to='/myArtAndCraft'>My Art & And Craft List</NavLink></li>

    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ?
                            <>
                                <span className=""><img src={user?.photoURL} title={user?.displayName} className=" ml-5 h-10 rounded-full" alt="" /></span>
                                <button onClick={handleLogOut} className="btn btn-ghost normal-case text-lg">Log Out</button>
                            </>
                            :
                            <>
                                <Link to='/login' className="btn btn-ghost normal-case text-lg">Login</Link>
                                <Link to='/register' className="btn btn-ghost normal-case text-lg">Register</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;