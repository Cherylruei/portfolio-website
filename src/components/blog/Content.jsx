import { useEffect, useRef, useState } from 'react';
import Data from './Data';
import Popup from './Popup';

const Content = () => {
  return (
    <>
      <Article01 />
      <Article02 />
      <Article03 />
    </>
  );
};

export default Content;

function CardModel({ title, text, popupWindow, mainImage, onPopupClick }) {
  useEffect(() => {
    const html = document.querySelector('html');
    html.style.overflow = popupWindow ? 'hidden' : 'scroll';
  }, [popupWindow]);

  return (
    <div className='article'>
      <img src={mainImage} alt='' />
      <div className='cardBody'>
        <h4 className='cardTitle'>{title}</h4>
        <p className='cardText'>{text}</p>
        <button className='btn btnArticle' onClick={onPopupClick}>
          Read more
        </button>
      </div>
    </div>
  );
}

function Article01() {
  const [popupWindow, setPopupWindow] = useState(false);
  const popupRef = useRef();
  const title = Data[0].title;
  const text = Data[0].content;
  const mainImage01 = Data[0].mainImage;
  const debounce01_1 = Data[0].otherImages[0];
  const debounce02 = Data[0].otherImages[1];
  const debounce03 = Data[0].otherImages[2];
  const debounce04 = Data[0].otherImages[3];
  const code01 = Data[0].otherImages[4];
  const code02 = Data[0].otherImages[5];
  const code03 = Data[0].otherImages[6];
  const code04 = Data[0].otherImages[7];
  const paragraph01 = text[0].split('.');
  const paragraph03 = text[3].split('.');
  const paragraph04 = text[4].split('.');
  const paragraph07 = text[7].split('.');
  const paragraph10 = text[10].split('.');
  const paragraph11 = text[11].split('.');
  const paragraph12 = text[12].split(',');
  const onPopupClick = () => {
    setPopupWindow(!popupWindow);
  };

  return (
    <>
      <CardModel
        title={title}
        text={text}
        popupWindow={popupWindow}
        setPopupWindow={setPopupWindow}
        mainImage={mainImage01}
        onPopupClick={onPopupClick}
      />
      <Popup
        popupWindow={popupWindow}
        setPopupWindow={setPopupWindow}
        onPopupClick={onPopupClick}
      >
        <h3 className='articleTitle'>{title}</h3>
        <br />
        <p className='articleText'>
          {paragraph01.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
          {text[1]}{' '}
          <a
            href='https://codepen.io/cherylruei/pen/jOeQqBy?editors=1011'
            className='aLink'
          >
            這裡
          </a>
        </p>
        <div className='img'>
          <img src={code01} alt='codeExample' />
        </div>
        <div> {text[2]}</div>
        <p className='articleText'>
          {paragraph03.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </p>
        <p className='articleText'>
          {paragraph04.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </p>
        <p className='articleText'> {text[5]}</p>
        <div className='img'>
          <img src={debounce01_1} alt='codeExample' />
        </div>
        <div> {text[6]}</div>
        <p className='articleText'>
          {paragraph07.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </p>
        <div className='img'>
          <img src={code02} alt='codeExample' />
        </div>
        <div className='articleText'> {text[8]}</div>
        <div className='img'>
          <img src={debounce02} alt='codeExample' />
        </div>
        <div className='img'>
          <img src={code03} alt='codeExample' />
        </div>
        <div className='articleText'> {text[9]}</div>
        <div className='img'>
          <img src={debounce03} alt='codeExample' />
        </div>
        <div className='img'>
          <img src={code04} alt='codeExample' />
        </div>
        <p className='articleText'>
          {paragraph10.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </p>
        <div className='img'>
          <img src={debounce04} alt='codeExample' />
        </div>
        <p className='articleText'>
          {paragraph11.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </p>
        <p className='articleText'>
          {paragraph12.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </p>
        <div className='articleText'>
          {text[13]} {'=> '}
          <a href='https://replit.com/@cherylrueichun/CloudyLightgrayCoderesource#index.js'>
            Replit 連結
          </a>
        </div>
        <div className='articleText'>
          <b>{text[14]}</b>
        </div>
        <div className='articleText'>
          <a href='https://www.youtube.com/watch?v=cjIswDCKgu0'>{text[15]}</a>
        </div>
        <div className='articleText'>
          <a href='https://www.youtube.com/watch?v=yBFHwJgqLD4'>{text[16]}</a>
        </div>
        <div className='articleText'>
          <a href='https://www.explainthis.io/zh-hant/interview-guides/javascript-whiteboard/debounce'>
            {text[17]}
          </a>
        </div>
      </Popup>
    </>
  );
}

function Article02() {
  const [popupWindow, setPopupWindow] = useState(false);
  const title = Data[1].title;
  const text = Data[1].content;
  const mainImage02 = Data[1].mainImage;
  const groupby01 = Data[1].otherImages[0];
  const groupby02 = Data[1].otherImages[1];
  const groupby03 = Data[1].otherImages[2];
  const groupby04 = Data[1].otherImages[3];
  const groupby05 = Data[1].otherImages[4];
  const groupby06 = Data[1].otherImages[5];
  const groupby07 = Data[1].otherImages[6];
  const groupby08 = Data[1].otherImages[7];
  const paragraph02 = text[1].split(',');
  const paragraph03 = text[2].split(',');
  const paragraph06 = text[5].split(',');

  const onPopupClick = () => {
    setPopupWindow(!popupWindow);
  };

  return (
    <>
      <CardModel
        title={title}
        text={text}
        popupWindow={popupWindow}
        setPopupWindow={setPopupWindow}
        mainImage={mainImage02}
        onPopupClick={onPopupClick}
      />
      <Popup
        popupWindow={popupWindow}
        setPopupWindow={setPopupWindow}
        onPopupClick={onPopupClick}
      >
        <h3 className='articleTitle'>{title}</h3>
        <br />
        <div className='img'>
          <img src={groupby01} alt='' />
        </div>
        <p className='articleText'>
          <b>{text[0]}</b>
        </p>
        <p className='articleText'>
          {paragraph02.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </p>
        <div className='img'>
          <img src={groupby02} alt='' />
        </div>
        <div className='img'>
          <img src={groupby03} alt='' />
        </div>
        <div className='img'>
          <img src={groupby04} alt='' />
        </div>
        <div className='img'>
          <img src={groupby05} alt='' />
        </div>
        <p className='articleText'>
          {paragraph03.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </p>
        <div className='img'>
          <img src={groupby06} alt='' />
        </div>
        <p className='articleText'>{text[3]}</p>
        <p className='articleText'>{text[4]}</p>
        <div className='img'>
          <img src={groupby07} alt='' />
        </div>
        <p className='articleText'>
          {paragraph06.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </p>
        <div className='img'>
          <img src={groupby08} alt='' />
        </div>
        <h3 className='articleText'>
          <b>{text[6]}</b>
        </h3>
        <p className='articleText'>{text[7]}</p>
        <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment'>
          Logical OR assignment (||=) JavaScript MDN
        </a>
        <p className='articleText'>{text[8]}</p>
      </Popup>
    </>
  );
}

function Article03() {
  const [popupWindow, setPopupWindow] = useState(false);
  const title = Data[2].title;
  const text = Data[2].content;
  const mainImage03 = Data[2].mainImage;
  const fibonacci01 = Data[2].otherImages[0];
  const fibonacci02 = Data[2].otherImages[1];
  const fibonacci03 = Data[2].otherImages[2];
  const fibonacci04 = Data[2].otherImages[3];
  const fibonacci05 = Data[2].otherImages[4];
  const fibonacci06 = Data[2].otherImages[5];
  const fibonacci07 = Data[2].otherImages[6];
  const fibonacci08 = Data[2].otherImages[7];
  const paragraph03 = text[2].split(',');
  const paragraph04 = text[3].split(',');

  const onPopupClick = () => {
    setPopupWindow(!popupWindow);
  };

  return (
    <>
      <CardModel
        title={title}
        text={text}
        popupWindow={popupWindow}
        setPopupWindow={setPopupWindow}
        mainImage={mainImage03}
        onPopupClick={onPopupClick}
      />
      <Popup
        popupWindow={popupWindow}
        setPopupWindow={setPopupWindow}
        onPopupClick={onPopupClick}
      >
        <h3 className='articleTitle'>{title}</h3>
        <br />
        <p className='articleText'>{text[0]}</p>
        <div className='img'>
          <img src={fibonacci01} alt='' />
        </div>
        <p className='articleText'>{text[1]}</p>
        <div className='img'>
          <img src={fibonacci02} alt='' />
        </div>
        <p className='articleText'>
          {paragraph03.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </p>
        <div className='img'>
          <img src={fibonacci03} alt='' />
        </div>
        <div className='img'>
          <img src={fibonacci04} alt='' />
        </div>
        <p className='articleText'>
          {paragraph04.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </p>
        <div className='img'>
          <img src={fibonacci05} alt='' />
        </div>
        <div className='img'>
          <img src={fibonacci06} alt='' />
        </div>
        <p className='articleText'>{text[4]}</p>
        <div className='img'>
          <img src={fibonacci07} alt='' />
        </div>
        <div className='img'>
          <img src={fibonacci08} alt='' />
        </div>
        <p className='articleText'>{text[5]}</p>
        <p className='articleText'>{text[6]}</p>
        <div>
          <a href='https://leetcode.com/problems/generate-fibonacci-sequence/'>
            {text[7]}
          </a>
        </div>
        <div>
          <a href='https://www.youtube.com/watch?v=IJ6EgdiI_wU'>{text[8]}</a>
        </div>
      </Popup>
    </>
  );
}
