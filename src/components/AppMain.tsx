import { useState } from "react"
import { QuizMain } from "./quiz/QuizMain"
import { QuizMode } from "./quiz/QuizMode"
import { QuizModeSelector } from "./quiz/QuizModeSelector"

export const AppMain = () => {
    const [mode, setMode] = useState<QuizMode>("normal")
    return (
        <>
            <QuizModeSelector setMode={setMode} current={mode} />
            <QuizMain mode={mode} />
        </>
    )
}