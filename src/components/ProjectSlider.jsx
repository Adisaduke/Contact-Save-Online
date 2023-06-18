import { useEffect } from "react";
import { useState } from "react";

const ProjectSlider = ({ data }) => {
	const [isActive, setIsActive] = useState(0);

	useEffect(() => {});

	useEffect(() => {
		setTimeout(() => {
			setIsActive((prev) => (prev === data.length - 1 ? 0 : (prev += 1)));
		}, 10000);

		return () => {};
	}, [isActive]);

	return (
		<section id="work" className="work">
			<h2
				data-aos="fade-up"
				data-aos-offset="100"
				data-aos-delay="50"
				data-aos-duration="1500"
				data-aos-easing="ease-in-out"
				data-aos-mirror="false"
				data-aos-once="false"
				className="work__heading title"
			>
				Main Components
			</h2>
			<div className="work__wrapper wrapper--large">
				<ul className="work__list">
					{data.map((item, key) => (
						<li
							key={key}
							className={`work__list-el ${
								key === isActive && "work__list-el--is-active"
							}`}
						>
							<div className="work__content">
								<div className="work__content-blurb blurb blurb--framed">
									<h3 className="blurb__heading">
										{item.header1}
										<br />
										{item.header2}
									</h3>
									<p
										// data-aos="fade-up"
										// data-aos-offset="200"
										// data-aos-delay="50"
										// data-aos-duration="1500"
										// data-aos-easing="ease-in-out"
										// data-aos-mirror="true"
										// data-aos-once="false"

										className="blurb__copy"
									>
										{item.text}
									</p>
								</div>
							</div>
							<div className="work__visual">
								<img src={item.img} alt="Argo project" />
							</div>
						</li>
					))}
				</ul>
				<ul className="work__navigation">
					{data.map((item, index) => (
						<li
							key={index}
							className="work__navigation-el"
							onClick={() => setIsActive(index)}
						></li>
					))}
				</ul>
				{/* <li class="work__navigation-el work__navigation-el--is-active"></li> */}
			</div>
		</section>
	);
};

export default ProjectSlider;
