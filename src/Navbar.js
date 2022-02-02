import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displayMenu = (e) => {
    const sublink=e.target.textContent
    const temp=e.target.getBoundingClientRect()
    const center=(temp.left + temp.right)/2
    const bottom=temp.bottom-3
    openSubmenu(sublink,{center,bottom})
  };
  const handleSubmenu=(e)=>{
    if(!e.target.classList.contains('link-btn')){
      closeSubmenu()
    }

  }
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displayMenu}>products</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displayMenu}>developers</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displayMenu}>company</button>
          </li>
        </ul>
        <button className=" signin-btn change">sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
