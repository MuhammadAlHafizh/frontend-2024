import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Button from "../ui/Button";

const StyledDetailMovie = styled.div`
// Mobile Screen
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
text-align: center;
margin: 2rem;

img {
border-radius: 25px;
max-width: 100%;
height: auto;
}

h2 {
    font-size: 2.44rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.black};
}

h3 {
    font-size: 1.59rem;
margin-bottom: 0.5rem;
color: ${({theme }) => theme.colors.black};
}

P {
    text-align: justify;
    margin-bottom: 2rem;
color: #64748b;
}

@media screen and (min-width: 768px){
    flex-direction: row;
    text-align: left;

    .poster {
        flex-basis: 30%;
    }

    .info {
        flex-basis: 60%;
    }
}
    @media screen and (min-width: 992px){}
`;

function DetailMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function getDetailMovie() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error.message);
      }
    }

    if (API_KEY) {
      getDetailMovie();
    }
  }, [id, API_KEY]);

  const genres = movie.genres && movie.genres.map((genre) => genre.name).join(", ");
  const trailer = movie.videos && movie.videos.results[0]?.key;

  return (
    <StyledDetailMovie>
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="info">
        <h2>{movie.title}</h2>
        <h3>{genres}</h3>
        <p>{movie.overview}</p>
        {trailer && (
          <Button
            as="a"
            href={`https://www.youtube.com/watch?v=${trailer}`}
            target="_blank"
            variant="secondary"
            size="lg"
          >
            Watch Trailer
          </Button>
        )}
      </div>
    </StyledDetailMovie>
  );
}

export default DetailMovie;
