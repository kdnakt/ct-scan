import { random } from './QuizData';

test('random returns number between min and max', () => {
    for (let i = 0; i < 10; i++) {
        const min = i;
        const max = i + 10;
        const actual = random(min, max);
        expect(actual).toBeLessThanOrEqual(max);
        expect(actual).toBeGreaterThanOrEqual(min);
    }
});
