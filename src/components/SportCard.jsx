import React from "react";
import { Link } from "react-router-dom";

const SportCard = ({image, name}) => {
    return (
        <div className='hover:transform hover:scale-110 transition-transform duration-300 ease-in-out p-5'>
            <div>
                <Link to={'/football'}><img src={image} width={'300px'}/></Link>
            </div>
            <h2 className='text-center'>{name}</h2>
        </div>
    )
};

export default SportCard;
