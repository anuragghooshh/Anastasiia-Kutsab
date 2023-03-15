import '../style/Contact.css';

import { socialLinks, aboutContact, email } from '../script/seed';
import AnimatedText from './AnimatedText';

export const Contact = () => {
  return (
    <div id="contact" className="section">
      <div>
        <p>Let's connect today</p>
        <a href={`mailto:${email}`} target="_blank" className="socialLink">
          {email}
        </a>
      </div>
      <AnimatedText
        type="body"
        text={aboutContact}
      />
      <div>
        {socialLinks.map((socialLink, index) => (
          <a
            href={socialLink.link}
            target="_blank"
            className="socialLink"
            title="Opens in a new tab!"
            key={index}
          >
            {socialLink.name}
          </a>
        ))}
      </div>
    </div>
  );
};
