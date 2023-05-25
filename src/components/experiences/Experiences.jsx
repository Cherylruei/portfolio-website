import { RiMedalLine } from 'react-icons/ri';

const Experiences = () => {
  return (
    <section id='experiences' className='container containerExperiences'>
      <h2>What skills I have</h2>
      <h5>My Experiences</h5>
      <div className='skills'>
        <article className='skill'>
          <RiMedalLine />
          <h4>HTML</h4>
        </article>
        <article className='skill'>
          <RiMedalLine />
          <h4>CSS</h4>
        </article>
        <article className='skill'>
          <RiMedalLine />
          <h4>JavaScript</h4>
        </article>
        <article className='skill'>
          <RiMedalLine />
          <h4>Bootstrap</h4>
        </article>
        <article className='skill'>
          <RiMedalLine />
          <h4>React</h4>
        </article>
        <article className='skill'>
          <RiMedalLine />
          <h4>SCSS</h4>
        </article>
        <article className='skill'>
          <RiMedalLine />
          <h4>Node.js</h4>
        </article>
      </div>
    </section>
  );
};

export default Experiences;
