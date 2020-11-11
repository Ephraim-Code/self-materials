import React from 'react';

const SmallBanner = ({ title, description }) => {
    return (
        <div className="smallBanner">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}
export default SmallBanner;