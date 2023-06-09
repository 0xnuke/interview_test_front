import styles from "@/styles/Report.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleUser,
    faCalendarDays,
    faClock,
    faImage,
    faPaperclip,
    faGift,
    faThumbsUp,
    faComment,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";

const Report = () => {
    return (

        <div className={styles.container}>
            <div className={styles.postContainer}>
                <div className={styles.headerContainer}>
                    <div className={styles.userContainer}>
                        <div className={styles.userImage}>
                            <FontAwesomeIcon icon={faCircleUser} />
                        </div>
                        <div className={styles.nameContainer}>
                            <h4>Ekarach Sripen</h4>
                            <p>Design Director</p>
                        </div>
                    </div>
                    <div className={styles.userRight}>
                        <div className={styles.timeContainer}>
                            <FontAwesomeIcon icon={faCalendarDays} />
                            <span>14/01/2020</span>
                        </div>
                        <div className={styles.timeContainer}>
                            <FontAwesomeIcon icon={faClock} />
                            <span>12:45</span>
                        </div>
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.contentBox}>
                        <h5>Content 1</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div>
                        <h5>Content 2</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div>
                        <h5>Content 3</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <h5>Images</h5>
                    <div>
                        <FontAwesomeIcon icon={faImage} />
                        <FontAwesomeIcon icon={faImage} />
                        <FontAwesomeIcon icon={faImage} />
                    </div>
                </div>
                <div className={styles.fileContainer}>
                    <h5>Attach File</h5>
                    <div>
                        <FontAwesomeIcon icon={faPaperclip} />
                        <span>Update Design OKRs.pdf</span>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.middleContainer}>
                    <div className={styles.middleActivity}>
                        <p>Read (12)</p>
                        <p>Unread (15)</p>
                        <p>Likes (2)</p>
                    </div>
                    <div className={styles.middleView}>
                        <p>View</p>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.btnContainer}>
                    <button>
                        <FontAwesomeIcon icon={faGift} />
                        Give Point
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        Like
                    </button>
                </div>
                <div className={styles.commentContainer}>
                    <div>
                        <div className={styles.commentUserContainer}>
                            <div>
                                <FontAwesomeIcon icon={faCircleUser} />
                            </div>
                            <div>
                                <h4>Anakin Skywalker</h4>
                                <p>Designer</p>
                            </div>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </p>
                        </div>
                        <div className={styles.commentStatus}>
                            <div className={styles.leftCommentStatus}>
                                <p>2 Days ago</p>
                                <p>3 People likes</p>
                            </div>
                            <div className={styles.rightCommentStatus}>
                                <div>
                                    <FontAwesomeIcon icon={faComment} />
                                    <span>Reply</span>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                    <sapn>Like</sapn>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.commentUserContainer}>
                            <div>
                                <FontAwesomeIcon icon={faCircleUser} />
                            </div>
                            <div>
                                <h4>Amanda Ray</h4>
                                <p>Designer</p>
                            </div>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </p>
                        </div>
                        <div className={styles.commentStatus}>
                            <div className={styles.leftCommentStatus}>
                                <p>2 Days ago</p>
                                <p>3 People likes</p>
                            </div>
                            <div className={styles.rightCommentStatus}>
                                <div>
                                    <FontAwesomeIcon icon={faComment} />
                                    <span>Reply</span>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                    <sapn>Like</sapn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Report;