import React, { Suspense } from "react";
import {
	Loader,
	Navbar,
	Intro,
	About,
	Skills,
	Certification,
	LatestProjects,
	Blogs,
	Contact,
	Footer,
} from "../components";
// import "../assets/styles/main.css";

import BlogImg1 from "../assets/img/blog-post-1.png";
import BlogImg2 from "../assets/img/blog-post-2.png";
import BlogImg3 from "../assets/img/blog-post-3.png";

const blogs = [
	{
		img: BlogImg1,
		title: "ARGO - The Autonomous drone",
		text:
			"We set out to design and build a drone that can navigate autonomously using machine learning algorithms.",
		url: "https://medium.com/@ydehhani/argo-the-autonomous-drone-767703dac2d3",
	},
	{
		img: BlogImg2,
		title: "ARGO - Main Components",
		text:
			"We will take a closer look at the key components that were used to build the ARGO drone.",
		url: "https://medium.com/@ydehhani/argo-main-components-5f803dfd7595",
	},
	{
		img: BlogImg3,
		title: "VulCAN - CAN Bus Robotic Arm",
		text:
			"We'll dive into the development process and showcase the technology behind this impressive robotic arm.",
		url: "https://medium.com/@ydehhani/vulcan-can-bus-robotic-arm-df330cab3f6b",
	},
];

const HomeContent = () => {
	return (
		<div>
			<div className="fixed">
				<Navbar type="home" />
			</div>
			<Intro />
			<main>
				<About />
				<Skills />
				<Certification />
				<LatestProjects />
				<Blogs blogs={blogs} />
				<Contact />
			</main>
			<Footer />
		</div>
	);
};

const Home = () => {
	return (
		<div>
			<Suspense fallback={<Loader />}>
				<HomeContent />
			</Suspense>
		</div>
	);
};

export default Home;
