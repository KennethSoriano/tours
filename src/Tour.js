import React, { useState } from 'react';

const Tour = ({id, name, info, image, price, clickHandler}) => {
    const [readMore, setReadMore] = useState(false)

  return (
    <article className='single-tour'>
        <img src={image} alt={name} />
        <h2>{name} {price}</h2>
        <p>
            {readMore ? info :info.substring(0,200) }
            <button onClick={setReadMore(!readMore)}>{readMore? 'show less' : 'read more'}</button>
        </p>
        <button onClick={({id}) => {clickHandler}}>Not Interested</button>
    </article>
  );
};

export default Tour;