import React from 'react'
import { Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import errorImage from "../assets/images/placeholder.png"
import './style.css'
const GridItem = ({ image, title }) => {
    const img = null;
    return (
        <span className='grid-item'>
            <img height={220} src={process.env.PUBLIC_URL+`images/${image}`} onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = errorImage;
            }} />
            <span>{title || "Test1"}</span>
        </span>
    )
}
export default React.memo(GridItem)