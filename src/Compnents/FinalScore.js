import React from 'react'

export const FinalScore = ({ score, userName }) => {
    return (
        <div>
            <h1>Congratulations {userName}, Your Total score is {score}</h1>
        </div>
    )
}
