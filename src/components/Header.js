import React, { useState } from 'react';


const Header = () => {
    const [toggle, setToggle] = useState(false);

    console.log(toggle)

    const handleToggle = () => {
        if(toggle == false){
            document.body.classList.add('sidebar-toggled');
            document.getElementById("toggle-ul").classList.add("toggled");
            setToggle(!toggle)
        }else{
            document.body.classList.remove('sidebar-toggled');
            document.getElementById("toggle-ul").classList.remove("toggled");
            setToggle(!toggle)
        }
    }

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark static-top"> <a className="navbar-brand mr-1" href="index.html"><img
            src="img/logo.png" alt="" /></a>
            <button 
            onClick={handleToggle}
            className="btn btn-link btn-sm text-white order-1 order-sm-0" 
            id="sidebarToggle" href="#"> 
            <i className="fas fa-bars"></i> 
            </button>
        </nav>
    )
}

export default Header
