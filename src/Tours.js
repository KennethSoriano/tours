import React from 'react';
import Tour from './Tour';
const Tours = (tours) => {
  return (
    <section>
        <h1 className='title'>Our Tour</h1>
        <div key={tours.id}>
            {
            tours.map((tour) => {
                return <Tour tour={tours} clickHandler={clickHandler}/>
            })
            }
        </div>
    </section>
  );
};

export default Tours;