import React from "react";
import "./Character.css";

const Character = props => {
  const { char } = props;
  return (
    <div className="character">
      <h2>{char.name}</h2>
      <ul className="character-ul">
        <li>Birth Year: {char.birth_year}</li>
        <li>Eye Color: {char.eye_color}</li>
        <li>Height: {char.height}</li>
      </ul>
    </div>
  );
};

export default Character;
