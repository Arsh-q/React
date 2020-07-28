import React from 'react';

const Row = () => {
    return (<>
          <div className='row'>
        <button onClick={Clear} name='clear' className='clear' >clear</button>
        <button name='0' onClick={handleCheck}>0</button>
        <button onClick={ShowResult} name='=' className='sign'>=</button>
        <button name='+' onClick={handleCheck}>+</button>
    </div>
    <div className='row'>
        <button name='7' onClick={handleCheck}>7</button>
        <button name='8' onClick={handleCheck}>8</button>
        <button name='9' onClick={handleCheck}>9</button>
        <button name='-' onClick={handleCheck} className='sign'>-</button>
    </div>
    <div className='row'>
        <button name='4' onClick={handleCheck}>4</button>
        <button name='5' onClick={handleCheck}>5</button>
        <button name='6' onClick={handleCheck}>6</button>
        <button name='*' onClick={handleCheck} className='sign'>x</button>
    </div>
    <div className='row'>
        <button name='1' onClick={handleCheck}>1</button>
        <button name='2' onClick={handleCheck}>2</button>
        <button name='3' onClick={handleCheck}>3</button>
        <button name='/' onClick={handleCheck} className='sign'>%</button>
    </div>
    </>);

}

export default Row;