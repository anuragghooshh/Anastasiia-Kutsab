import AnastasiiaTall from '../resources/AnastasiiaTall.jpeg';

import { Footer } from './footer';
import AnimatedText from './AnimatedText';
import { experience, aboutMe } from '../script/seed';
import { Contact } from './contact';


import '../style/About.css';

const About = () => {
  return (
    <div className='container' id='about'>
      <div className="section" id='me'>
        <img src={AnastasiiaTall} alt="" />
        <div>
          <AnimatedText
            text={`I'm Anastasiia Kutsab, a designer based in Ukraine.`}
            type="title"
          />
          <AnimatedText
            text={aboutMe}
            type="body"
          />
        </div>
      </div>
      <div className="section" id="experience">
        <div>
          <AnimatedText
            text="Experience"
            type="title"
          />
          <AnimatedText
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            type="body"
          />
        </div>
        <div className="experiences">
          {
            experience.map((exp,index)=>(
              <div className="exp" key={index}>
                <div>
                  <p>{exp.companyName}</p>
                  <p>{exp.duration}</p>
                </div>
                <h3>{exp.role}</h3>
                <p>{exp.brief}</p>
              </div>
            ))
          }
        </div>
      </div>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default About;
