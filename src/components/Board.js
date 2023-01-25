
import { useState } from 'react';
import Square from './Square';

const Board = () => {
    
    const [squareVal, setSquareVal] = useState(Array(9).fill(null)) ;
    console.log(squareVal);
    
    
    function renderSquare(index) {
        const handleClick = (index) => {
            console.log(index);
            setSquareVal((prevValue)=>{return [...prevValue, prevValue[index] = "X"]})
        } 
        return (
            <Square handleClick={handleClick} 
            tile={squareVal[index]} index={index}/>
            
        )
    } 

    return ( 
        <>
        <div className='board-row'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className='board-row'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className='board-row'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
        </>
     );
}
 
export default Board;