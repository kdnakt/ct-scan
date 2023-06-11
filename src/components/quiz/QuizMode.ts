
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
        maxHeadCount: 50,
        style: "bg-warning text-dark",
    },
    "veryhard": {
        label: "ちょうむず",
        maxHeadCount: 150,
        style: "bg-danger text-white",
    },
} as const

export type QuizMode = keyof typeof QuizModes
