import React from "react";

import Movie from "./Movie";

class CharacterMovies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    this.props.movies.forEach(movieURL => {
      this.getMovie(movieURL);
    });
  }

  getMovie = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ movies: [...this.state.movies, data] });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <ul className="character-movies">
        {this.state.movies.map(movie => (
          <Movie movie={movie} key={movie.created} />
        ))}
      </ul>
    );
  }
}

export default CharacterMovies;
