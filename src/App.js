import React from "react";
import photo from './img/photo.jpeg'
import cls from './App.module.css'

function App() {
  return (
    <>
    <img src={photo} alt={'Something'} className={cls.image} id={cls.image} align="left"></img>
     <span className={cls.text}><h2>Hi, I’m Alyona —  beginner frontend web-developer.</h2>
     <p>I value responsibility, patience and honesty above all else. These postulates are my approach to solving life's problems in general. I like writing code and seeing the result. Every day I improve my knowledge, engage in self-education and want to become part of a large universe of developers.</p></span>
    </>
  );
}

export default App;