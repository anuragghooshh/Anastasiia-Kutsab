import { projects, Bio, aboutProjects } from '../script/seed';

import Anastasiia from '../resources/Anastasiia.jpeg'
import { Footer } from './footer';

import '../style/Home.css';
import AnimatedText from './AnimatedText';
import AnimatedProject from './animatedProject';
import { Contact } from './contact';

const Home = () => {

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
              text={Bio}
            />
        </div>
        <div id="projects" className="section">
            <AnimatedText
              type="title" 
              text="Recent Projects"
            />
            <AnimatedText
              type="body"
              text={aboutProjects}
            />
            <div>
              {projects.map((project,index)=>(
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
