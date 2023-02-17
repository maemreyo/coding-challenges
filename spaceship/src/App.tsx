import React from "react";
import { SpaceShips } from "./components/SpaceShips";
import { RandomGenerator } from "./helpers/RandomGenerator";
import { getSpaceshipModels } from "./mocks/spaceships";
import { Army } from "./models/spaceship";
import "./App.scss";

function App() {
    const teamRef = React.useRef<HTMLInputElement>(null);
    const spaceshipsRef = React.useRef<HTMLInputElement>(null);
    const [spaceships, setSpaceships] = React.useState<Army[]>([]);

    const buildTeams = () => {
        if (teamRef.current && spaceshipsRef.current) {
            const teamNum = parseInt(teamRef.current.value) | 0;
            const spaceshipNum = parseInt(spaceshipsRef.current.value) | 0;

            const randomness = new RandomGenerator(getSpaceshipModels(teamNum));
            const teams = randomness.choiceWithFixedSum(spaceshipNum, teamNum);

            setSpaceships(teams);
        }
    };

    return (
        <div className="App">
            <h2 className="title">Build your own army</h2>
            <div className="spaceship-area">
                <label>What's the number of spaceships: </label>
                <input ref={spaceshipsRef} type="number" defaultValue={100} />
            </div>
            <div className="team-area">
                <label>How many team do you want to create: </label>
                <input ref={teamRef} type="number" defaultValue={4} />
            </div>
            <button className="submit" onClick={buildTeams}>Build</button>
            <SpaceShips data={spaceships} />
        </div>
    );
}

export default App;
