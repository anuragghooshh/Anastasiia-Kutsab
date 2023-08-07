import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { Footer } from './footer';
import { Contact } from './contact';
import AnimatedText from './AnimatedText';
import AnimatedProject from './animatedProject';

import Anastasiia from '../resources/Anastasiia.jpeg'

import data from '../data/data.json';

import '../style/Home.scss';

interface projects{
  projectTitle:string,
  projectLink:string,
  projectThumb:string,
}

const Home = () => {

  const location = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0);
  },[location]);

  return (
    <div className='container' id='home'>
        <div id="me" className='section'>
            <img src={Anastasiia} alt="Anastasiia Kutsab" />
            <AnimatedText
              type="title" 
              text="I'm Anastasiia, and I am an UI/UX designer"
            />
            <AnimatedText
              type="body" 
              text={data.bio}
            />
        </div>
        <div id="projects" className="section">
            <AnimatedText
              type="title" 
              text="Recent Projects"
            />
            <AnimatedText
              type="body"
              text={data.aboutProjects}
            />
            <div>
              {data.projects.map((project:projects,index)=>(
                <a className="item" href={project.projectLink} title='Opens in a new tab!' target='_blank' rel='noreferrer' key={index}>
                  <div><AnimatedProject image={project.projectThumb}/></div>
                  <h3>{project.projectTitle}</h3>
                </a>
              ))}
            </div>
        </div>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home;
