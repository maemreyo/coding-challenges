import { getSpaceshipModels } from "../../mocks/spaceships";
import { compareTwoArrayOfObjects } from "../comparison";
import { RandomGenerator } from "./";

describe("RandomGenerator", () => {
    let max: number;
    let min: number;
    let sum: number;
    let quantity: number;
    let randomMock: any;


    beforeEach(() => {
        randomMock = jest.spyOn(global.Math, 'random')
    });

    it("Should return a random value in the range (min, max)", () => {
        max = 100;
        min = 0;
        randomMock.mockReturnValue(0.9);
        const randomness = new RandomGenerator(getSpaceshipModels(quantity));
        const randNum = randomness.randomInteger(max, min);

        expect(randNum).toBeGreaterThanOrEqual(min);
        expect(randNum).toBeLessThanOrEqual(max);
    })

    it("Should return valid random numbers with a fixed sum and quantity and a provided list", () => {
        sum = 167;
        quantity = 4;
        const randomness = new RandomGenerator(getSpaceshipModels(quantity));
        const randArmy = randomness.choiceWithFixedSum(sum, quantity);
        const actualNum = randArmy.reduce((a, b) => a + b.quantity, 0);
        const allNonZero = randArmy.map(army => army.quantity).every(num => num > 0);

        expect(actualNum).toBe(sum);
        expect(randArmy.length).toBe(quantity);
        expect(allNonZero).toBeTruthy();
    })

    it("Should throw an error when fixed sum or quantity is equal to 0", () => {
        let error;
        sum = 200;
        quantity = 0;

        try {
            const randomness = new RandomGenerator(getSpaceshipModels(quantity));
            randomness.choiceWithFixedSum(sum, quantity);
        } catch (_error) {
            error = _error
        } finally {
            expect(error.message).toBe('Missing input');
        }
    })

    it("Should throw an error when input values are invalid", () => {
        let error;
        sum = 200;
        quantity = 5;

        try {
            const randomness = new RandomGenerator(getSpaceshipModels(4));
            randomness.choiceWithFixedSum(sum, quantity);
        } catch (_error) {
            error = _error
        } finally {
            expect(error.message).toBe('Input Not Match');
        }
    })

    it("Should not mutate the original list when the `disabledShuffle` property is set to `true`", () => {
        sum = 167;
        quantity = 4;
        const beforeArmy = getSpaceshipModels(quantity);
        const randomness = new RandomGenerator([...beforeArmy], true);
        const randArmy = randomness.choiceWithFixedSum(sum, quantity);
        const afterArmy = randArmy.map(item => item.spaceship);

        expect(compareTwoArrayOfObjects(beforeArmy, afterArmy)).toBeTruthy();
    })

    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore();
    })
})