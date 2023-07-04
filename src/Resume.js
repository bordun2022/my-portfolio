import React from "react";
import pdf from "./pdf/Bordun_Resume_frontend.pdf";
import cls from "./Resume.module.css";
const Resume = () => {
  return (
    <>
      <div>
        <embed src={pdf} type="application/pdf" className={cls.resume} height="200%" width="200%"/>
      </div>
    </>
  );
};

export default Resume;
