import React from 'react'


export const QuestionCard = () => {

    let questions = [{ question: "Who is the president of Pakistan", options: ["Quaid e Azam", "Liaqat Ali", "Muhammad Ali", "Jinnah Poonja"], correctAns: "Quaid e Azam" }, { question: "Who is the president of India", options: ["Nehru", "Gandhi", "Verath", "Sachin"], correctAns: "Gandhi" }, { question: "Who is the president of USA", options: ["Farhan", "Rehan", "Ali", "farooq"], correctAns: "Farhan" }, { question: "Who is the president of UAE", options: ["King", "Queen", "New", "Old"], correctAns: "King" }];


    return (
        <div>
            {/* <span>Socre</span> */}
            <h4>Please select the best suitable answer of below question</h4>



            {/* {questions.map((value, index)=>{
                return <div key={index}></div>
            })} */}
        </div>
    )
}
