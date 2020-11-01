import React, { useState } from 'react'
import '../App.css';
import { FinalScore } from './FinalScore';


export const QuestionCard = ({userName}) => {

    let questions = [{ question: "Who is the president of Pakistan", options: ["Quaid e Azam", "Liaqat Ali", "Muhammad Ali", "Jinnah Poonja"], correctAns: "Quaid e Azam" }, { question: "Who is the president of India", options: ["Nehru", "Gandhi", "Verath", "Sachin"], correctAns: "Gandhi" }, { question: "Who is the president of USA", options: ["Farhan", "Rehan", "Ali", "farooq"], correctAns: "Farhan" }, { question: "Who is the president of UAE", options: ["King", "Queen", "New", "Old"], correctAns: "King" }];
    const [currentQuestionIndex, updateCurrentQuestionIndex] = useState(0)
    const [score, updateScore] = useState(0)
    const [isSelected, updateIsSelected] = useState()
    const [radioInput, setRadioInput] = useState();
    const [finalScore, setFinalScore] = useState(true)


    const Next = () => {
        if (currentQuestionIndex !== questions.length - 1) {
            updateCurrentQuestionIndex(currentQuestionIndex + 1)
            if (questions[currentQuestionIndex].correctAns === radioInput) {
                updateScore(score + 1)
            }
        }
        if (currentQuestionIndex === questions.length - 1) {
            updateScore(score + 1)
            setFinalScore(false)
            
            // alert(`quiz finished and your score is ${score}`)

        }
        setRadioInput(false)
    }


    const inputHandle = (event) => {
        setRadioInput(event.target.value)
    }
    return (
        <div >
            {finalScore ? <div><h4>Please select the best suitable answer of below question</h4>
                <h5>SCORE: {score}</h5>

                {"Q # " + Number(currentQuestionIndex + 1) + " " + questions[currentQuestionIndex].question}
                <br />
                <br />
                <div>{questions[currentQuestionIndex].options.map((item, index) => {
                    return <label key={index} > <input type="radio" name="options" value={item} onChange={inputHandle} checked={radioInput === item} />{item}<br /></label>

                })}</div>
                <br />
                <button onClick={() => Next()}>Next</button></div> :
                <FinalScore score={score} userName={userName} />
            }


            {/* currentQuestionIndex !== questions.length - 1 ? updateCurrentQuestionIndex(currentQuestionIndex + 1) : console.log("user clicked") */}
        </div >
    )
}
