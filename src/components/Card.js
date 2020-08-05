import React from 'react';

const Card = ({name, email, id, username}) => {

   
    return (
        <div className= 'bg-light-blue dib br3 pa2 ma2 grow bw2 shadow tc'>
            <img src= {`https://robohash.org/${id} 200*200`} alt= 'robots' />

            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{username}</p>

            </div>

        </div>
    )

}

export default Card;