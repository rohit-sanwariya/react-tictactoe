import React from 'react'

 
const Square = ({value,onClick,isWinningSquare}) => {
    return (<button onClick={onClick}  
    className={`square ${isWinningSquare?'winning':''} ${value==='X'?'text-green':'text-orange'}` } type="button"
         
    >
        {value} 
        </button>)
}

export default Square
