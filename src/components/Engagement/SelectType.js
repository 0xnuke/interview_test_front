import styles from '@/styles/SelectType.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faThumbsUp,
    faComment,
    faGift,
    faGem,
    faArrowUpFromBracket,
} from '@fortawesome/free-solid-svg-icons';

const SelectType = ({type, handleClick}) => {
    return (
        <div className={styles.container}>
            <div className={styles.dateContainer}>
                <h5>18 December 2019</h5>
                <div>
                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                </div>
            </div>
            <ul className={styles.typeSelector}>
                <li
                    style={type === 'like' ? { backgroundColor: 'var(--pr-color)', color: 'var(--white-font-color)' } : {}}
                    onClick={() => handleClick('like')}>
                    <div>
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </div>
                    <span>Like</span>
                </li>
                <li
                    style={type === 'comment' ? { backgroundColor: 'var(--pr-color)', color: 'var(--white-font-color)' } : {}}
                    onClick={() => handleClick('comment')}>
                    <div>
                        <FontAwesomeIcon icon={faComment} />
                    </div>
                    <span>Comment</span>
                </li>
                <li
                    style={type === 'point' ? { backgroundColor: 'var(--pr-color)', color: 'var(--white-font-color)' } : {}}
                    onClick={() => handleClick('point')}>
                    <div>
                        <FontAwesomeIcon icon={faGift} />
                    </div>
                    <span>Point</span>
                </li>
                <li 
                    style={type === 'diamond' ? { backgroundColor: 'var(--pr-color)', color: 'var(--white-font-color)' } : {}}
                    onClick={() => handleClick('diamond')}>
                    <div>
                        <FontAwesomeIcon icon={faGem} />
                    </div>
                    <span>Diamond</span>
                </li>
            </ul>
        </div>
    )
}

export default SelectType;