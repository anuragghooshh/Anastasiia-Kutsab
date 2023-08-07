import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { Footer } from './footer';
import AnimatedText from './AnimatedText';
import { Contact } from './contact';

import AnastasiiaTall from '../resources/AnastasiiaTall.jpeg';

import data from '../data/data.json'

import '../style/About.scss';

interface experience{
  role:string,
  duration:string,
  companyName:string,
  brief:string,
}

const About = () => {
  const location = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0);
  },[location]);

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
            text={data.aboutMe}
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
            text={data.aboutExperience}
            type="body"
          />
        </div>
        <div className="experiences">
          {
            data.experience.map((exp:experience,index)=>(
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
