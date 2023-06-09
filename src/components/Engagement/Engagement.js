import styles from "@/styles/Engagement.module.css";
import Conclusion from "./Conclustion/Conclusion";
import DateContainer from "./DateContainer";
import { useState } from "react";
import InfoList from "./InfoList/InfoList";

const Engagement = ({handleClickPage}) => {
    const [page, setPage] = useState('conclusion');

    const handleClick = (value) => {
        setPage(value);
    };

    return (
        <div className={styles.container}>
            <div className={styles.menuContainer}>
                <h3>Submission</h3>
                <div></div>
                <h3>Engagement</h3>
            </div>
            <DateContainer page={page} handleClick={handleClick} />
            {page === 'conclusion' ? <Conclusion /> : <InfoList handleClickPage={handleClickPage} />}
        </div>
    );
};

export default Engagement;
