import React from "react";
import { SpaceShips } from "./components/SpaceShips";
import { RandomGenerator } from "./helpers/RandomGenerator";
import { getSpaceshipModels } from "./mocks/spaceships";
import "./App.css";
import { Army } from "./models/spaceship";

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
            <h2>Build your own army</h2>
            Spaceship?{" "}
            <input ref={spaceshipsRef} type="number" defaultValue={167} />
            <br />
            Number of teams?{" "}
            <input ref={teamRef} type="number" defaultValue={4} />
            <br />
            <button onClick={buildTeams}>Build</button>
            <SpaceShips data={spaceships} />
        </div>
    );
}

export default App;
