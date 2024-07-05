import styles from "./Movies.module.css"
import Movie from "../Movie/Movie";
import data from "../../utils/constants/data"
import { useState } from "react";
import { nanoid } from "nanoid";


function Movies(props) {
    const {movies,setMovies,title = `Latest Movies`} = props
    
    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}> {title} </h2>
                <div className={styles.movie__container}>
                    {movies.map((movie) => {
                        return <Movie movie={movie} key={movie.id} />
                    })}
                    
                </div>
            </section>
        </div>
    );
}

export default Movies