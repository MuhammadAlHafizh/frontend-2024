import styles from './Menu.module.css'
function Menu(props) {
    const { onClick,children } = props
    return (
        <button onClick={onClick} className={styles.navbar__menu_mobile}>
           {children}
        </button>
    );
}

export default Menu
