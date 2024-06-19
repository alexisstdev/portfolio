/* import { useEffect } from 'preact/hooks';
import emailjs from '@emailjs/browser';
import './Contact.css';
import IGithub from '../../assets/icons/IGithub.astro';
import SectionContainer from '../SectionContainer.astro';
import ILinkedin from '../../assets/icons/ILinkedin.astro';
import IMail from '../../assets/icons/IMail.astro';

const Contact = () => {
  useEffect(() => {
    const serviceId = import.meta.env.PUBLIC_SERVICE_ID;
    const templateId = import.meta.env.PUBLIC_TEMPLATE_ID;
    const userId = import.meta.env.PUBLIC_USER_ID;
    const formId = '#contact-form';

    const form = document.querySelector(formId);

    form?.addEventListener('submit', (e) => {
      e.preventDefault();

      emailjs
        .sendForm(serviceId, templateId, form, userId)
        .then(() => {
          alert('Message sent');
        })
        .catch((error) => {
          console.error(error);
          alert('An error occurred, Please try again');
        });
    });
  }, []);

  return (
    <SectionContainer id='contact' title='Contact me'>
      <div class='section'>
        <div class='info'>
          <p class='text'>
            Feel free to contact me any time. I will get back to you as soon as I can!
          </p>
          <div class='info-info'>
            <h3>Email</h3>
            <p>alexissanmiguel03@gmail.com</p>
            <h3>Phone</h3>
            <p>+52 867 255 3978</p>
          </div>
          <nav class='social-links'>
            <a
              href='https://github.com/alexisstdev'
              target='_blank'
              aria-label='Alexis GitHub Profile'
            >
              <IGithub />
            </a>
            <a
              href='https://www.linkedin.com/in/alexisstdev/'
              target='_blank'
              aria-label='Alexis LinkedIn Profile'
            >
              <ILinkedin />
            </a>
            <a href='mailto:alexissanmiguel03@gmail.com' aria-label='Email Alexis'>
              <IMail />
            </a>
          </nav>
        </div>
        <form class='form' id='contact-form'>
          <div class='form-group'>
            <input type='text' name='user_name' placeholder='Name' required />
            <input type='email' name='user_email' placeholder='Email' required />
          </div>
          <textarea name='message' placeholder='Message' required></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </SectionContainer>
  );
};

export default Contact;
 */
