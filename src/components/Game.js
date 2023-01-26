import Board from "./Board";
import { useState } from 'react';

const Game = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);
    const [history, setHistory] = useState([Array(9).fill(null)]) ;
    const currentSquares = history[stepNumber];

    function handlePlay(tempArray) {
        const stepHistory = [...history.slice(0, stepNumber +1), tempArray]
        setHistory(stepHistory);
        setStepNumber(stepHistory.length -1)
        setXIsNext(!xIsNext);
    };

    function jumpTo(step){
        setStepNumber(step);
    };

    const moveHistory = history.map((step, move) => {
        const desc = move ? "Go to move #" + move : "Go to game start";
        return (
            <li key={move}> 
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    return ( 
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squareVal={currentSquares} onPlay={handlePlay}/>
            </div>
            <div className="game-info">
                <ol>
                    {moveHistory}
                </ol>
            </div>
        </div>
     );
}
 
export default Game;