import React from "react";
import pdf from "./pdf/Resume_frontend.pdf";
import cls from "./Resume.module.css";
const Resume = () => {
  return (
    <>
      <div className={cls.contex}>
        <embed src={pdf} type="application/pdf" className={cls.resume} height={'1000px'} width={'900px'}/>
      </div>
    </>
  );
};

export default Resume;
