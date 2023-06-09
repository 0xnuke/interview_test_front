import React, { useState } from 'react';
import styles from '@/styles/Conclusion.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faThumbsUp,
    faComment,
    faGift,
    faGem,
    faArrowUpFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import LikeChart from './LikeChart';
import CommentChart from './CommentChart';
import PointChart from './PointChart';
import SelectType from '../SelectType';

const Conclusion = () => {
    const [type, setType] = useState(null);

    const handleClick = (value) => {
        setType(value);
    };

    const renderChartComponent = () => {
        if (type === 'like') {
            return <LikeChart />;
        } else if (type === 'comment') {
            return <CommentChart />;
        } else if (type === 'point') {
            return <PointChart />;
        } else {
            return null;
        }
    };


    return (
        <div>
            {type ? (
                <div>
                    <SelectType type={type} handleClick={handleClick} />
                    {renderChartComponent()}
                </div>
            ) : (
                <div className={styles.container}>
                    <div className={styles.dateContainer}>
                        <h5>18 December 2019</h5>
                        <div>
                            <FontAwesomeIcon icon={faArrowUpFromBracket} />
                        </div>
                    </div>
                    <div className={styles.gridContainer}>
                        <div
                            className={styles.cardContainer}
                            onClick={() => handleClick('like')}
                            style={type === 'like' ? { color: 'var(--pr-font-color)', color: 'var(--white-font-color)' } : {}}
                        >
                            <div>
                                <div>
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                </div>
                                <h6>Like</h6>
                            </div>
                            <h2>34</h2>
                            <p>Likes</p>
                        </div>
                        <div
                            className={styles.cardContainer}
                            onClick={() => handleClick('comment')}
                        >
                            <div>
                                <div>
                                    <FontAwesomeIcon icon={faComment} />
                                </div>
                                <h6>Comment</h6>
                            </div>
                            <h2>56</h2>
                            <p>Comments</p>
                        </div>
                        <div
                            className={styles.cardContainer}
                            onClick={() => handleClick('point')}
                        >
                            <div>
                                <div>
                                    <FontAwesomeIcon icon={faGift} />
                                </div>
                                <h6>Point</h6>
                            </div>
                            <h2>450</h2>
                            <p>Point</p>
                        </div>
                        <div className={styles.cardContainer}>
                            <div>
                                <div>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <h6>Diamond</h6>
                            </div>
                            <h2>450</h2>
                            <p>Diamond</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Conclusion;
