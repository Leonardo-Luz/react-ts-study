export type baseProps = {
    "Attack": number,
    "Defense": number,
    "HP": number,
    "Sp. Attack": number,
    "Sp. Defense": number,
    "Speed": number
}

export type nameProps = {
    chinese: string,
    english: string,
    french: string,
    japanese: string
}

export type PokedataProps = {
    base: baseProps,
    id: number,
    name: nameProps,
    type: string[],
}