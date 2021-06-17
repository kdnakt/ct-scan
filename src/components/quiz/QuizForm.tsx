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
    return (
        <>
            <span className="answer_label">つる</span>
            <input className="answer_input" type="number" value={crane}
                data-testid="crane-input"
                max={total} min={0}
                onChange={e => setCrane(Number(e.target.value))}
            />
            <br />
            <span className="answer_label">かめ</span>
            <input className="answer_input" type="number" value={turtle}
                data-testid="turtle-input"
                max={total} min={0}
                onChange={e => setTurtle(Number(e.target.value))}
            />
            <br />
            <span className="answer_hint" data-testid="hint">
                {(quiz.mode === "easy" && (turtle + crane !== total))
                    ? `ヒント：ぜんぶで${total}ひき` : ``
                }
            </span>
            <br />
            <button className="answer_button" onClick={() => {
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