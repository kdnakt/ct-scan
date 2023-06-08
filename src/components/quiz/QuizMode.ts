
export const QuizModes = {
    "easy": {
        label: "かんたん",
        maxHeadCount: 5,
        style: "bg-info text-white",
    },
    "normal": {
        label: "ふつう",
        maxHeadCount: 15,
        style: "bg-primary text-white",
    },
    "hard": {
        label: "むずかしい",
        maxHeadCount: 100,
        style: "bg-warning text-dark",
    },
} as const

export type QuizMode = keyof typeof QuizModes
