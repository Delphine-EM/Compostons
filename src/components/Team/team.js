// == Import : components
import Item from "./Item/item";

// == Import : local
import gitLogo from '../../assets/images/gitlogo.png';
import dudes from "../../data/staff";
import './team.scss';

/**
 * Permet d'afficher les personnes ayant participé à ce projet via le composant Item.
 * @returns {JSX.Element}
 */
const Team = () => (
    <div className="team-container">
        <h1 className="team-container-title"> La Compost Team </h1>
        <div className="team-cards">
            {dudes.map((dude) => (
                <Item
                    key={dude.id}
                    gitlogo={gitLogo}
                    {...dude}
                />
            ))}
        </div>
    </div>
);

export default Team;
