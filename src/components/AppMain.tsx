import { useState } from "react"
import { Quiz } from "./quiz/Quiz"
import { createQuizData } from "./quiz/QuizData"
import { QuizForm } from "./quiz/QuizForm"
import { QuizMain } from "./quiz/QuizMain"
import { QuizSelector } from "./quiz/QuizSelector"

export const AppMain = () => {
    const [quiz, setQuiz] = useState<Quiz>({mode: "normal", data: createQuizData("normal")})
    return (
        <>
            <QuizSelector setQuiz={setQuiz} current={quiz} />
            <QuizMain quiz={quiz} />
            <QuizForm quiz={quiz} setQuiz={setQuiz} />
        </>
    )
}