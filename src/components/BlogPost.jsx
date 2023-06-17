import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogPost = ({ img, title, text, url }) => {

	AOS.init({
		// Global settings:
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
		initClassName: 'aos-init', // class applied after initialization
		animatedClassName: 'aos-animate', // class applied on animation
		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 400, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: false, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

	});

	return (
		<article className="blog__post">
			{img !== null && (
				<div
					data-aos="fade-up"
					data-aos-offset="200"
					data-aos-delay="50"
					data-aos-duration="1500"
					data-aos-easing="ease-in-out"
					data-aos-mirror="false"
					data-aos-once="false"

					className="blog__post-thumbnail">
					<img

						src={img} alt="Drone" />
				</div>
			)}
			<div

				data-aos="fade-up"
				data-aos-offset="200"
				data-aos-delay="50"
				data-aos-duration="2500"
				data-aos-easing="ease-in-out"
				data-aos-mirror="false"
				data-aos-once="false"

				className="blog__post-excerpt">
				<h3>{title}</h3>
				<p>{text}</p>
				<a
					className="transform-link"
					href={url}
					target="_blank"
					rel="noreferrer"
				>
					Read full article
				</a>
			</div>
		</article>
	);
};

export default BlogPost;
