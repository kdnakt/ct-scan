import { QuizMode, QuizModes } from "./QuizMode";

export function random(min: number, max: number): number {
    return Math.trunc(Math.random() * (max - min)) + min;
}

export type QuizData = {
    craneCount: number,
    turtleCount: number,
}

export function calcTotalHeadCount(data: QuizData): number {
    return data.craneCount + data.turtleCount
}

export function calcTotalLegCount(data: QuizData): number {
    return data.craneCount * 2 + data.turtleCount * 4
}

export function createQuizData(mode: QuizMode): QuizData {
    const max = QuizModes[mode].maxHeadCount
    const crane = random(1, max)
    const turtle = max - crane
    return {
        craneCount: crane,
        turtleCount: turtle,
    }
}
