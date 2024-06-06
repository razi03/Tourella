import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import SigninPopup from "./SigninPopup";
import "./NavbarStyles.css";

class Navbar extends Component {
    state = {
        clicked: false,
        showSignin: false
    };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    handleSigninClick = () => {
        this.setState({ showSignin: true });
    };

    handleClosePopup = () => {
        this.setState({ showSignin: false });
    };

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Tourella</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <i className={item.icon}></i>{item.title}
                                </Link>
                            </li>
                        );
                    })}
                    <button onClick={this.handleSigninClick}>Sign In</button>
                </ul>
                <SigninPopup show={this.state.showSignin} onClose={this.handleClosePopup} />
            </nav>
        );
    }
}

export default Navbar;
