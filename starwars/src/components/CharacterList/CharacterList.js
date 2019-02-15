import React from "react";

import "./CharacterList.css";

import Character from "../Character/Character";

const CharacterList = props => {
  return (
    <div className="character-list">
      {props.charList.map(character => (
        <Character char={character} />
      ))}
    </div>
  );
};

export default CharacterList;
