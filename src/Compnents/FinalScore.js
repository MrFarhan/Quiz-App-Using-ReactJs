import React from 'react'

export const FinalScore = ({ score, userName }) => {

    return (
        <div>
            
            <h1>Congratulation {userName}, Your Total score is <span style={score < 3 ? {color:"red"} : null} >{score }</span></h1>
        </div>
    )
}
