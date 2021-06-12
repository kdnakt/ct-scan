
export const QuizModes = {
    // "easy": {
    //     label: "かんたん",
    //     maxHeadCount: 5,
    // },
    "normal": {
        label: "ふつう",
        maxHeadCount: 15,
    },
    // "hard": {
    //     label: "むずかしい",
    //     maxHeadCount: 100,
    // },
} as const

export type QuizMode = keyof typeof QuizModes
