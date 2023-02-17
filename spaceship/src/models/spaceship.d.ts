export interface SpaceShip {
    name: string;
    type: SpaceShipType;
    health: number;
    defense: number;
    attack: number;
    speed: number;
    ranged: number;
    canBoost: boolean;
}

export interface Army {
    quantity: number;
    spaceship?: SpaceShip;
}

type SpaceShipType = 'melee' | 'ranged' | 'semi';