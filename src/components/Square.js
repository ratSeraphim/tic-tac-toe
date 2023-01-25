import {useState } from 'react';

const Square = () => {

    const handleClick = (e) => {
        setTile('X');
    }

    const [tile, setTile] = useState(null);

    return ( 
        <button className="square" onClick={handleClick}>
            {tile}
        </button>
     );
}
 
export default Square;