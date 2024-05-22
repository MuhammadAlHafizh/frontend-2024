import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import data from "../../utils/constans/data";
import { nanoid } from "nanoid";
import { useState } from "react";

function Movies(props) {
    const {movies, setMovies} = props;

    function handleClick() {
        const movie = {
            id: nanoid,
            title: "Red Notice",
            year: 2021,
            type: "Movie",
            poster: "https://m.media-amazon.com/images/M/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        };
        setMovies([...movies, movie]);
    }
    return (
        <div>
            <div className={styles.container}>
                <section className={styles.movies}>
                    <h2 className={styles.movies__title}>Latest Movies</h2>
                    <div className={styles.movie__container}>
                        {movies.map((movie) => {
                            return <Movie key={movie.id} movie={movie} />;
                        })}
                    </div>
                    <button onClick={handleClick}>Add Movie</button>
                </section>
            </div>
        </div>
    );
}
export default Movies;
