import React from "react";
import cls from "./Project.module.css";
import foodApp from "./img/foodApp.png";
import post from "./img/poster.png";
import auth from "./img/auth.png";
import concepts from "./img/concepts.png";

const Projects = () => {
  return (
    <>
      <div className={cls.container}>
        <div>
          <a href={'https://bordun2022.github.io/food-app/'}><img src={foodApp} alt={"Food App"} className={cls.images}></img></a>
          <h3>The Food Order App</h3>
          <h4 className={cls.text}>
            This application was created to learn how to work with forms, state
            management, validation logic, works with context and reducers, learn
            how to store data on a remote server, in this case FireBase, and
            fetch such data from the server.
          </h4>
          </div>
        <div>
          <a href={'https://bordun2022.github.io/poster-app/'}><img src={post} alt={"React Poster"} className={cls.images}></img></a>
          <h3>React Poster</h3>
          <h4 className={cls.text}>
            This project is aimed at learning the basics of React, working with
            states, outputting and removing data, lifting states, handling
            forms, updating states on previous states.
          </h4>
        </div>
        <div>
          <a href={'https://bordun2022.github.io/authentication-app/#/'}><img src={auth} alt={"Authentication"} className={cls.images}></img></a>
          <h3>Authentication App</h3>
          <h4 className={cls.text}>
            The basis of this project was the mastering of Authentication Logic,
            working with query parameters, users login and logic of logout,
            attaching tokens, store data on the backend.
          </h4>
        </div>
        <div>
          <a href={'https://bordun2022.github.io/key-concepts/#/'}><img
            src={concepts}
            alt={"React Concepts"}
            className={cls.images}
          ></img></a>
          <h3>React Concepts</h3>
          <h4 className={cls.text}>
            The idea of this project was to learn how to work with React Router,
            build Multiple Pages in Single-Page Application, defining routes,
            navigating, works with layout, using dynamic routes.
          </h4>
        </div>
      </div>
    </>
  );
};

export default Projects;
