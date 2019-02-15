import React from "react";
import "./Character.css";

const Character = props => {
  console.log(props);
  return (
    <div className="character">
      <h2>{props.char.name}</h2>
      <ul className="character-ul">
        <li>Birth Year: {props.char.birth_year}</li>
        <li>Eye Color: {props.char.eye_color}</li>
        <li>Height: {props.char.height}</li>
      </ul>
    </div>
  );
};

export default Character;
