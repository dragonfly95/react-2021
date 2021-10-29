import {useState} from "react";

const PhoneInfoList = ({data}) => {
    return (
        <ul>
            {data.map(v => (
                <li>{v.name} / {v.phone} </li>
            ))}
        </ul>
    );
}

export default PhoneInfoList;
