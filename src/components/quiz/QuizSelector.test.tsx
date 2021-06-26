import { render } from "@testing-library/react"
import { ModeLabel } from './QuizSelector'

describe('mode label selected', () => {
    it('should have selected class when selected', () => {
        const { container } = render(<ModeLabel
            setQuiz={jest.fn}
            mode="easy"
            selected={true}
        />)
        expect(container.firstChild).toHaveClass('quiz_mode_selected')
    })

    it('should have easy class when not selected', () => {
        const { container } = render(<ModeLabel
            setQuiz={jest.fn}
            mode="easy"
            selected={false}
        />)
        expect(container.firstChild).toHaveClass('quiz_mode_easy')
    })

    it('should have normal class when not selected', () => {
        const { container } = render(<ModeLabel
            setQuiz={jest.fn}
            mode="normal"
            selected={false}
        />)
        expect(container.firstChild).toHaveClass('quiz_mode_normal')
    })

    it('should have hard class when not selected', () => {
        const { container } = render(<ModeLabel
            setQuiz={jest.fn}
            mode="hard"
            selected={false}
        />)
        expect(container.firstChild).toHaveClass('quiz_mode_hard')
    })
})