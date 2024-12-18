import { mult, splitIntoWords, sum } from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 3;
    b = 4;
    c = 10;
})

test("It should be correct sum of numbers", () => {
    //data (если в 2 тестах повторяется можно выбросить в глобальную область видимости, но есть нюансы) 
    // const a = 3;
    // const b = 4;
    // const c = 10;

    a = 100; //нля примера в данном тэсте перезаписали переменную а

    //action
    const result1 = sum(a, b);
    const result2 = sum(a, c);

    //expect result
    expect(result1).toBe(104);
    expect(result2).toBe(110);
});

test("function muit works correct", () => {
//data
// const a = 3;
// const b = 4;
// const c = 10;

//action
const result1 = mult(a, c);
const result2 = mult(b, c);

//expect result
expect(result1).toBe(30);
expect(result2).toBe(40);
});

test("splitting into words should be correct", () => {
    //data
const sentences_1 = "Hello my friends!";
const sentences_2 = "Java script is the best language.";

    //action
    const result_1 = splitIntoWords(sentences_1);
    const result_2 = splitIntoWords(sentences_2);
    

    //expect result
    expect(result_1.length).toBe(3);
    expect(result_1[0]).toBe("hello");
    expect(result_1[1]).toBe("my");
    expect(result_1[2]).toBe("friends");

    expect(result_2.length).toBe(6);
    expect(result_2[0]).toBe("java");
    expect(result_2[1]).toBe("script");
    expect(result_2[2]).toBe("is");
    expect(result_2[3]).toBe("the");
    expect(result_2[4]).toBe("best");
    expect(result_2[5]).toBe("language");
})