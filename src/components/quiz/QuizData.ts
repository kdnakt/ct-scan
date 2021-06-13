
export function random(min: number, max: number): number {
    return Math.trunc(Math.random() * (max - min)) + min;
}
