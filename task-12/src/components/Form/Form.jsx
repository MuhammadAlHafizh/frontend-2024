import { useState } from "react";
import styles from "./Form.module.css"
import { nanoid } from "nanoid";
import Alert from '../Alert/Alert'
import Select from "../Select/Select";
function Form(props){
    const {movies,setMovies} = props

    const [errors, setErrors] = useState({
        title: false,
        year: false,
        type: false,
        poster: false,
    });

    const [formData,setFormData] = useState({
        title: "",
        year: "",
        type: "",
        poster: "",
    })

    function handleChange(e){
        const { name,value } = e.target

        setFormData({
            ...formData,
            [name] : value,
        })

        setErrors({
            ...errors,
            [name]: false,
        });
    }

    function validate(){
        const newErrors = {};

        if (formData.title === "") {
            newErrors.title = true;
        }

        if (formData.year === "") {
            newErrors.year = true;
        }

        if (formData.type === "") {
            newErrors.type = true;
        }

        if (formData.poster === "") {
            newErrors.poster = true;
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    const {title,year,type,poster} = formData

    function addMovie(){
        const movie = { id : nanoid(),
            title:title,
            year:year,
            type:type,
            poster:poster,
        }

        setMovies([...movies, movie])
        setFormData({
            title: "",
            year: "",
            type: "",
            poster: "",
        })
        alert("success Add Data")
    }

    const MovieTypeList = [
        {label:"Movie",value:"Movie"},
        {label:"Action",value:"Action"},
        {label:"Drama",value:"Drama"},
        {label:"Horror",value:"Horror"},
        {label:"Comedy",value:"Comedy"},
    ]

    function handleSubmit(e) {
        e.preventDefault();

        validate() && addMovie();
    }


    return (
        <div className={styles.container}>
            <section>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.hero__left}>
                        <img
                            src="https://picsum.photos/536/354"
                            className={styles.form__image}
                        />
                    </div>
                    <div className={styles.hero__right}>
                        <div className={styles.form__title_bg}>
                            <h1 className={styles.form__title} >Tambah Movie</h1>
                        </div>
                        <div className={styles.form__group}>
                            <h2 className={styles.form__label}>Judul</h2>
                            <input
                                id="title"
                                type="text"
                                className={styles.input_text}
                                onChange={handleChange}
                                value={title}
                                name="title"
                            />
                            {errors.title && <Alert>*Judul Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <h2 className={styles.form__label}>Year</h2>
                            <input
                                id="year"
                                type="text"
                                className={styles.input_text}
                                onChange={handleChange}
                                value={year}
                                name="year"
                            />
                            {errors.year && <Alert>*Year Wajib diisi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <h2 className={styles.form__label}>Tipe Movie</h2>
                            <Select onChange={handleChange} defaultValue={type} options={MovieTypeList} placeholder={`Select Type`} name="type" />
                            {errors.type && <Alert>*Type Movie Wajib diisi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <h2 className={styles.form__label}>Link Gambar</h2>
                            <input
                                id="poster"
                                type="text"
                                className={styles.input_text}
                                onChange={handleChange}
                                name="poster"
                            />
                            {errors.poster && <Alert>*Poster Wajib diisi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <button
                                className={styles.btn__primary}
                                type="submit"
                            > Simpan Movie </button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Form
