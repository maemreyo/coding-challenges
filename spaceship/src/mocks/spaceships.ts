import { SpaceShip } from './../models/spaceship.d';

// Mock values as the Spaceship model
const name = ['Infinity', 'Falcon', 'Enterprise', 'Selenium', 'Ducky', 'Earth', 'Mar', 'Sigma']
const type = ['melee', 'ranged', 'semi'];
const health = [100, 200, 300, 400, 500];
const defense = [10, 20, 30, 40, 50];
const attack = [60, 70, 80, 90, 100, 110, 120];
const speed = [700, 800, 900, 1000, 1100];
const ranged = [800, 1000, 1200, 1500];
const canBoost = [true, false];

// Helpers

/**
 * This function will help to pick a value in the mock array
 * @param index Index of spaceship
 * @returns A selector function
 */
const selector = (index: number) => (list: any[]) => list[index % list.length];

/**
 * This function will help to create a Spaceship model
 * @param index Index of spaceship
 * @returns A Spaceship model
 */
const mapper = (index: number): SpaceShip => {
    const indexedSelector = selector(index);
    return {
        name: `${indexedSelector(name)} ${index}`,
        type: indexedSelector(type),
        health: indexedSelector(health),
        defense: indexedSelector(defense),
        attack: indexedSelector(attack),
        speed: indexedSelector(speed),
        ranged: indexedSelector(ranged),
        canBoost: indexedSelector(canBoost),
    }
}
/**
 * Help to generate a mock list of modeled spaceship
 * @param quantity Number of needed mock spaceship
 * @returns A list of modeled spaceship
 */
const getSpaceshipModels = (quantity: number): SpaceShip[] => Array(quantity).fill(0).map((_, index) => mapper(index))

export {
    getSpaceshipModels
}