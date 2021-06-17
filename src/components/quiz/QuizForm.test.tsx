import { fireEvent, getByTestId, render } from "@testing-library/react"
import { createQuizData } from "./QuizData"
import { QuizForm } from "./QuizForm"

describe('hint only for easy mode', () => {
    it('should show hint for easy mode', () => {
        const form = render(<QuizForm quiz={{
            mode: "easy",
            data: {
                craneCount: 2,
                turtleCount: 3,
            },
        }} setQuiz={jest.fn} />)
        const craneInput = form.getByTestId('crane-input')
        const turtleInput = form.getByTestId('turtle-input')
        fireEvent.change(craneInput, { target: { value: '2' }})
        fireEvent.change(turtleInput, { target: { value: '2' }})
        const hint = form.getByTestId('hint')
        expect(hint).toHaveTextContent('ヒント')
    })

    it('should not show hint for easy mode when total matches', () => {
        const form = render(<QuizForm quiz={{
            mode: "easy",
            data: {
                craneCount: 2,
                turtleCount: 3,
            },
        }} setQuiz={jest.fn} />)
        const craneInput = form.getByTestId('crane-input')
        const turtleInput = form.getByTestId('turtle-input')
        fireEvent.change(craneInput, { target: { value: '3' }})
        fireEvent.change(turtleInput, { target: { value: '2' }})
        const hint = form.getByTestId('hint')
        expect(hint).not.toHaveTextContent('ヒント')
    })


    it('should not show hint for normal mode', () => {
        const form = render(<QuizForm quiz={{
            mode: "normal",
            data: {
                craneCount: 2,
                turtleCount: 3,
            },
        }} setQuiz={jest.fn} />)
        const craneInput = form.getByTestId('crane-input')
        const turtleInput = form.getByTestId('turtle-input')
        fireEvent.change(craneInput, { target: { value: '2' }})
        fireEvent.change(turtleInput, { target: { value: '2' }})
        const hint = form.getByTestId('hint')
        expect(hint).not.toHaveTextContent('ヒント')
    })
})