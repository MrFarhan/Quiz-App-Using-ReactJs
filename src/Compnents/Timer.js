import React from 'react'

export const Timer = ({ timerVal }) => {
    
    return (
        <div>
            Remaining time  <span style={timerVal < 3 ? {color:"red"} : null} >{timerVal }</span>
        </div>
    )
}
