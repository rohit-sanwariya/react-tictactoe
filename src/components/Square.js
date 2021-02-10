import React from 'react'

 
const Square = ({value,onClick,isWinningSquare}) => {
    return (<button onClick={onClick}  
    className="square"  type="button"
    style={{
        fontWeight:isWinningSquare?'bold':'normal',
        

}}
    >
        {value} 
        </button>)
}

export default Square
