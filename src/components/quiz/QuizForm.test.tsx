import { fireEvent, render } from "@testing-library/react"
import { QuizForm } from "./QuizForm"

describe('hint only for easy mode', () => {
    it('should show hint button for easy mode', () => {
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
        const hint = form.getByTestId('hint-button')
        expect(hint).toHaveTextContent('ヒント')
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
        const hint = form.queryByTestId('hint-button')
        expect(hint).not.toBeInTheDocument()
    })
})

describe('submit button', () => {
    it('should disable submit button if both input were zero', () => {
        const form = render(<QuizForm quiz={{
            mode: "normal",
            data: {
                craneCount: 2,
                turtleCount: 3,
            },
        }} setQuiz={jest.fn} />)
        const button = form.getByTestId('submit-button')
        expect(button).toBeDisabled()
    })

    it("should enable submit button if crane input wasn't zero", () => {
        const form = render(<QuizForm quiz={{
            mode: "normal",
            data: {
                craneCount: 2,
                turtleCount: 3,
            },
        }} setQuiz={jest.fn} />)
        const craneInput = form.getByTestId('crane-input')
        fireEvent.change(craneInput, { target: { value: '2' }})
        const button = form.getByTestId('submit-button')
        expect(button).not.toBeDisabled()
    })

    it("should enable submit button if turtle input wasn't zero", () => {
        const form = render(<QuizForm quiz={{
            mode: "normal",
            data: {
                craneCount: 2,
                turtleCount: 3,
            },
        }} setQuiz={jest.fn} />)
        const turtleInput = form.getByTestId('turtle-input')
        fireEvent.change(turtleInput, { target: { value: '2' }})
        const button = form.getByTestId('submit-button')
        expect(button).not.toBeDisabled()
    })
})