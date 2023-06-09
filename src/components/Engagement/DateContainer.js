import styles from "@/styles/DateContainer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartSimple,
    faList,
    faChevronLeft,
    faChevronRight,
    faArrowDown,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const DateContainer = ({ handleClick, page }) => {
    const [selectWeekly, setSelectWeekly] = useState("daily");

    const handleSelectWeekly = (value) => {
        setSelectWeekly(value);
    };

    const renderMiddleDate = () => {
        if (selectWeekly === "daily") {
            return (
                <div className={styles.middleDate}>
                    <div>
                        <h6>M</h6>
                        <h4>17</h4>
                    </div>
                    <div>
                        <h6>T</h6>
                        <h4>18</h4>
                    </div>
                    <div>
                        <h6>W</h6>
                        <h4>19</h4>
                    </div>
                    <div>
                        <h6>TH</h6>
                        <h4>20</h4>
                    </div>
                    <div>
                        <h6>F</h6>
                        <h4>21</h4>
                    </div>
                    <div>
                        <h6>S</h6>
                        <h4>22</h4>
                    </div>
                    <div>
                        <h6>S</h6>
                        <h4>23</h4>
                    </div>
                </div>
            );
        } else {
            return (
                <div className={styles.middleDateWeekly}>
                    <div>
                        <h6>M</h6>
                        <h4>17</h4>
                    </div>
                    <div>
                        <h6>T</h6>
                        <h4>18</h4>
                    </div>
                    <div>
                        <h6>W</h6>
                        <h4>19</h4>
                    </div>
                    <div>
                        <h6>TH</h6>
                        <h4>20</h4>
                    </div>
                    <div>
                        <h6>F</h6>
                        <h4>21</h4>
                    </div>
                    <div>
                        <h6>S</h6>
                        <h4>22</h4>
                    </div>
                    <div>
                        <h6>S</h6>
                        <h4>23</h4>
                    </div>
                </div>
            );
        }

    };

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.topDate}>
                    <h4 onClick={() => handleSelectWeekly("daily")} style={selectWeekly === "daily" ? { color: 'var(--black-font-color)' } : {}}>Daily</h4>
                    <h4 onClick={() => handleSelectWeekly("weekly")}  style={selectWeekly === "weekly" ? { color: 'var(--black-font-color)' } : {}}>Weekly</h4>
                    <h4 onClick={() => handleSelectWeekly("montly")}  style={selectWeekly === "montly" ? { color: 'var(--black-font-color)' } : {}}>Monthly</h4>
                </div>
                <div className={styles.topMenu}>
                    <div><FontAwesomeIcon icon={faChartSimple}
                        onClick={() => handleClick('conclusion')}
                        style={page === 'conclusion' ? { color: 'var(--pr-font-color)', borderBottom: 'solid 2px var(--border-pr)' } : {}}
                    /></div>
                    <div><FontAwesomeIcon icon={faList}
                        onClick={() => handleClick('infolist')}
                        style={page === 'infolist' ? { color: 'var(--pr-font-color)', borderBottom: 'solid 2px var(--border-pr)' } : {}}

                    /></div>
                </div>
            </div>
            <div className={styles.middle}>
                <div className={styles.middleLeft}>
                    <div className={styles.middleArrowLeft}><FontAwesomeIcon icon={faChevronLeft} /></div>
                    {renderMiddleDate()}

                    <div className={styles.middleArrowRight}><FontAwesomeIcon icon={faChevronRight} /></div>
                </div>
                <div className={styles.middleRight}>
                    <div><FontAwesomeIcon icon={faArrowDown} /></div>
                    <span>Today</span>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottomLine}>
                    <div className={styles.bottomIconContainer}>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DateContainer;