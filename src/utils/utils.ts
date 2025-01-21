import emailjs from "@emailjs/browser";

export const handleFormSubmit = () => {
	const serviceId = import.meta.env.PUBLIC_SERVICE_ID;
	const templateId = import.meta.env.PUBLIC_TEMPLATE_ID;
	const userId = import.meta.env.PUBLIC_USER_ID;
	const formId = "#contact-form";
	const MAX_ATTEMPTS = 3;
	const RESET_AFTER = 24 * 60 * 60 * 1000; // 24 hours in ms

	const form = document.querySelector(formId) as HTMLFormElement;

	form?.addEventListener("submit", (e) => {
		e.preventDefault();

		// Check rate limit
		const now = Date.now();
		const attempts = JSON.parse(
			localStorage.getItem("emailAttempts") || '{"count": 0, "timestamp": 0}',
		);

		// Reset if 24 hours passed
		if (now - attempts.timestamp > RESET_AFTER) {
			attempts.count = 0;
			attempts.timestamp = now;
		}

		if (attempts.count >= MAX_ATTEMPTS) {
			alert("Too many attempts. Please try again tomorrow.");
			return;
		}

		emailjs
			.sendForm(serviceId, templateId, form, userId)
			.then(() => {
				attempts.count++;
				localStorage.setItem("emailAttempts", JSON.stringify(attempts));
				alert("Message sent");

				form.reset();
			})
			.catch((error: Error) => {
				console.error(error);
				alert("An error occurred, Please try again");
			});
	});
};
