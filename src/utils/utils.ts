import emailjs from '@emailjs/browser';

export const handleFormSubmit = () => {
  const serviceId = import.meta.env.PUBLIC_SERVICE_ID;
  const templateId = import.meta.env.PUBLIC_TEMPLATE_ID;
  const userId = import.meta.env.PUBLIC_USER_ID;
  const formId = '#contact-form';

  console.log(serviceId, templateId, userId);

  const form = document.querySelector(formId) as HTMLFormElement;

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log('aaa');

    emailjs
      .sendForm(serviceId, templateId, form, userId)
      .then(() => {
        alert('Message sent');
      })
      .catch((error: Error) => {
        console.error(error);
        alert('An error occurred, Please try again');
      });
  });
};
