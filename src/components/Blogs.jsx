import React from "react";
import BlogPost from "./BlogPost";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Blogs = ({ blogs }) => {


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
		<section id="blog" className="blog">
			<h2

				data-aos="fade-up"
				data-aos-offset="100"
				data-aos-delay="50"
				data-aos-duration="1500"
				data-aos-easing="ease-in-out"
				data-aos-mirror="false"
				data-aos-once="false"

				className="blog__heading title">Blog Posts</h2>
			<div



				className="blog__wrapper wrapper--large">
				{blogs.map((blog, key) => (
					<BlogPost
						key={key}
						img={blog.img ? blog.img : null}
						title={blog.title}
						text={blog.text}
						url={blog.url}
					/>
				))}
			</div>
			<div className="blog__view-more">
				<a

					data-aos="fade-up"
					data-aos-offset="100"
					data-aos-delay="50"
					data-aos-duration="2500"
					data-aos-easing="ease-in-out"
					data-aos-mirror="false"
					data-aos-once="false"
					
					className="button blog__view-more--el"
					href="https://medium.com/@ydehhani"
					target="_blank"
					rel="noreferrer"
				>
					View More
				</a>
			</div>
		</section>
	);
};

export default Blogs;
