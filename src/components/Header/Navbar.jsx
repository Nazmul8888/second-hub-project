import { NavLink } from "react-router-dom";
import Logo from "../Pages/Logo";


const Navbar = () => {
    return (
        <div >
             <nav className=" flex justify-between items-center py-5 shadow-md" >
                <Logo></Logo>
                <ul className="flex gap-5">
                    <li>
                    <NavLink
                    to="/"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400" : ""
                     }
                      >
                   Home
                     </NavLink>
            
                    </li>
                    <li>
                    <NavLink
                    to="/favourite"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-400" : ""
                     }
                      >
                   Favourite
                     </NavLink>
            
                    </li>

                    <li>
                    <NavLink
                    to="/login"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-400" : ""
                     }
                      >
                   Login
                     </NavLink>
            
                    </li>
                    
                </ul>
             </nav>
        </div>
    );
};

export default Navbar;