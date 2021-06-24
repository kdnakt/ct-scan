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
                <span>つる&nbsp;と&nbsp;かめ&nbsp;が&nbsp;ぜんぶで&nbsp;</span>
                <span data-testid="total-heads">{calcTotalHeadCount(data)}</span>
                <span>&nbsp;ひき</span>
            </h3>
            <h3 style={{textAlign: 'center'}}>
                <span>あしが&nbsp;ぜんぶで&nbsp;</span>
                <span data-testid="total-legs">{calcTotalLegCount(data)}</span>
                <span>&nbsp;ほん</span>
            </h3>
            <h3 style={{textAlign: 'center'}}>
                つる&nbsp;と&nbsp;かめ&nbsp;は&nbsp;それぞれ&nbsp;なんひき？
            </h3>
        </>
    )
}