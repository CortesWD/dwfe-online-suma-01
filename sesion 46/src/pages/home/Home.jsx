/**
 * Dependencies
 */
import React from "react";

/**
 * Others
 */
import studyIcon from './../../assets/study.svg';

function Home() {
  return (
    <div className="flex-centered">
      <img src={studyIcon} height="180px" alt="study" />
      <h1>Visita nuestra página de cursos para saber más.</h1>
    </div>
  );
}

export default Home;