import styles from "@/styles/LikeList.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleUser,
    faComment,
    faNewspaper
} from "@fortawesome/free-solid-svg-icons";

const ListComment = ({handleClickPage}) => {
    const listData = [
        {
            id: 1,
            name: 'Jonn Do',
            position: 'Developer',
            report: 'Daily',
            like: '30'
        },
        {
            id: 2,
            name: 'Amanda Ray',
            position: 'HR',
            report: 'Weekly',
            like: '60',
        },
        {
            id: 3,
            name: 'Ekanach Sripen',
            position: 'Graphic Designer',
            report: 'Daily',
            like: '80',
        },
        {
            id: 4,
            name: 'Ekanach Sripen',
            position: 'Graphic Designer',
            report: 'Daily',
            like: '90',
        },
        {
            id: 5,
            name: 'Ekanach Sripen',
            position: 'Graphic Designer',
            report: 'Daily',
            like: '90',
        },
        {
            id: 6,
            name: 'Ekanach Sripen',
            position: 'Graphic Designer',
            report: 'Daily',
            like: '90',
        },
        {
            id: 7,
            name: 'Ekanach Sripen',
            position: 'Graphic Designer',
            report: 'Daily',
            like: '90',
        },


    ];

    return (
        <div className={styles.container}>
            {listData.map((item) => (
                <div className={styles.cardContainer}>
                    <div className={styles.idContainer}>
                        <h5>{item.id}</h5>
                    </div>

                    <div className={styles.cardContainerBox}
                    onClick={() => handleClickPage('report')}>
                            <div className={styles.cardLeft}>
                                <div className={styles.userImage}>
                                    <FontAwesomeIcon icon={faCircleUser} />                            </div>
                                <div>

                                    <div className={styles.userContainer}>
                                        <p>{item.name}</p>
                                        <p>,&nbsp;{item.position}</p>
                                    </div>
                                    <div className={styles.reportContainer}>
                                        <FontAwesomeIcon icon={faNewspaper} />
                                        <p>{item.report} Report</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={styles.likeContainer}>
                                    <div></div>
                                    <FontAwesomeIcon icon={faComment} />
                                    <p>{item.like} Comments</p>
                                </div>
                            </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListComment;
