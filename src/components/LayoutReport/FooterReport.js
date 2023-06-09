import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faImage,
    faPaperclip,
    faAt,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/FooterReport.module.css"



const FooterReport = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.menu}>
                <FontAwesomeIcon icon={faImage} />
                <FontAwesomeIcon icon={faPaperclip} />
                <FontAwesomeIcon icon={faAt} />
            </div>
            <div className={styles.inputContainer}>
                <input type="text" placeholder="Comment" />
            </div>
        </footer>
    )
}

export default FooterReport;