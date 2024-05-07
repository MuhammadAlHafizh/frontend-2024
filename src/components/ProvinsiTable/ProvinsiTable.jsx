import styles from './ProvinsiTable.module.css';
import Data from "./Data/Data";

function ProvinsiTable(props) {
    const {objProvinsi} = props;
    return (
        <div className={styles.provinsi__container}>
            <section className={styles.provinsi__section}>
                <h2 className={styles.provinsi__title}>Provinsi</h2>
                <h3 className={styles.provinsi__subtitle}>Data Covid Berdasarkan Provinsi di Indonesia</h3>
                <table className={styles.provinsi__table}>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Provinsi</th>
                            <th>Positif</th>
                            <th>Sembuh</th>
                            <th>Meninggal</th>
                            <th>Dirawat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            objProvinsi.map((objData,index) => (
                                <Data key={objData.kota} objData={objData} index={index}/>
                                )
                            )
                        }
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default ProvinsiTable;
