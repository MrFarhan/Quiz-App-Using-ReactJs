import React from 'react'

export const FinalScore = ({ score, userName }) => {
    let ops;
    let congrats;
    return (
        <div>
            
            <h1>Congratulations {userName}, Your Total score is <span style={score < 3 ? {color:"red"} : null} >{score }</span></h1>
        </div>
    )
}
