import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";

const Model = ({ model, scale, position, rotation }) => {
	const ref = useRef();
	const modelData = useGLTF(model);

	return (
		<mesh ref={ref}>
			{console.log(ref)}
			<hemisphereLight intensity={1} groundColor="black" />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={7}
				castShadow
				shadow-mapSize={1024}
			/>
			<pointLight intensity={1} />
			<primitive
				object={modelData.scene}
				scale={scale}
				position={position}
				rotation={rotation}
			/>
		</mesh>
	);
};

const ProjectModel = ({ model, scale, position, rotation }) => {
	const [objScale, setobjScale] = useState(scale);
	const [objPosition, setObjPosition] = useState(position);
	const [objRotation, setObjRotation] = useState(rotation);
	useEffect(() => {
		const handleResize = () => {
			setobjScale(scale);
			setObjPosition(position);
			setObjRotation(rotation);
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
		// <div style={{ width: "100%", height: "100%" }}>
		<Canvas
			frameloop="demand"
			shadows
			dpr={[1, 2]}
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				{/* <ambientLight intensity={0.9} /> */}
				<directionalLight color="rgba(255,255,255,0.1)" position={[0, 0, 5]} />
				<OrbitControls
					autoRotate
					autoRotateSpeed={2}
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Model
					model={model}
					scale={objScale}
					position={objPosition}
					rotation={objRotation}
				/>
			</Suspense>

			<Preload all />
		</Canvas>
		// </div>
	);
};

export default ProjectModel;
