import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";

import argoImg from "../assets/img/argo_drone.png";
import vulcanImg from "../assets/img/vulcan_robot.png";
import comingSoonImg from "../assets/img/coming_soon.svg";

import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
	const { scene } = useGLTF("/project22.glb");
	return <primitive object={scene} {...props} />;
}

const LatestProjects = () => {
	const [first, setFirst] = useState(true);
	const [second, setSecond] = useState(false);
	const [third, setThird] = useState(false);
	const [firstIsactive, setFirstIsActive] = useState(true);
	const [secondIsactive, setSecondIsActive] = useState(false);
	const [ThirdIsactive, setThirdIsActive] = useState(false);
	const [isActive, setIsActive] = useState(true);

	const onFirstChange = () => {
		setSecond(false);
		setThird(false);
		setFirst(true);
		setFirstIsActive(true);
		setSecondIsActive(false);
		setThirdIsActive(false);
		setIsActive(true);
	};

	const onSecondChange = () => {
		setFirst(false);
		setThird(false);
		setSecond(true);
		setFirstIsActive(false);
		setSecondIsActive(true);
		setThirdIsActive(false);
		setIsActive(true);
	};

	const onThirdChange = () => {
		setFirst(false);
		setSecond(false);
		setThird(true);
		setFirstIsActive(false);
		setSecondIsActive(false);
		setThirdIsActive(true);
		setIsActive(true);
	};

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
		<section id="work" className="work overflowX">
			<h2 className="work__heading title">Latest Projects</h2>

			<div className="work__wrapper wrapper--large">
				<ul className="work__list">
					{first && (
						<li className="work__list-el work__list-el--is-active">
							<div className="work__content">
								<div className="work__content-blurb blurb blurb--framed">
									<h3
										data-aos="fade-right"
										data-aos-offset="100"
										data-aos-delay="50"
										data-aos-duration="1500"
										data-aos-easing="ease-in-out"
										data-aos-mirror="false"
										data-aos-once="false"
										className="blurb__heading"
									>
										ARGO
										<br />
										AI Drone
									</h3>
									<p
										data-aos="fade-right"
										data-aos-offset="100"
										data-aos-delay="50"
										data-aos-duration="1500"
										data-aos-easing="ease-in-out"
										data-aos-mirror="false"
										data-aos-once="false"
										className="blurb__copy"
									>
										This marvellous cutting-edge autonomous drone is capable of
										self-driving, cartography, security, and more.
									</p>
								</div>
								<a className="transform-link" href="/argo">
									See full project
								</a>
							</div>
							<div
								data-aos="fade-left"
								data-aos-offset="100"
								data-aos-delay="50"
								data-aos-duration="2000"
								data-aos-easing="ease-in-out"
								data-aos-mirror="false"
								data-aos-once="false"
								className="work__visual"
							>
								<img src={argoImg} alt="Argo project" />
							</div>
						</li>
					)}

					{second && (
						<li className="work__list-el work__list-el--is-active">
							<div className="work__content">
								<div className="work__content-blurb blurb blurb--framed">
									<h3 className="blurb__heading">
										VulCAN
										<br />
										Robotic Arm
									</h3>
									<p className="blurb__copy">
										This cutting-edge robotic arm is powered by a CAN Bus
										network, that ensures reliability and effectiveness.
									</p>
								</div>
								<a className="transform-link" href="/vulcan">
									See full project
								</a>
							</div>
							<div className="work__visual">
								<img src={vulcanImg} alt="VulCAN project" />
							</div>
						</li>
					)}

					{third && (
						<li className="work__list-el work__list-el--is-active">
							<div className="work__content">
								<div className="work__content-blurb blurb blurb--framed">
									<h3 className="blurb__heading">
										Coming
										<br />
										Soon
									</h3>
									<p className="blurb__copy">
										More exciting projects coming soon! Stay tuned.
									</p>
								</div>
								{/* See full project transform-link */}
							</div>
							<div className="work__visual">
								<img src={comingSoonImg} alt="Coming soon" />
							</div>
						</li>
					)}
				</ul>

				<ul className="work__navigation">
					<li
						onClick={onFirstChange}
						className={
							isActive && firstIsactive
								? "work__navigation-el--is-active"
								: "work__navigation-el "
						}
					></li>
					<li
						onClick={onSecondChange}
						className={
							isActive && secondIsactive
								? "work__navigation-el--is-active"
								: "work__navigation-el "
						}
					></li>
					<li
						onClick={onThirdChange}
						className={
							isActive && ThirdIsactive
								? "work__navigation-el--is-active"
								: "work__navigation-el "
						}
					></li>
					{/* className={isActive ? 'bg-salmon' : ''} */}
				</ul>
			</div>
		</section>
	);
};

export default LatestProjects;
