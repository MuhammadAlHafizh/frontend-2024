import Data from "./Data/Data";
import styles from "./GelobalSection.module.css";
import data from "../../utils/constants/indonesia";

function GelobalSection() {
    const objDataCovid = data.indonesia;
    return (
        <div className={styles.gelobalsection__container}>
            <section className={styles.gelobalsection__section}>
                <h2 className={styles.gelobalsection__title}>Indonesia</h2>
                <h4 className={styles.gelobalsection__description}>Data Covid Berdasarkan Indonesia</h4>
                <div className={styles.gelobalsection__box}>
                    {
                        objDataCovid.map(function (obj) {
                            return <Data obj={obj} key={obj.status}/>
                        })
                    }
                </div>
            </section>
        </div>
    );
}

export default GelobalSection;
