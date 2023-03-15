import { socialLinks } from '../script/seed';
import '../style/Footer.css';

import instagram from "../resources/Instagram.svg";
import behance from "../resources/Behance.svg";
import linkedIn from "../resources/linkedIn.svg";

export const Footer = () => {
  return (
    <footer>
      <p>&#169;{new Date().getFullYear()}, Anastasiia Kutsab.</p>
      <div>
        <a href={socialLinks[0].link} target="_blank" rel="noreferrer">
          <img src={instagram} alt="" />
        </a>
        <a href={socialLinks[1].link} target="_blank" rel="noreferrer">
          <img src={behance} alt="" />
        </a>
        <a href={socialLinks[2].link} target="_blank" rel="noreferrer">
          <img src={linkedIn} alt="" />
        </a>
      </div>
    </footer>
  );
};
