import { Army, SpaceShip } from './../../models/spaceship.d';


export class RandomGenerator {
    readonly init: () => void;
    public externalList: SpaceShip[];
    readonly disabledShuffle: boolean;

    constructor(
        externalList: SpaceShip[],
        disabledShuffle?: boolean
    ) {
        // Default values
        this.externalList = [];
        this.disabledShuffle = false;

        // Override those above default values if they're provided
        if (externalList) this.externalList = externalList;
        if (disabledShuffle) this.disabledShuffle = disabledShuffle;

        this.init = function () {
            if (!this.disabledShuffle) {
                this.shuffle()
            }
        }
        // Initialized
        this.init();
    }

    /**
     * Get the random list with fixed sum and quantity and it might be included the external data
     * @param sum A fixed sum of all elements in the array
     * @param quantity Number of element in the array
     * @returns List with a fixed sum, and number of elements (maybe included the external data)
     */
    public choiceWithFixedSum = (sum: number, quantity: number): Army[] => {
        // Validate input value
        if (sum === 0 || quantity === 0) throw Error("Please fill out the input!");

        if (quantity > this.externalList.length) throw Error("The list spaceship and quantity not match!");

        // Base case
        if (quantity === 1) {
            return [this.map(sum, this.externalList.pop())]
        }

        // Pick a random number
        let _randomInteger = this.randomInteger(sum / quantity, 1);

        // Recursive case
        return [
            this.map(_randomInteger, this.externalList.pop()),
            ...this.choiceWithFixedSum(sum - _randomInteger, quantity - 1)
        ]
    }

    /** Get a random integer
    * @param max The maximum value
    * @param min The minimum value
    * @returns The random integer in the range
    */
    public randomInteger = (max: number, min: number): number => {
        const _min = Math.ceil(min);
        const _max = Math.floor(max);
        return Math.floor(Math.random() * (_max - _min + 1)) + min;
    }

    /**
     * Map function to get the exact output data
     * @param quantity The spaceship quantity
     * @param item The spaceship
     * @returns A mapped data included @param quantity and @param item
     */
    private map = (quantity: number, spaceship?: SpaceShip): Army => ({
        quantity,
        spaceship
    })

    /**
     * Shuffle the external list
     * @returns Shuffled list
     */
    public shuffle = (): any[] => this.externalList.sort(() => 0.5 - Math.random());
}