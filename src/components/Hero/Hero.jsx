import styles from "./Hero.module.css"
import imageHero from "../../assets/image/image_hero.png";

function Hero() {
    return (
        <div className={styles.hero__container}>
            <section className={styles.hero__section}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Covid ID</h2>
                    <h3 className={styles.hero__monitoring}>Monitoring Perkembangan Covid</h3>
                    <p className={styles.hero__description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.</p>
                    <button className={styles.hero__button}>Vaccine</button>
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__image} src={imageHero}/>
                </div>
            </section>
        </div>
    )
}

export default Hero
