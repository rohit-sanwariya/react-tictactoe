import React from 'react'

const StatusMessage = ({winner,current}) => {
    const noMovesLeft = current.board.every(element=>element!== null     )
    return (
        
        // const message = winner
        // ? `Winner is ${winner}`
        // : `Next Player is ${current.isNext ? "X" : "0"}`;
        <div className="status-message">

          {winner && <>
          Winner is <span className={winner==='X'?'text-green':'text-orange'}>{winner}</span>
          </> }  
          {!winner && !noMovesLeft && (<>
            Next Player is <span className={current.isNext?'text-green':'text-orange'}
            >{current.isNext ? "X" : "0"} </span>
          </>)}
          {!winner && noMovesLeft && <>
          <span className="text-green">X</span> <span className="text-orange">O</span> Tied</>}
        </div>
    )
}

export default StatusMessage
