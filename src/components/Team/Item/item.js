// == Import : npm
import PropTypes from 'prop-types';

/**
 * Composant utilisé dans le composant "Team" afin d'afficher chaque personne ayant participé au projet.
 * @param {string} gitlogo
 * @param {Object} dude
 * @returns {JSX.Element}
 */
const Item = ({
    gitlogo,
    ...dude
}) => {
    return (
        <div className="dude-profil_container">
            <h3 className="dude-title"> {dude.lastname}</h3>
            <div
                className="dude-picture"
            > <img src={dude.picture} alt={dude.alt} />
            </div>
            <div className="dude-job">
                {dude.job}
            </div>
            <div className="dude-infos">
                <a href={dude.infos}>
                    <img
                        src={gitlogo}
                        alt="logo github"
                    />
                </a>
            </div>
        </div>
    );
}

Item.propTypes = {
    gitlogo: PropTypes.string.isRequired,
    dude: PropTypes.arrayOf(PropTypes.shape({
        picture: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        job: PropTypes.string.isRequired,
        techno: PropTypes.string.isRequired,
        infos: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
    })),
};

Item.defaultProps = {
    dude: [],
};

export default Item;
