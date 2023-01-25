import {useState, useEffect } from 'react';
import Square from './Square';

const Board = () => {
    return ( 
        <>
        <div>
            <Square />
            <Square />
            <Square />
        </div>
        <div>
            <Square />
            <Square />
            <Square />
        </div>
        <div>
            <Square />
            <Square />
            <Square />
        </div>
        </>
     );
}
 
export default Board;