import React from 'react'

 
const Square = ({value,onClick}) => {
    return (<button onClick={onClick}  className="square"  type="button">
        {value}
        </button>)
}

export default Square
