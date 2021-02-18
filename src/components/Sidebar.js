import React, {Fragment, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const [active, setActive] = useState(false);
    useEffect(() => {
        // Update the document title using the browser API
        document.getElementById("local-dashboard").classList.add("active");
    });

    function handleActive(id) {

        if(id == "local-dashboard"){
            document.getElementById("local-dashboard").classList.add("active");
            document.getElementById("stratigic-dashboard").classList.remove("active");
        }else if(id == "stratigic-dashboard"){
            document.getElementById("local-dashboard").classList.remove("active");
            document.getElementById("stratigic-dashboard").classList.add("active");
        }
    }


    return (
    <ul id ="toggle-ul" className="sidebar navbar-nav">

    <li id = "local-dashboard" className="nav-item active">
    <Link className="nav-link" to="/" onClick={ () => handleActive("local-dashboard")}> 
    <i className="fa fa-map-marker" aria-hidden="true"></i> 
    <span>Local Dashboard</span> 
    </Link> 
    </li>

    <li className="nav-item" id="stratigic-dashboard"> 
    <Link className="nav-link " to="stratigic-dashboard" onClick={ () => handleActive("stratigic-dashboard")}
     id="pagesDropdown1"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
    <img src="img/Iconawesome-chess-knight.png" width="12px" />
    <span>Stratigic Dashboard</span>
    </Link>
    </li>

    <li className="nav-item light-grey" > 
    <a className="nav-link"   href="#" id="pagesDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span>Pages</span> 
    </a>
    </li>

    <li className="nav-item"> <a className="nav-link" href="#">
    <img src="img/Iconionic-md-options.png" width="18px;" /> 
    <span>Configutations</span></a> 
    </li>

    <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <i className="fa fa-file" aria-hidden="true"></i> 
    <span>Documontation</span> </a>
    </li>

    <li className="nav-item light-grey">
        <a className="nav-link " href="#" id="pagesDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span>Components</span> </a>
    </li>

    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fa fa-map-o" aria-hidden="true"></i> <span>Maps</span> </a>
    </li>
  </ul>

    )
}

export default Sidebar
