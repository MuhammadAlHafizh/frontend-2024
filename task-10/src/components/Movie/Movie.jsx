import styles from "./Movie.module.css"
import StyledMovie from "./Movie.styled"
function Movie(props) {
    return (
        <StyledMovie>
            <img
                src={props.movie.poster}
                alt=""
            />
            <h3>{props.movie.title}</h3>
            <p>{props.movie.year}</p>
        </StyledMovie>
    );
}

export default Movie
