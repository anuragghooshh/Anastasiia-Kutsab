import AnimatedText from './AnimatedText';
import AnimatedLink from './animatedLink';

import data from '../data/data.json'

import '../style/Contact.scss';

interface socialLinks{
  name:string,
  link:string
}

export const Contact = () => {
  return (
    <div id="contact" className="section">
      <div>
        <p className='text'>Let's connect today</p>
        <AnimatedLink
          title="Prompts to send a mail!"
          link={`mailto:${data.email}`}
          text={data.email}
        />
      </div>
      <AnimatedText
        type="body"
        text={data.aboutContact}
      />
      <div>
        {data.socialLinks.map((socialLink:socialLinks, index) => (
          <AnimatedLink
            link={socialLink.link}
            text={socialLink.name}
            title='Opens in a new tab!'
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
