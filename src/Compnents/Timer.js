import React from 'react'

export const Timer = ({ timerVal }) => {
    
    return (
        <div>
            Remaining time  <span style={timerVal < 8 ? {color:"red"} : null} >{timerVal }</span>
        </div>
    )
}
