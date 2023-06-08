import { Dispatch, FC, SetStateAction, useState } from "react";
import { Quiz } from "./Quiz";
import { calcTotalHeadCount, createQuizData } from "./QuizData";


type Props = {
    setQuiz: Dispatch<SetStateAction<Quiz>>,
    quiz: Quiz,
}

export const QuizForm: FC<Props> = ({
    setQuiz,
    quiz,
}) => {
    const data = quiz.data
    const total = calcTotalHeadCount(data)
    const [crane, setCrane] = useState(0)
    const [turtle, setTurtle] = useState(0)
    const [disabled, setDisabled] = useState(true);
    return (
        <>
            <span className="answer_label">つる</span>
            <input className="answer_input" type="number" value={crane}
                data-testid="crane-input"
                max={total} min={0}
                onChange={e => {
                    const newCrane = Number(e.target.value)
                    setCrane(newCrane)
                    setDisabled(newCrane === 0 && turtle === 0)
                }}
            />
            <br />
            <span className="answer_label">かめ</span>
            <input className="answer_input" type="number" value={turtle}
                data-testid="turtle-input"
                max={total} min={0}
                onChange={e => {
                    const newTurtle = Number(e.target.value)
                    setTurtle(newTurtle)
                    setDisabled(crane === 0 && newTurtle === 0)
                }}
            />
            <br />
            { quiz.mode == "easy" ? (
                <>
                    <button className="answer_button bg-info text-white" data-testid="hint-button"
                        onClick={() => {
                            window.alert(`ヒント：つるは ${data.craneCount} ひき`)
                            setCrane(data.craneCount)
                        }}
                    >
                        ヒント
                    </button>
                    <br />
                </>
            ) : undefined }
            <button className="answer_button bg-primary text-white" data-testid="submit-button"
                    disabled={disabled}
                    style={disabled ? {"cursor": "not-allowed", "opacity": 0.5} : {}}
                    onClick={() => {
                const isOk = crane === data.craneCount && turtle === data.turtleCount
                if (isOk) {
                    window.alert("せいかい🎉\nおめでとう！")
                    setQuiz({
                        mode: quiz.mode,
                        data: createQuizData(quiz.mode)
                    })
                    setCrane(0)
                    setTurtle(0)
                } else {
                    window.alert("ざんねん😱\nもういちど かんがえよう")
                }
            }}>こたえあわせ</button>
        </>
    )
}