// App.js
import './normalize.css';
import './left.css';
import './right.css';
import './App.css';
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <div className="left">
        <img className="logo" src="logo.png" alt="logo" />
        <div className="about__container">
          <div className="about">
            <h2>Contacts</h2>
            <div className="about__info">
              <div className="c__container">
                <p>C:</p>
                <p>E:</p>
              </div>
              <div className="info__container">
                <p>+7 777 777 77 77</p>
                <p>chornyiav@gmail.com</p>
              </div>
            </div>
          </div>
          <div className='skills-container'>
            <h2>Tech Skills</h2>
            <div className="skills__list">
              <ul>
                <li class="list__item">HTML5</li>
                <li class="list__item">CSS3</li>
                <li class="list__item">GIT</li>
                <li class="list__item">WebPack</li>
                <li class="list__item">JavaScript</li>
                <li class="list__item">React.js</li>
                <li class="list__item">Node.js</li>
              </ul>
            </div>
          </div>
          <div className='soft-skills-container'>
            <h2 id='soft-skills'>Soft Skills</h2>
            <div  className="skills__list">
              <ul>
                <li class="list__item">Scrum</li>
                <li class="list__item">Agile</li>
                <li class="list__item">GTD</li>
                <li class="list__item">Teamwork</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
      <div className='right'>
        <h2 className="profession">Front-End Developer</h2>
        <h1 className="name">Сергій Тетерук</h1>
        <p className='description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
        </p>
        <div className='project__list'>
          <h2 className="projects__title">Projects</h2>
          <li className="projects__list__item"><a href="https://hellenglish.goit.global/">https://hellenglish.goit.global/</a> _ _ _ _ _ _ _ _ _ _ _ _[ HTML5, CSS3 ]</li>
          <li className="projects__list__item"><a href="https://cryptohub.goit.global/">https://cryptohub.goit.global/</a>  _ _ _ _ _ _ _ _ _ _ _ _ [ JavaScript ]</li> 
          <li className="projects__list__item"><a href="https://kidslike.goit.global/">https://kidslike.goit.global/</a>  _ _ _ _ _ _ _ _ _ _ _ _ _ _ [ React.js, Node.js ]</li>
        </div>
        <h1 className="work__name">Work Experience</h1>
        <h2 className="job__name">Front-End Developer<a href='#freelance' id='freelance'>Freelance</a></h2>
        <p className='date__holder' style={{ color: "#A8A8A8" }}>September 2019 - up to now&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Country</p>
        <li className="expirience__list-item">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </li>
        <li className="expirience__list-item">
          <p></p>
        </li>
        <li className="expirience__list-item">
          <p></p>
        </li>
        <li className="expirience__list-item">
          <p></p>
        </li>
        <li className="expirience__list-item">
          <p></p>
        </li>

      </div>
    </div>
  );
}

function About({ category_name = "", descriptions }) {
  return (
    <div className="about">
      {category_name && <h2 className="about__category-name">{category_name}</h2>}
      {descriptions.map((item, index) => (
        typeof item === "string" ? (
          <p key={index} className="about__container-description">
            {item}
          </p>
        ) : (
          <CopyTextComponent key={index} text={item} />
        )
      ))}
    </div>
  );
}

function CopyTextComponent({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof text !== 'string') {
      console.error('Ошибка: текст должен быть строкой.');
      return;
    }
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Ошибка при копировании текста:', err);
      });
  };

  return (
    <div className="copy-container">
      {copied && <div className="copy-message">Текст скопирован!</div>}
      <p onClick={handleCopy} className="copy-text">
        {text}
      </p>
    </div>
  );
}

export default App;
