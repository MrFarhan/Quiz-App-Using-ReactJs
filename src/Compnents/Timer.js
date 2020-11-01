import React, { useState, useEffect } from 'react'

export const Timer = ({ timerVal }) => {

    // const [time, UpdateTime] = useState(5)




    // console.log(time, "time")
    
    return (
        <div>
            Remaining time  <span style={timerVal < 3 ? {color:"red"} : null} >{timerVal }</span>
        </div>
    )
}
