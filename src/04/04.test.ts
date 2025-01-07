import { predicate } from "./04"

test("test should return people older 90", ()=> {
    //data
    const ages = [18, 15, 100, 55, 89, 25]
    //action
    // const oldAges = ages.filter(item=> item>90)
    const oldAges = ages.filter(predicate)
    //expect result
    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})