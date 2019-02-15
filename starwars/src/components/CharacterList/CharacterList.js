import React from "react";

import "./CharacterList.css";

import Character from "../Character/Character";

class CharacterList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="character-list">
        {this.props.charList.map(character => (
          <Character char={character} key={character.created} />
        ))}
      </div>
    );
  }
}

export default CharacterList;
