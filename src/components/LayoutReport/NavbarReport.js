import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Navbar.module.css"

const NavbarReport = ({handleClickPage}) => {
    return (
        <nav className={styles.container}>
            <div className={styles.logo}>
                <h1></h1>
            </div>
            <div className={styles.menu}>
                <div href="/" className={styles.left}
            onClick={() => handleClickPage('normal')}>
        
            
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <p>Back</p>
                </div>
                <div className={styles.middle}>
                    <h4>OKRs Report</h4>
                </div>
                <div className={styles.right}>
                    <FontAwesomeIcon icon={faEllipsis} />                </div>
            </div>
        </nav>
    )
}

export default NavbarReport;