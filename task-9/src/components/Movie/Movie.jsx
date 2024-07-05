import styles from "./Movie.module.css"
function Movie(props) {
    return (
        <div className={styles.movie}>
            <img
                className={styles.movie__image}
                src={props.movie.poster}
                alt=""
            />
            <h4 className={styles.movie__title}>{props.movie.title}</h4>
            <p className={styles.movie__date}>{props.movie.year}</p>
        </div>
    );
}

export default Movie
