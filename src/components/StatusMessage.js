import React from 'react'

const StatusMessage = ({winner,current}) => {
    const noMovesLeft = current.board.every(element=>element!== null     )
    return (
        
        // const message = winner
        // ? `Winner is ${winner}`
        // : `Next Player is ${current.isNext ? "X" : "0"}`;
        <h2>
          {winner && `Winner is ${winner}` }  
          {!winner && !noMovesLeft && `Next Player is ${current.isNext ? "X" : "0"}`}
          {!winner && noMovesLeft && 'Draw Between 0 and X'}
        </h2>
    )
}

export default StatusMessage
