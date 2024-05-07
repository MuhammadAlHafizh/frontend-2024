import styles from "./Data.module.css"

function Data (props) {
    const {obj} = props;
    let color = "";
    if (obj.status === "Positif") {
        color = "#06D6A0";
    } else if (obj.status === "Sembuh") {
        color = "#118AB2";
    } else if (obj.status === "Meninggal") {
        color = "#EF476F";
    }
    console.log(obj);
    return (
        <div className={styles.data__container}>
            <h3 className={styles.data__status}>{obj.status}</h3><br></br>
            <p className={styles.data__jumlah} style={{color: color}}>{obj.total}</p>
        </div>
    );
}

export default Data
