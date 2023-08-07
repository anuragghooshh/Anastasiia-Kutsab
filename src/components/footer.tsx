import data from '../data/data.json';

import '../style/Footer.scss';

interface socialLinks{
  name:string,
  link:string
}

export const Footer = () => {
  return (
    <footer>
      <p>&#169;{new Date().getFullYear()}, Anastasiia Kutsab.</p>
      <div>     
        {data.socialLinks.map((socialLink:socialLinks,index)=>(
            <a href={socialLink.link} target="_blank" rel="noreferrer" key={index}>
              {socialLink.name}
            </a>
        ))}
      </div>
    </footer>
  );
};
