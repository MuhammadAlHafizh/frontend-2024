import { useEffect, useState } from "react";
import Button from "../ui/Button";
import HeroStyled from "./Hero.styled";

const Hero = () => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const responses = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");
                const data = await responses.json();
                setMovie(data);
            } catch (error) {
                const data = {
                    Title: "Title",
                    Genre: "Genre",
                    Plot: "Plot",
                    Poster: "https://picsum.photos/536/354"
                };
                setMovie(data);
                alert(error.message);
                console.log(error);
            }
        }
        fetchMovie();
    }, []);

    return (
        <HeroStyled>
            <section>
                <div className="hero__left">
                    <h2>{movie.Title}</h2>
                    <h3>Genre: {movie.Genre}</h3>
                    <p>{movie.Plot}</p>
                    <Button variant="secondary" size="lg">Watch</Button>
                </div>
                <div className="hero__right">
                    <img src={movie.Poster} alt={movie.Title}></img>
                </div>
            </section>
        </HeroStyled>
    );
}

export default Hero;
