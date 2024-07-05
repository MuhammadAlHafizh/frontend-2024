import styles from './alert.module.css'

function Alert(props) {
    return(
        <div className={styles.error}>
            <span>{props.children}</span>
        </div>
    )
}
export default Alert