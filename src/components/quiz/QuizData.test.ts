import { calcTotalHeadCount, calcTotalLegCount, QuizData, random } from './QuizData';

test('random returns number between min and max', () => {
    for (let i = 0; i < 10; i++) {
        const min = i;
        const max = i + 10;
        const actual = random(min, max);
        expect(actual).toBeLessThanOrEqual(max);
        expect(actual).toBeGreaterThanOrEqual(min);
    }
});

test('calculate total head count', () => {
    const data: QuizData = {
        craneCount: 7,
        turtleCount: 12,
    }
    const actual = calcTotalHeadCount(data);
    expect(actual).toBe(19);
});

test('calculate total leg count', () => {
    const data: QuizData = {
        craneCount: 7,
        turtleCount: 12,
    }
    const actual = calcTotalLegCount(data);
    expect(actual).toBe(62);
});
