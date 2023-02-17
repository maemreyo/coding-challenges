import { getSpaceshipModels } from "../../mocks/spaceships";
import { RandomGenerator } from "./";

describe("random.ts", () => {
    let max: number;
    let min: number;
    let sum: number;
    let quantity: number;
    let randomMock: any;
    let randomness = new RandomGenerator(getSpaceshipModels(4));
    beforeEach(() => {
        randomMock = jest.spyOn(global.Math, 'random')
    });

    it("Random value in the range (min, max)", () => {
        max = 100;
        min = 0;
        randomMock.mockReturnValue(0.9);

        const randNum = randomness.randomInteger(max, min);

        expect(randNum).toBeGreaterThanOrEqual(min);
        expect(randNum).toBeLessThanOrEqual(max);
    })


    // it("Random numbers with a fixed sum and quantity", () => {
    //     sum = 167;
    //     quantity = 4;

    //     const randNumbers = randomness.choiceWithFixedSum(sum, quantity);
    //     const actualNum = randNumbers.reduce((a, b) => a + b, 0);
    //     const allNonZero = randNumbers.every(num => num > 0);

    //     expect(actualNum).toBe(sum);
    //     expect(randNumbers.length).toBe(quantity);
    //     expect(allNonZero).toBeTruthy();
    // })

    // it("Random numbers with a fixed sum and quantity and a provided list", () => {
    //     sum = 167;
    //     quantity = 4;
    //     const list = []
    //     const randNumbers = randomness.choiceWithFixedSum(sum, quantity);
    //     const actualNum = randNumbers.reduce((a, b) => a + b, 0);
    //     const allNonZero = randNumbers.every(num => num > 0);

    //     expect(actualNum).toBe(sum);
    //     expect(randNumbers.length).toBe(quantity);
    //     expect(allNonZero).toBeTruthy();
    // })

    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore();
    })
})