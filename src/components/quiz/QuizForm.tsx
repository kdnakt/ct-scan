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
    const disabled = crane == 0 && turtle == 0
    return (
        <>
            <span className="answer_label">つる</span>
            <button className="answer_button" disabled={crane <= 0}
                onClick={() => setCrane(crane - 1)}
            >-</button>
            <span style={{margin: "0 16px"}}>{crane}</span>
            <button className="answer_button" disabled={total <= crane}
                onClick={() => setCrane(crane + 1)}
            >+</button>
            <br />
            <span className="answer_label">かめ</span>
            <button className="answer_button" disabled={turtle <= 0}
                onClick={() => setTurtle(turtle - 1)}
            >-</button>
            <span style={{margin: "0 16px"}}>{turtle}</span>
            <button className="answer_button" disabled={total <= turtle}
                onClick={() => setTurtle(turtle + 1)}
            >+</button>
            <br />
            { quiz.mode === "easy" ? (
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