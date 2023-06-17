import React from "react";
import contactVisual from "../assets/img/contact-visual.svg";

const Contact = () => {
	return (
		<section id="contact" className="contact">
			<h2
				data-aos="fade-up"
				data-aos-offset="100"
				data-aos-delay="50"
				data-aos-duration="1500"
				data-aos-easing="ease-in-out"
				data-aos-mirror="false"
				data-aos-once="false"
				className="contact__heading title"
			>
				Contact Me
			</h2>
			<div className="contact__wrapper wrapper--large">
				<div className="contact__visual">
					<img src={contactVisual} alt="Email" />
				</div>
				{/* Simple form setup */}
				<form className="contact__form" action="send-mail.php" method="post">
					<input
						className="contact__form-el contact__form-el--name"
						type="text"
						name="name"
						placeholder="Your Name"
						spellCheck="false"
						required
					/>
					<input
						className="contact__form-el contact__form-el--email"
						type="email"
						name="email"
						placeholder="Your Email"
						spellCheck="false"
						required
					/>
					<textarea
						className="contact__form-el contact__form-el--message"
						name="message"
						placeholder="Your Message"
					></textarea>
					<input
						className="contact__form-el contact__form-el--submit"
						type="submit"
						value="Send"
					/>
				</form>
			</div>
		</section>
	);
};

export default Contact;
