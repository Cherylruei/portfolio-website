import CTA from './CTA';
import profilepic2 from '../../assets/profilepic2.png';

const About = () => {
  return (
    <section id='about' className='container containerAbout'>
      <div className='intro'>
        {/* eslint-disable-next-line  */}
        <h5>Hello I'm</h5>
        <h1>Ruei Chun Li</h1>
        <h5>Front-End Engineer</h5>
        <CTA />
      </div>
      <div className='picture'>
        <img src={profilepic2} alt='profilePicture' className='aboutMeImg' />
      </div>
    </section>
  );
};

export default About;
