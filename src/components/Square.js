

const Square = ({ handleClick, tile, index}) => {


    return ( 
        <button className="square" onClick={()=>{handleClick(index)}}>
            {tile}
        </button>
     );
}
 
export default Square;