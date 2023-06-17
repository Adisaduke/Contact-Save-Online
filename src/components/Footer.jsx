import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
	AOS.init({
		// Global settings:
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
		initClassName: "aos-init", // class applied after initialization
		animatedClassName: "aos-animate", // class applied on animation
		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 400, // values from 0 to 3000, with step 50ms
		easing: "ease", // default easing for AOS animations
		once: false, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
	});

	return (
		<footer className="footer">
			<div className="footer__wrapper wrapper--large">
				<p className="footer__copyright no-margin">
					&copy; 2023 Yassine DEHHANI
				</p>
				<a href="/#top" className="footer__logo logo">
					YD
				</a>

				<a className="footer__arrow" href="#top">
					<svg
						className="footer__arrow-el"
						// xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						version="1.1"
						id="Layer_1"
						x="0"
						y="0"
						viewBox="0 0 130 65"
						// xml:space="preserve"
						enableBackground="new 0 0 130 65"
					>
						<g transform="translate(0.000000,65.000000) scale(0.100000,-0.100000)">
							<path d="M315.4 365c-336-305-345-315-290-351 18-12 32-14 45-8 10 5 145 123 300 262l281 253 196-178c108-98 237-215 287-260 50-46 98-83 107-83s27 9 40 19c20 16 22 23 14 46 -12 33-623 585-647 585C638.4 650 489.4 522 315.4 365z" />
						</g>
					</svg>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
