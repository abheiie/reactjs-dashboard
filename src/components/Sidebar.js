import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
    <ul id ="toggle-ul" className="sidebar navbar-nav">

    <li className="nav-item active">
    <Link className="nav-link" to="/"> 
    <i className="fa fa-map-marker" aria-hidden="true"></i> 
    <span>Local Dashboard</span> 
    </Link> 
    </li>

    <li className="nav-item "> 
    <Link className="nav-link " to="stratigic-dashboard" id="pagesDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
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
