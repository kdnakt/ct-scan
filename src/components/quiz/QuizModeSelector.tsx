import { FC } from "react"
import { QuizMode, QuizModes } from "./QuizMode"

type SelectorProps = {
    setMode: (func: (mode: QuizMode) => QuizMode) => void,
}

type ModeProps = SelectorProps & {
    mode: QuizMode
}

const ModeLabel: FC<ModeProps> = ({
    setMode,
    mode,
}) => {
    return (
        <span className="quiz_mode" >{QuizModes[mode]}</span>
    )
}

export const QuizModeSelector: FC<SelectorProps> = ({
    setMode,
}) => {
    return (
        <>
            <h5 style={{textAlign: 'center'}}>
                {Object.keys(QuizModes).map(mode => 
                    <ModeLabel setMode={setMode} mode={mode as QuizMode} />
                )}
            </h5>
        </>
    )
}