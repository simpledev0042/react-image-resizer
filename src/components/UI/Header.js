import React from "react";
import "./header.css";
import Logo from "../../assets/logo-thin.png";

function Header() {
	return (
		<div className="header">
			<img className="image" alt="logo" src={Logo}></img>
			
		</div>
	);
}

export default Header;