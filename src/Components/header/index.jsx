import logo from "../../assets/logo.svg"
import styles from "./style.module.scss"

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Nu Kenzie Logo" />
        </header>
    )
}