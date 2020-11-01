import React, { useState, useEffect } from 'react'
import '../App.css';
import { FinalScore } from './FinalScore';
import { Timer } from './Timer';


export const QuestionCard = ({ userName }) => {

    let questions = [{ question: "Who is the president of Pakistan", options: ["Quaid e Azam", "Liaqat Ali", "Muhammad Ali", "Jinnah Poonja"], correctAns: "Quaid e Azam" }, { question: "Who is the president of India", options: ["Nehru", "Gandhi", "Verath", "Sachin"], correctAns: "Gandhi" }, { question: "Who is the president of USA", options: ["Farhan", "Rehan", "Ali", "farooq"], correctAns: "Farhan" }, { question: "Who is the president of UAE", options: ["King", "Queen", "New", "Old"], correctAns: "King" }];
    const [currentQuestionIndex, updateCurrentQuestionIndex] = useState(0)
    const [score, updateScore] = useState(0)
    const [isSelected, updateIsSelected] = useState()
    const [radioInput, setRadioInput] = useState(false);
    const [finalScore, setFinalScore] = useState(true)
    const [timer, setTimer] = useState(5);
    // const [timerFunc, setTimerFunc] = useState()
    const [interval, updateInterval] = useState();


    const Next = () => {
        if (currentQuestionIndex < questions.length - 1) {

            if (radioInput) {
                updateCurrentQuestionIndex(currentQuestionIndex + 1)
                setTimer(5)
                clearInterval(interval)
                setRadioInput(false)
                // add if checked any option then setTimer(5)


                if (questions[currentQuestionIndex].correctAns === radioInput) {
                    updateScore(score + 1)
                }
            }
        }
        else {
            if (questions[currentQuestionIndex].correctAns === radioInput) {
                updateScore(score + 1)
            }
            clearInterval(interval)
            setFinalScore(false)
            // alert(`quiz finished and your score is ${score}`)
            setRadioInput(false)
        }
    }


    const inputHandle = (event) => {
        setRadioInput(event.target.value)
    }

    // const timerVal = (time, updateTime) => {
    //     console.log(time, "timerval console11111")
    //     setTimer(time)
    //     console.log(timer, "timer ")
    //     // setTimerFunc(updateTime)
    //     console.log(updateTime(5), "update timeeee")
    // }


    useEffect(() => {
        if (timer === 0 && currentQuestionIndex < questions.length - 1) {
            updateCurrentQuestionIndex(currentQuestionIndex + 1)
            // timerFunc(5)
            clearInterval(interval)
            setTimer(5)
        }
        else if (timer === 0) {
            clearInterval(interval)
            setFinalScore(false)
        }

    }, [timer])


    useEffect(() => {
        let temp = setInterval(() => {
            console.log(timer, "timer in useEffect")

            setTimer(prev => {
                console.log(prev, "prev")
                return --prev
            })
            // debugger;
        }, 1000);
        updateInterval(temp)
        console.log(interval, "intervallll");
    }, [currentQuestionIndex])

    return (
        <div >
            {finalScore ? <div><h4>Please select the best suitable answer of below question</h4>

                <h5>SCORE: {score}<span className="timer"><Timer timerVal={timer} /></span></h5>

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
