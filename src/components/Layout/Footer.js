import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPenToSquare,
    faCircleCheck,
    faPaperPlane,
    faChartPie,
    faGear,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Footer.module.css"



const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.menu}>
                <div>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </div>
                <p>
                    Write
                </p>
            </div>
            <div className={styles.menu}>
                <div>
                    <FontAwesomeIcon icon={faCircleCheck} />
                </div>
                <p>Approval</p>
            </div>
            <div className={styles.menu}>
                <div>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </div>
                <p>Report</p>
            </div>
            <div className={styles.menu}>
                <div><FontAwesomeIcon icon={faChartPie} /></div>
                <p>Statistic</p>
            </div>
            <div className={styles.menu}>
                <div><FontAwesomeIcon icon={faGear} /></div>
                <p>Setting</p>
            </div>
        </footer>
    )
}

export default Footer;