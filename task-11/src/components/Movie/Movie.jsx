import styles from "./Movie.module.css"
import StyledMovie from "./Movie.styled"
function Movie(props) {
    const { movie } = props

    return (
        <StyledMovie>
            <img
                src={'https://media.themoviedb.org/t/p/w440_and_h660_face' + movie.poster_path}
                alt=""
            />
            <h3>{props.movie.title}</h3>
            <p>{props.movie.year}</p>
        </StyledMovie>
    );
}

export default Movie
