import styles from "./Movie.module.css"
import StyledMovie from "./Movie.styled"
import { Link } from "react-router-dom";

function Movie(props) {
    const { movie } = props

    return (
        <StyledMovie>
            <img
                src={'https://media.themoviedb.org/t/p/w440_and_h660_face' + movie.poster_path}
                alt=""
            />
            <Link to={`/movie/${movie.id}`}>
                <h3 className={styles.movie__title}>{movie.title}</h3>
            </Link>
            <p>{props.movie.year}</p>
        </StyledMovie>
    );
}

export default Movie
