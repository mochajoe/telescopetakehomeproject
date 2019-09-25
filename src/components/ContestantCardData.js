import React from "react";

const ContestantCardData = ({ contestant }) => (
  <div key={contestant.id} className="contestant-information">
    <div className="contestant-content">
      <img src={contestant.image} alt={contestant.name} />
      <h2> {contestant.name} </h2>
      <p>{contestant.bio}</p>
      <a href={contestant.link}>{contestant.link_text}</a>
    </div>
  </div>
);

export default ContestantCardData;
