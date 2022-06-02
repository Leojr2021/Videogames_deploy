import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import logo from '../../assets/control_videogame.png'
import { CreateModal } from "../../containers/CreateModal/CreateModal";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function NavBar() {
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setName("");
    }

    return (
        <div className="navBar">

            <div className="navBar_container">
            <div className="videogames">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="home">
                <Link to="/home">
                    <h3>Home</h3>
                </Link>
            </div>
            
            <div className="create">
                <Link to="create">
                <h3>Create</h3>
                </Link>
               {/* <CreateModal/> */}
            </div>
            <div className="about">
                <Link to="about">
                <h3>About</h3>
                </Link>
            </div>
            </div>
            <div className="searchbar_container">
            <div className="searchbar">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter a videogame"
                    type="text"
                    ></input>
                     <NavLink to={`search/${name}`}>
                        <button name="name" type="submit"> Go </button>
                    </NavLink>
                   
                </form>
               
            </div>
            </div>
        </div>
    );
}


export default NavBar;