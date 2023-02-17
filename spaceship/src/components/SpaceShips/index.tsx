import { Army } from "../../models/spaceship";
import './spaceship.scss';

interface IProps {
    data: Army[];
}

export const SpaceShips: React.FC<IProps> = ({ data }) => {
    return (
        <div className="spaceship">
            {data.map((item, index) => (
                <div className="spaceship-item" key={`${index}`}>
                    <br />
                    <h2>Team {item.spaceship?.name}</h2>
                    <p>
                        Quantity: <strong>{item.quantity}</strong>
                    </p>
                    <br />
                    <p>
                        Type: <strong>{item.spaceship?.type}</strong>
                    </p>
                    <p>
                        Health: <strong>{item.spaceship?.health}</strong>
                    </p>
                    <p>
                        Attack: <strong>{item.spaceship?.attack}</strong>
                    </p>
                    <p>
                        Defense: <strong>{item.spaceship?.defense}</strong>
                    </p>
                    <p>
                        Speed: <strong>{item.spaceship?.speed}</strong>
                    </p>
                    <p>
                        Ranged: <strong>{item.spaceship?.ranged}</strong>
                    </p>
                    <p>
                        Can boost?:{" "}
                        <strong>{`${item.spaceship?.canBoost}`}</strong>
                    </p>
                </div>
            ))}
        </div>
    );
};
