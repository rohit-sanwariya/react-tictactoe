 const History = ({history,moveTo,currentmove}) => {
    return (
       
            <ul>
                {
                    history.map((_,move)=>
                        <li key={move}>
                        <button 
                        style={
                            {
                                fontWeight: move===currentmove?'bold':'normal',
                                fontSize:move===currentmove?'20px':'14px',
                            }
                        }
                        type="button" onClick={()=>{
                            moveTo(move)}}>
                           {move==0?`Go to Game Start`:`Go to move #${move}`}
                        </button>
                    </li>
                    )
                }
               
            </ul>
        
    )
}
export default History;