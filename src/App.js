import React from "react";
import photo from './img/photo.jpeg'
import cls from './App.module.css'

function App() {
  return (
    <>
    <div className={cls.context} >
    <img src={photo} alt={'Something'} className={cls.image} ></img>
     <span className={cls.text} ><h2>Hi, I’m Alyona —  beginner frontend web-developer.</h2>
     <p>I value accountability, persistence and honesty above all else. These postulates are my approach to solving life's problems in general. I like writing code and seeing the result. I improve my knowledge daily, keep it up to date and aspire to become a part of the large universe of developers.</p></span>
     </div>
    </>
  );
}

export default App;
