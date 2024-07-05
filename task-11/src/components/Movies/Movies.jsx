import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import { useEffect } from "react";
import axios from "axios";

function Movies(props) {
    const { movies, setMovies, title = "Latest Movies" } = props;

    useEffect(() => {
        async function fetchPopularMovies() {
            try {
                const API_KEY = import.meta.env.VITE_API_KEY;
                const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
                const response = await axios.get(URL);
                console.log(response);
                setMovies(response.data.results);
            } catch (error) {
                console.error("Error fetching popular movies:", error);
            }
        }
        fetchPopularMovies();
    }, [setMovies]);

    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>{title}</h2>
                <div className={styles.movie__container}>
                    {movies.map((movie) => {
                        return <Movie movie={movie} key={movie.id} />;
                    })}
                </div>
            </section>
        </div>
    );
}

export default Movies;
