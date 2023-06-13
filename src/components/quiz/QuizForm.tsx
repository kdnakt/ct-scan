import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
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
    useEffect(() => {
        setCrane(0)
        setTurtle(0)
    }, [quiz.mode])
    const disabled = crane === 0 && turtle === 0
    const isHard = quiz.mode === "hard" || quiz.mode === "veryhard"
    return (
        <>
            <span className="answer_label">つる</span>
            { isHard ? (
                <>
                    <button className="answer_button" disabled={crane <= 0}
                        style={{margin: "0 8px"}}
                        onClick={() => {
                            setCrane(Math.max(crane - 10, 0))
                        }}
                    >-10</button>
                </>
            ) : undefined }
            <button className="answer_button" disabled={crane <= 0}
                onClick={() => setCrane(crane - 1)}
            >-1</button>
            <span style={{margin: "0 16px"}}>{crane}</span>
            <button className="answer_button" disabled={total <= crane}
                onClick={() => setCrane(crane + 1)}
            >+1</button>
            { isHard ? (
                <>
                    <button className="answer_button" disabled={total <= crane}
                        style={{margin: "0 8px"}}
                        onClick={() => {
                            setCrane(Math.min(crane + 10, total))
                        }}
                    >+10</button>
                </>
            ) : undefined }
            <br />
            <span className="answer_label">かめ</span>
            { isHard ? (
                <>
                    <button className="answer_button" disabled={turtle <= 0}
                        style={{margin: "0 8px"}}
                        onClick={() => {
                            setTurtle(Math.max(turtle - 10, 0))
                        }}
                    >-10</button>
                </>
            ) : undefined }
            <button className="answer_button" disabled={turtle <= 0}
                onClick={() => setTurtle(turtle - 1)}
            >-1</button>
            <span style={{margin: "0 16px"}}>{turtle}</span>
            <button className="answer_button" disabled={total <= turtle}
                onClick={() => setTurtle(turtle + 1)}
            >+1</button>
            { isHard ? (
                <>
                    <button className="answer_button" disabled={total <= turtle}
                        style={{margin: "0 8px"}}
                        onClick={() => {
                            setTurtle(Math.min(turtle + 10, total))
                        }}
                    >+10</button>
                </>
            ) : undefined }
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
                        data: createQuizData(quiz.mode),
                    })
                    setCrane(0)
                    setTurtle(0)
                } else {
                    window.alert("ざんねん😱\nもういちど かんがえよう")
                }
            }}>こたえあわせ</button>
            <br></br>
            <button className="answer_button bg-info"
                onClick={() => {
                    if (window.confirm("つぎの もんだいを みる")) {
                        setQuiz({
                            mode: quiz.mode,
                            data: createQuizData(quiz.mode),
                        })
                        setCrane(0)
                        setTurtle(0)
                    }
                }}
            >つぎのもんだい</button>
        </>
    )
}