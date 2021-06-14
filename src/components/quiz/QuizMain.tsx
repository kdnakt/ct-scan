import { FC } from "react"
import { Quiz } from "./Quiz"
import { calcTotalHeadCount, calcTotalLegCount } from "./QuizData"

export const QuizMain: FC<{quiz: Quiz}> = ({
    quiz,
}) => {
    const data = quiz.data
    return (
        <>
            <h3 style={{textAlign: 'center'}}>
                つる&nbsp;と&nbsp;かめ&nbsp;が&nbsp;ぜんぶで&nbsp;{calcTotalHeadCount(data)}&nbsp;ひき
            </h3>
            <h3 style={{textAlign: 'center'}}>
                あしが&nbsp;ぜんぶで&nbsp;{calcTotalLegCount(data)}&nbsp;ほん
            </h3>
            <h3 style={{textAlign: 'center'}}>
                つる&nbsp;と&nbsp;かめ&nbsp;は&nbsp;それぞれ&nbsp;なんひき？
            </h3>
        </>
    )
}