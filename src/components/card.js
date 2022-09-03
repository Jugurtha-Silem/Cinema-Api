import React from 'react';

const Card = ({movis}) => {
    return (
        <div className='card-content'>

            <div className="card-container">
                <img src={movis.poster_path ? "https://image.tmdb.org/t/p/original/" + movis.poster_path : ".img/poster.jpg"} alt={"afiche" + movis.title} />
                <h1>{movis.title}</h1>

            </div>
        </div>
    );
};

export default Card;