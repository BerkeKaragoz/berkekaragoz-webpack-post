import React from "react";
import sampleImg from "./sample.jpg";
import style from "./App.module.scss";
import "./index.css";

export const App: React.FC = () => {
  return (
    <div>
      <h1>React App</h1>
      <img src={"/sample.jpg"} alt="sample" className={style.image} />
      <img src={sampleImg} alt="sample" className={style.image} />
    </div>
  );
};

export default App;
