import { Dispatch, FC, SetStateAction } from "react"
import { Quiz } from "./Quiz"
import { createQuizData } from "./QuizData"
import { QuizMode, QuizModes } from "./QuizMode"

type SelectorProps = {
    setQuiz: Dispatch<SetStateAction<Quiz>>,
    current: Quiz,
}

type ModeProps = {
    setQuiz: Dispatch<SetStateAction<Quiz>>,
    mode: QuizMode,
    selected: boolean,
}

const ModeLabel: FC<ModeProps> = ({
    setQuiz,
    mode,
    selected,
}) => {
    const label = QuizModes[mode].label
    return (
        <span className={`quiz_mode quiz_mode_${selected ? "selected" : mode}`}
            onClick={() => {
                if (!selected && window.confirm(`「${label}」モードに\nかえますか？`)) {
                    const data = createQuizData(mode)
                    setQuiz({
                        mode: mode,
                        data: data
                    })
                }
            }}
        >
            {label}
        </span>
    )
}

export const QuizSelector: FC<SelectorProps> = ({
    setQuiz,
    current,
}) => {
    return (
        <>
            <h5 style={{textAlign: 'center'}}>
                {Object.keys(QuizModes).map(mode => 
                    <ModeLabel key={mode}
                        setQuiz={setQuiz}
                        mode={mode as QuizMode} 
                        selected={current.mode === mode}
                    />
                )}
            </h5>
        </>
    )
}