
import { useState } from 'react';
import Square from './Square';

const Board = () => {
    
    const [squareVal, setSquareVal] = useState(Array(9).fill(null)) ;
    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(squareVal);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
    
    function renderSquare(index) {
        
        const handleClick = (index) => {
            console.log(index);
            const tempArray = squareVal.slice();
            if (calculateWinner(squareVal) || squareVal[index]) {
                return;
              }
                tempArray[index] = xIsNext ? "X" : "O";
            setSquareVal( tempArray);
            setXIsNext(!xIsNext); 
            /*setSquareVal((prevValue)=>{return [...prevValue, prevValue[index] = "X"]})*/
        } 
        return (
            <Square handleClick={handleClick} 
            tile={squareVal[index]} index={index}/>
            
        )
    } 
    
    return ( 
        <>
        <div className="status">{status}</div>
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

     function calculateWinner(squareVal) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squareVal[a] && squareVal[a] === squareVal[b] && squareVal[a] === squareVal[c]) {
            return squareVal[a];
          }
        }
        return null;
      }
}
 
export default Board;