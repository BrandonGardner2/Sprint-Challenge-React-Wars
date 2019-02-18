import React from "react";

import "./CharacterList.css";

import Character from "../Character/Character";

class CharacterList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charList: [],
      currentPage: 1,
      charsPerPage: 3
    };
  }

  componentDidUpdate = () => {
    if (this.state.charList !== this.props.charList) {
      this.hydrateState();
    }
  };

  hydrateState = () => {
    this.setState({
      charList: this.props.charList
    });
  };
  handleClick = e => {
    this.setState({
      currentPage: e.target.id
    });
  };

  render() {
    const { charList, currentPage, charsPerPage } = this.state;

    //What characters do we need to display?
    const indexOfLastChar = currentPage * charsPerPage;
    const indexOfFirstChar = indexOfLastChar - charsPerPage;
    const curChars = charList.slice(indexOfFirstChar, indexOfLastChar);

    //Render correct characters
    const renderChars = curChars.map(character => (
      <Character char={character} key={character.created} />
    ));

    //Display page numbers
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(charList.length / charsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNums = pageNumbers.map(number => {
      return (
        <a key={number} id={number} onClick={this.handleClick}>
          {number}
        </a>
      );
    });
    return (
      <div className="character-list">
        {renderChars}
        <div id="page-numbers">{renderPageNums}</div>
      </div>
    );
  }
}

export default CharacterList;
