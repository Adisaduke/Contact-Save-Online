import { Suspense } from "react";
import {
	Navbar,
	ProjectIntro,
	AboutProject,
	ProjectSlider,
	Goals,
	Roadmap,
	Blogs,
	Footer,
	Loader,
} from "../components";
import introImg from "../assets/models/vulcan.glb";
import roadmapImg from "../assets/img/vulcan/roadmap.png";

import sliderImg1 from "../assets/img/vulcan/VulCAN_Schematics.png";
import sliderImg2 from "../assets/img/vulcan/VulCAN_PCB_Design.png";
import sliderImg3 from "../assets/img/vulcan/VulCAN_PCB_Prototype.png";
import sliderImg4 from "../assets/img/vulcan/InProgress.png";

const data = [
	{
		header1: "Schematics of VulCAN CS",
		header2: "",
		text:
			"This document contains the detailed electrical schematics of the VulCAN control system. It provides a visual representation of the wiring, components, and connections within the system, allowing for a comprehensive understanding of its design and functionality.",
		img: sliderImg1,
	},
	{
		header1: "From the schema to 2D design",
		header2: "",
		text:
			"This stage of the project involves translating the electrical schematics of the VulCAN control system into a 2D design. The 2D design will serve as a blueprint for the physical construction of the control system, ensuring that all components are correctly positioned and wired.",
		img: sliderImg2,
	},
	{
		header1: "The prototype",
		header2: "",
		text:
			"The prototype is a physical representation of the VulCAN control system. It is a working model that allows for testing and refinement of the system's design and functionality. The prototype is a crucial step in the development process, as it enables us to identify and address any issues or limitations in the system's design before final production.",
		img: sliderImg3,
	},
	{
		header1: "The BRAIN of",
		header2: "our system",
		text:
			"The \"brain\" of the VulCAN control system refers to the central microcontroller that will control and coordinate all of the system's functions. While the specific microcontroller has not yet been selected, it will be a critical component of the system's design, responsible for processing and responding to input from various sensors and other components.",
		img: sliderImg4,
	},
];

const blogs = [
	{
		title: "Notion Page",
		text:
			"You'll be able to see all the detailed aspects of the engineering process behind this project.",
		url:
			"https://incongruous-notebook-e1d.notion.site/VulCAN-db9826bb9481426b99661145c1439a80",
	},
	{
		title: "Medium Blog",
		text:
			"You'll be able to follow up with our roadmap, projects, the prototypes, the tasks and more.",
		url: "https://medium.com/@ydehhani",
	},
];

const VulcanContent = () => {
	return (
		<div>
			<Navbar />
			<ProjectIntro
				title="VulCAN"
				subtitle="The CAN Bus powered arm"
				img={introImg}
				scale={150}
				position={[0, -1, 0]}
				rotation={[-0.05, 0, 0]}
			/>
			<main>
				<AboutProject
					header1="VulCAN is a cutting-edge robotic arm controlled via a CANBus"
					header2="network, ensuring efficient
					and reliable communication between the various components."
					text="An original way for the components to communicate in near real time."
				/>
				<ProjectSlider data={data} />
				<Goals
					goals={[
						"Develop a reliable and efficient robotic arm control system",
						"Build a functional and durable prototype of the robotic arm",
						"Test and optimize the performance of the robotic arm",
					]}
				/>
				<Roadmap
					title="The Roadmap"
					text="How the project's going ?"
					image={roadmapImg}
				/>
				<Blogs blogs={blogs} />
			</main>
			<Footer />
		</div>
	);
};

const Vulcan = () => {
	return (
		<div>
			<Suspense fallback={<Loader />}>
				<VulcanContent />
			</Suspense>
		</div>
	);
};

export default Vulcan;
