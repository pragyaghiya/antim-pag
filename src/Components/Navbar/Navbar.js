import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems shadow-xl">
        <Link to="/">
          <img className="navbar-logo" src={logo} />
        </Link>
        <div className="menu-icon " onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <IconButton
          aria-label="show 17 new notifications"
          color="inherit"
          component={Link}
          to="/Checkout"
        >
          <Badge className="carticon" color="secondary">
            <AddShoppingCartIcon />
            {/* {basket?.length} */}
          </Badge>
        </IconButton>
        {/* <Button>Sign Up</Button> */}
      </nav>
    );
  }
}
export default Navbar;
