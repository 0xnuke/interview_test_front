import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faChevronDown,
    faArrowUpWideShort,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={styles.container}>
            <div className={styles.logo}>
                <h1></h1>
            </div>
            <div className={styles.menu}>
                <div className={styles.left}>
                    <FontAwesomeIcon
                        icon={faHouse}
                    />
                </div>
                <div className={styles.middle}>
                    <h4>All Report</h4>
                    <div><FontAwesomeIcon icon={faChevronDown} /></div>
                </div>
                <div className={styles.right}>
                <FontAwesomeIcon icon={faArrowUpWideShort} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;