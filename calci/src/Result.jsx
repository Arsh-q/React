import React from 'react';

const Result =(props) => {
    return (<>
    <div className='result'>
    <input type='text' value={props.val} />
  </div>
  </>);
}

export default Result;