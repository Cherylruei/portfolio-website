import { RiMedalLine } from 'react-icons/ri';

const Experiences = () => {
  return (
    <section id='experiences' className='container containerExperiences'>
      <h2>What skills I have</h2>
      <h5>My Experiences</h5>
      <div className='part'>
        <div className='frontEndSkills'>
          <h3 className='title'>Front-End</h3>
          <div className='frontend'>
            <article className='skill'>
              <RiMedalLine className='medal' />
              <h4>熟悉 HTML 語法</h4>
            </article>
            <article className='skill'>
              <RiMedalLine className='medal' />
              <h4>熟悉 CSS 排版和 RWD 設計 </h4>
            </article>
            <article className='skill'>
              <RiMedalLine className='medal' />
              <h4>熟悉 JavaScript 技術</h4>
            </article>
            <article className='skill'>
              <RiMedalLine className='medal' />
              <h4>熟悉 React 及相關開發經驗 </h4>
            </article>
            <article className='skill'>
              <RiMedalLine className='medal' />
              <h4>使用 SCSS 預處理器加速開發</h4>
            </article>
            <article className='skill'>
              <RiMedalLine className='medal' />
              <h4>後端協作經驗串接 API </h4>
            </article>
            <article className='skill'>
              <RiMedalLine className='medal' />
              <h4>使用第三方 API 串接的經驗</h4>
            </article>
          </div>
        </div>
        <div>
          <div className='backendSkills'>
            <h3 className='title'>Back-End</h3>
            <div className='backend'>
              <article className='skill'>
                <RiMedalLine className='medal' />
                <h4>Node.js / Express 開發經驗 </h4>
              </article>
              <article className='skill'>
                <RiMedalLine className='medal' />
                <h4>MongoDB 使用經驗</h4>
              </article>
              <article className='skill'>
                <RiMedalLine className='medal' />
                <h4>MySQL 基礎概念</h4>
              </article>
            </div>
          </div>
          <div className='otherSkills'>
            <h3 className='title'>Others</h3>
            <div className='others'>
              <article className='skill'>
                <RiMedalLine className='medal' />
                <h4>Git 版本控制</h4>
              </article>
              <article className='skill'>
                <RiMedalLine className='medal' />
                <h4>Git 協作經驗</h4>
              </article>
              <article className='skill'>
                <RiMedalLine className='medal' />
                <h4>敏捷開發經驗</h4>
              </article>
              <article className='skill'>
                <RiMedalLine className='medal' />
                <h4>Notion 專案開發經驗</h4>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
