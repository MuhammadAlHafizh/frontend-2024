import { useState } from "react";
import styles from "./FormCovid.module.css";
import imageForm from "../../assets/image/image_form_covid.png"

function FormCovid(props) {
    const { objProvinsi, setProvinsi } = props;

    const [city, setValuesCity]     = useState("");
    const [status, setValuesStatus] = useState("");
    const [total, setValuesTotal]   = useState("");

    function changeCityInput(e) {
        setValuesCity(e.target.value);
    }

    function changeStatusInput(e) {
        setValuesStatus(e.target.value);
    }

    const changeTotalInput = (e) => {
        setValuesTotal(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();

        if (city === "") {
            alert('Kota Harus Di Isi');
            return false;
        }else if (status === "") {
            alert('Status Harus Di Isi');
            return false;
        }else if (total === "") {
            alert('Jumlah Harus Di Isi');
            return false;
        }else {
            const index = objProvinsi.findIndex((data) => data.kota === city);
            const searchCity = objProvinsi.find((data) => data.kota === city);
            let objData = [...objProvinsi];

            if (status === "dirawat" || status === "kasus") {
                const newCase = parseInt(searchCity["kasus"]) + parseInt(total);
                objData[index] = { ...searchCity, kasus: newCase };

                if (status === "dirawat") {
                    const newDirawat = parseInt(searchCity["dirawat"]) + parseInt(total);
                    objData[index] = { ...objData[index], dirawat: newDirawat };
                }
            }else{
                if (status === "meninggal" || status === "sembuh") {
                    if (parseInt(searchCity["dirawat"]) < parseInt(total)) {
                        alert('Jumlah '+status+' harus lebih kecil dari jumlah pasien yang dirawat')
                        return false;
                    }
                }

                objData[index] = { ...searchCity, [status]: parseInt(searchCity[status]) + parseInt(total) };

                if (status === "meninggal" || status === "sembuh") {
                    const newDirawat = parseInt(searchCity["dirawat"]) - parseInt(total);
                    const newCase = parseInt(searchCity["kasus"]) - parseInt(total);
                    objData[index] = { ...objData[index], dirawat: newDirawat, kasus: newCase };
                }
            }

            alert('Succes Simpan Data');
            setProvinsi(objData);
        }


        //reset values
        setValuesCity("");
        setValuesStatus("");
        setValuesTotal("");
    };

    return (
        <div className={styles.formcovid__container}>
            <section className={styles.formcvoid}>
                <div className={styles.formcovid__left}>
                    <img
                        className={styles.formcovid__image}
                        src={imageForm} alt="Form Image"
                    />
                </div>
                <div className={styles.formcovid__right}>
                    <h2 className={styles.formcovid__title}>
                        Form Covid
                    </h2>
                    <form onSubmit={onSubmitForm}>
                        <div className={styles.formcovid__group}>
                            <label className={styles.formcovid__label}>
                                Provinsi
                            </label>
                            <select className={styles.formcovid__select}
                                id="city"
                                value={city}
                                onChange={changeCityInput}
                            >
                                <option value="">Select Provinsi</option>
                                {
                                    objProvinsi.map(data => (
                                        <option key={data.kota} value={data.kota}>{data.kota}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className={styles.formcovid__group}>
                            <label className={styles.formcovid__label}>
                                Status
                            </label>
                            <select className={styles.formcovid__select}
                                onChange={changeStatusInput}
                                id="status"
                                name="status"
                                value={status}
                            >
                                <option value="">Pilih Status</option>
                                <option value="kasus">Positif</option>
                                <option value="sembuh">Sembuh</option>
                                <option value="meninggal">Meninggal</option>
                                <option value="dirawat">Dirawat</option>
                            </select>
                        </div>
                        <div className={styles.formcovid__group}>
                            <label className={styles.formcovid__label}>Jumlah</label>
                            <input
                                className={styles.formcovid__input}
                                onChange={changeTotalInput}
                                type="number"
                                id="number"
                                placeholder="contoh : 200"
                                value={total}
                            />
                        </div>
                        <button
                            type="submit"
                            className={styles.formcovid__button}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default FormCovid;
