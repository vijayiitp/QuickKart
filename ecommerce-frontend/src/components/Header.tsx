// import React from 'react'
// import {useState} from 'react'
// import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
// import '../styles/app.scss'
// import { User } from '../types/types'
// import toast from 'react-hot-toast'
// import { signOut } from 'firebase/auth'
// import { auth } from '../firebase'

//  interface PropsType{
//   user:User|null;
//  }
 
//  function Header({user}:PropsType) {
//     const [isOpen,setIsOpen]=useState<boolean>(false)
//     const logoutHandler=async()=>{
//       try {

//         await signOut(auth)
//         toast.success("Sign Out Successfully");
//         setIsOpen(false);
        
//       } catch (error) {
//         toast.error("Sign Out fail");
//       }

//  }
//   return (
//     <nav className='header'>
//        <Link onClick={()=>setIsOpen(false)} to={"/"}>Home</Link>
//        <Link onClick={()=>setIsOpen(false)} to={"/search"}><FaSearch/></Link>
//        <Link onClick={()=>setIsOpen(false)} to={"/cart"}><FaShoppingBag/></Link>

//     {user?._id? (
//         <>
//         <button onClick={()=>setIsOpen((prev)=>!prev)}>
//          <FaUser/>
//         </button>

//         <dialog open={isOpen}>
//             <div>
//                {
//                 user.role==="admin" && (
//                     <Link to={"/admin/dashboard"}>Admin</Link>
//                 )
//                }
//                <Link to="/orders">Orders</Link>
//                <button onClick={logoutHandler}>
//                 <FaSignOutAlt/>
//                </button>  
//             </div>
//         </dialog>
        
//         </>
//     ):(
//         <Link to={"/login"}><FaSignInAlt/></Link>
//        )
//     }
//     </nav>
//   )
// }

// export default Header



import React, { useState } from 'react';
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser, FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/app.scss';
import { User } from '../types/types';
import toast from 'react-hot-toast';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

interface PropsType {
  user: User | null;
}

function Header({ user }: PropsType) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  const logoutHandler = async () => {
    try {
      await signOut(auth);
      toast.success("Sign Out Successfully");
      setIsOpen(false);
      setIsMobileOpen(false);
    } catch (error) {
      toast.error("Sign Out Failed");
    }
  };

  const handleMobileMenuToggle = () => setIsMobileOpen(!isMobileOpen);

  return (
    <section id="header">
      <Link to="/">
        <img src="images/logo.png" className="logo" alt="Logo" />
      </Link>
      <div>
        <ul id="navbar" className={isMobileOpen ? 'active' : ''}>
          <li><Link to="/" onClick={() => setIsMobileOpen(false)}>Home</Link></li>
          <li><Link to="/search" onClick={() => setIsMobileOpen(false)}>search</Link></li>
          {/* <li><Link to="/blog" onClick={() => setIsMobileOpen(false)}>Blog</Link></li>
          <li><Link to="/about" onClick={() => setIsMobileOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setIsMobileOpen(false)}>Contact</Link></li> */}
          <li id="lg-bag">
            <Link to="/cart" onClick={() => setIsMobileOpen(false)}><FaShoppingBag /></Link>
          </li>
          <li>
            {user?._id ? (
              <>
                <button onClick={() => setIsOpen((prev) => !prev)}><FaUser /></button>
                <dialog open={isOpen}>
                  <div>
                    {user.role === "admin" && <Link to="/admin/dashboard">Admin</Link>}
                    <Link to="/orders">Orders</Link>
                    <button onClick={logoutHandler}><FaSignOutAlt /></button>
                  </div>
                </dialog>
              </>
            ) : (
              <Link to="/login" onClick={() => setIsMobileOpen(false)}><FaSignInAlt /></Link>
            )}
          </li>
          <li id="close" onClick={handleMobileMenuToggle}><FaTimes /></li>
        </ul>
      </div>
      <div id="mobile">
        <Link to="/cart"><FaShoppingBag /></Link>
        <i id="bar" onClick={handleMobileMenuToggle}>
          {isMobileOpen ? <FaTimes /> : <FaBars />}
        </i>
      </div>
    </section>
  );
}

export default Header;
