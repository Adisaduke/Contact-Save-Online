import React from "react";

const ThankYou = () => {
	return (
		<header class="header">
			<div class="introduction">
				<h1 class="introduction__content">
					<span class="introduction__content-el introduction__content-el--description">
						Thank you
					</span>
					<span class="introduction__content-el introduction__content-el--job">
						I will get back to you soon!
					</span>
				</h1>
				<div class="go-home_404">
					<a class="navigation__cta button" href="/">
						Go Home
					</a>
				</div>
			</div>
		</header>
	);
};

export default ThankYou;
