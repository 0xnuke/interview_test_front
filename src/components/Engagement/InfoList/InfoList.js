import SelectType from "../SelectType";
import { useState } from "react";
import ListLike from "./ListLike";
import ListComment from "./ListComment";

const InfoList = ({handleClickPage}) => {
    const [type, setType] = useState('like');

    const handleClick = (value) => {
        setType(value);
    };

    return (
        <div>
            <SelectType type={type} handleClick={handleClick} />
            {type === 'like' && <ListLike handleClickPage={handleClickPage}/>}
            {type === 'comment' && <ListComment handleClickPage={handleClickPage}/>}
        </div>
    );
};

export default InfoList;
