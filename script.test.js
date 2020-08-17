const script = require('./script');

const add = script.add;
const subtract = script.subtract

it('should return the sum of two numbers', () => {
    // arrange 
    const x = 45, y = 31;
    let expected = x + y;

    // act
    let actual = add(x, y)

    //assert
    expect(actual).toBe(expected);
})

it('should return the difference of two numbers', () => {
    // arrange 
    const x = 10, y = 13;
    let expected = x - y;

    // act
    let actual = subtract(x, y)

    //assert
    expect(actual).toBe(expected);
})

it('should return -283 difference of two numbers', () => {
    // arrange 
    const x = 1337, y = 1620;
    let expected = x - y;

    // act
    let actual = subtract(x, y)

    //assert
    expect(actual).toBe(expected);
})