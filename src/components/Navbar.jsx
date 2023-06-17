import React from "react";
import { useState, useRef, useEffect } from "react";
import cvFilePath from "../assets/download/DEHHANI_Yassine_CV_FR.pdf";

const Navbar = ({ type }) => {
	const [status, setStatus] = useState("close");
	const [sidebar, setSidebar] = useState(false);

	let menuRef = useRef();

	useEffect(() => {
		let handler = (event) => {
			if (!menuRef.current.contains(event.target)) {
				setSidebar(false);
				setStatus("close");
			}
		};

		document.addEventListener("mousedown", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
		};
	});

	const mobileHamburger = () => {
		setSidebar((prev) => !prev);
		setStatus(status === "open" ? "close" : "open");
	};

	return (
		<div className="navigation " ref={menuRef}>
			<nav className="nav">
				<div className="logo">
					<a href="/">YD</a>
				</div>

				<div className={`${sidebar ? "navbar active" : "navbar"}`}>
					<ul class="nav-links">
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/#work">Portfolio</a>
						</li>
						<li>
							<a href="/#blog">Blog</a>
						</li>
						<li>
							<a href="/#contact">Contact</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/yassine-dehhani/"
								target="_blank"
								rel="noreferrer"
							>
								<strong>Linkedin</strong>
							</a>
						</li>
						<li>
							<a
								href="https://github.com/yaxsomo"
								target="_blank"
								rel="noreferrer"
							>
								<strong>Github</strong>
							</a>
						</li>
						<div className="cv_download lg_hidden">
							<a
								href={type === "home" ? cvFilePath : "/"}
								download={type === "home" ? "DEHHANI_Yassine_CV" : null}
							>
								<button>{type === "home" ? "Download CV" : "Back Home"}</button>
							</a>
						</div>
					</ul>
				</div>

				<div
					id="download-cv-button"
					className={`cv_download lg ${"sm_d_none"}`}
				>
					<a
						href={type === "home" ? cvFilePath : "/"}
						download={type === "home" ? "DEHHANI_Yassine_CV" : null}
					>
						<button>{type === "home" ? "Download CV" : "Back Home"}</button>
					</a>
				</div>

				{/* {type === "home" && ( */}
				<div
					className="BurgerMenu_container logo"
					role="button"
					onClick={mobileHamburger}
				>
					<i className={status}></i>
					<i className={status}></i>
					<i className={status}></i>

					{/* <p   >toggle</p> */}
				</div>
				{/* )} */}
			</nav>
		</div>
	);
};

export default Navbar;
