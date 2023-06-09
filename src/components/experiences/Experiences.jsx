import { RiMedalLine } from 'react-icons/ri';

const Experiences = () => {
  return (
    <section id='experiences' className='container containerExperiences'>
      <h2>What skills I have</h2>
      <h5>My Experiences</h5>
      <div className='part'>
        <div>
          <h3 className='title'>Front-End</h3>
          <div className='frontendSkills'>
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
              <h4>Axios 串接後端API</h4>
            </article>
          </div>
        </div>
        <div className='otherSkills'>
          <h3 className='title'>Back-End</h3>
          <div className='backend'>
            <article className='skill'>
              <RiMedalLine />
              <h4>Node.js / Express</h4>
            </article>
            <article className='skill'>
              <RiMedalLine />
              <h4>MongoDB 使用經驗</h4>
            </article>
            <article className='skill'>
              <RiMedalLine />
              <h4>MySQL 基礎概念</h4>
            </article>
          </div>
          <h3 className='title'>Others</h3>
          <div className='others'>
            <article className='skill'>
              <RiMedalLine />
              <h4>Git 版本控制</h4>
            </article>
            <article className='skill'>
              <RiMedalLine />
              <h4>Git 協作經驗</h4>
            </article>
            <article className='skill'>
              <RiMedalLine />
              <h4>敏捷開發經驗</h4>
            </article>
            <article className='skill'>
              <RiMedalLine />
              <h4>Notion 專案開發經驗</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
