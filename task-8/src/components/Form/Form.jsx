import styles from "./Form.module.css";
import React, { useState } from 'react';
import data from "../../utils/constans/data";
import { nanoid } from "nanoid";

function Form(props) {
    const { movies, setMovies } = props;
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [isTitleError, setisTitleError] = useState(false);
    const [isDateError, setisDateError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        validate() && addMovie();
    };

    function addMovie() {
        const movie = {
            id: nanoid(),
            title: title,
            year: year,
            type: "Movie",
            poster: "https://picsum.photos/300/400",
        };
        setMovies([...movies, movie]);
        setTitle('');
        setYear('');
    }

    function validate() {
        if (title == "" && year == "") {
            setisDateError(false);
            setisTitleError(false);
            alert('Title Harus Di Isi dan Tahun Harus Di Isi');
            return false;
        } else {
            if (title == "") {
                setisTitleError(true);
                alert('Title Harus Di Isi');
                return false;
            } else if (year == "") {
                setisDateError(true);
                setisTitleError(false);
                alert('Tahun Harus Di Isi');
                return false;
            }
            else {
                setisTitleError(false);
                setisDateError(false);
                alert('Berhasil Di Input');
                return true;
            }
        }

    }

    function handleTitle(e) {
        setTitle(e.target.value);
    }

    function handleYear(e) {
        setYear(e.target.value);
    }

    return (
        <div className={styles.container}>
            <section className={styles.sec_form}>
                <div className={styles.form__right}>
                    {<img
                        className={styles.form__image}
                        src="https://picsum.photos/536/354"
                        alt="placeholder"
                    />}
                </div>
                <div className={styles.form__left}>
                    <h2 className={styles.form__title}>Add Movie</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.form__genre}>
                            <div className={styles.form}>
                                <label>Title:
                                    <input
                                        value={title}
                                        onChange={handleTitle}
                                        name="title"
                                    />
                                </label>
                                <label>Year:
                                    <input
                                        value={year}
                                        onChange={handleYear}
                                        name="year"
                                    />
                                </label>
                            </div>
                            <button className={styles.form__button} type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Form;
