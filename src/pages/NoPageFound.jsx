import React from "react";

const NoPageFound = () => {
	return (
		<header className="header">
			<div className="introduction">
				<h1 className="introduction__content">
					<span className="introduction__content-el introduction__content-el--description">
						Error 404
					</span>
					<span className="introduction__content-el introduction__content-el--job">
						Looks you landed on an empty page
					</span>
				</h1>
				<div className="go-home_404">
					<a className="navigation__cta button" href="/">
						Go Home
					</a>
				</div>
			</div>
		</header>
	);
};

export default NoPageFound;
