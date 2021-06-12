import { Dispatch, FC, SetStateAction } from "react"
import { QuizMode, QuizModes } from "./QuizMode"

type SelectorProps = {
    setMode: Dispatch<SetStateAction<QuizMode>>,
    current: QuizMode,
}

type ModeProps = {
    setMode: Dispatch<SetStateAction<QuizMode>>,
    mode: QuizMode,
    selected: boolean,
}

const ModeLabel: FC<ModeProps> = ({
    setMode,
    mode,
    selected,
}) => {
    const label = QuizModes[mode].label
    return (
        <span className={`quiz_mode quiz_mode_${selected ? "selected" : mode}`}
            onClick={() => {
                if (!selected && window.confirm(`「${label}」モードに\nかえますか？`)) {
                    setMode(mode)
                }
            }}
        >
            {label}
        </span>
    )
}

export const QuizModeSelector: FC<SelectorProps> = ({
    setMode,
    current,
}) => {
    return (
        <>
            <h5 style={{textAlign: 'center'}}>
                {Object.keys(QuizModes).map(mode => 
                    <ModeLabel setMode={setMode}
                        mode={mode as QuizMode} 
                        selected={current === mode}
                    />
                )}
            </h5>
        </>
    )
}