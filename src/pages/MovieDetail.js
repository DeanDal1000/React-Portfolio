import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MovieState } from '../movieState';
import {
  Details,
  Headline,
  ImageDisplay,
  Information,
  SummaryStyle,
} from '../styles/Movie.element';

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  const Summary = ({ title, description }) => {
    return (
      <SummaryStyle>
        <h3>{title}</h3>
        <div className="line"></div>
        <p>{description}</p>
      </SummaryStyle>
    );
  };

  return (
    <>
      {movie && (
        <Details>
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </Headline>
          <Information>
            {movie.awards.map((award) => (
              <Summary
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
            ;
          </Information>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

export default MovieDetail;
