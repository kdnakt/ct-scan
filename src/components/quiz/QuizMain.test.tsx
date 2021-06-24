import { render } from "@testing-library/react"
import { QuizMain } from "./QuizMain"

describe('QuizMain', () => {
    it('should show total heads count', () => {
        const main = render(<QuizMain quiz={{
            mode: "easy",
            data: {
                craneCount: 2,
                turtleCount: 3,
            },
        }}/>)
        const totalHeads = main.getByTestId('total-heads')
        expect(totalHeads.textContent).toBe("5")
    })

    it('should show total legs count', () => {
        const main = render(<QuizMain quiz={{
            mode: "easy",
            data: {
                craneCount: 2,
                turtleCount: 3,
            },
        }}/>)
        const totalLegs = main.getByTestId('total-legs')
        expect(totalLegs.textContent).toBe("16")
    })
})