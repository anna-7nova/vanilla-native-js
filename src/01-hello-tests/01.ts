// const sentence = "Hello my friends!"

export function sum(a: number, b: number) {
    return a + b;
}

export function mult(a: number, b: number) {
    return a * b;
}

export function splitIntoWords(sentence: string) {
    return (sentence.toLowerCase().split(" ").map(w => w
        .replace("!", "")
        .replace(".", "")
        .replace("?", "")
    )
    )
}
