
export const QuizModes = {
    // easy: "かんたん",
    normal: "ふつう",
    // hard: "むずかしい",
} as const

export type QuizMode = keyof typeof QuizModes
