import React from "react";

import "./QrFormHeader.css";

const QrFormHeader = (props) => {
	const onClickHandler = (id) => {
		const hamburger = document.querySelector(".hamburger");
		const navMenu = document.querySelector(".nav-menu");

		var x = document.querySelectorAll(".nav-item");
		for (let i = 0; i < x.length; i++) {
			x[i].classList.remove("selected");
		}
		x[id - 1].classList.add("selected");

		hamburger.classList.remove("active");
		navMenu.classList.remove("active");
		props.onOptionChange(id);
	};

	const toggleHamburger = () => {
		const hamburger = document.querySelector(".hamburger");
		const navMenu = document.querySelector(".nav-menu");

		hamburger.classList.toggle("active");
		navMenu.classList.toggle("active");
	};

	return (
		<div className="qrform-header">
			<div className="navbar">
				<div onClick={toggleHamburger} className="hamburger">
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</div>
				<ul className="nav-menu">
					<li
						onClick={onClickHandler.bind(null, 1)}
						className="nav-item"
					>
						<span className="nav-link">Message</span>
					</li>
					<div className="vl" />
					<li
						onClick={onClickHandler.bind(null, 2)}
						className="nav-item"
					>
						<span className="nav-link">VCard</span>
					</li>
					<div className="vl" />
					<li
						onClick={onClickHandler.bind(null, 3)}
						className="nav-item"
					>
						<span className="nav-link">SMS</span>
					</li>
					<div className="vl" />
					<li
						onClick={onClickHandler.bind(null, 4)}
						className="nav-item"
					>
						<span o className="nav-link">
							Email
						</span>
					</li>
					<div className="vl" />
					<li
						onClick={onClickHandler.bind(null, 5)}
						className="nav-item"
					>
						<span className="nav-link">URL</span>
					</li>
					<div className="vl" />
					<li
						onClick={onClickHandler.bind(null, 6)}
						className="nav-item"
					>
						<span className="nav-link">Call</span>
					</li>
					<div className="vl" />
					<li onClick={onClickHandler.bind(null, 7)} className="nav-item">
						<span className="nav-link">PDF</span>
					</li>
					<div className="vl" />
					<li
						onClick={onClickHandler.bind(null, 8)}
						className="nav-item"
					>
						<span className="nav-link">Image</span>
					</li>
					<div className="vl" />
					<li
						onClick={onClickHandler.bind(null, 9)}
						className="nav-item"
					>
						<span className="nav-link">MP3</span>
					</li>
					<div className="vl" />
					<li
						onClick={onClickHandler.bind(null, 10)}
						className="nav-item"
					>
						<span className="nav-link">Menu</span>
					</li>
					<div className="vl" />
					<li
						onClick={onClickHandler.bind(null, 11)}
						className="nav-item"
					>
						<span className="nav-link">Get App</span>
					</li>
					<div className="vl" />
					<li
						onClick={onClickHandler.bind(null, 12)}
						className="nav-item"
					>
						<span className="nav-link">FB</span>
					</li>
					<div className="vl" />
					<li
						onClick={onClickHandler.bind(null, 13)}
						className="nav-item"
					>
						<span className="nav-link">Coupon</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default QrFormHeader;
