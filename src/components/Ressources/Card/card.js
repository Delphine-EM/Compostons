// == Import : npm
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import './card.scss';

/**
 * Composant utilisé dans le composant "Ressources" afin d'afficher chaque ressource disponible.
 * @param {string} title
 * @param {string} imgcard
 * @param {string} legende
 * @param {string} intro
 * @param {string} slug
 * @returns {JSX.Element}
 */
const Card = ({
    title,
    imgcard,
    legende,
    intro,
    slug,
}) => (
    <div className="card">
        <img src={imgcard} alt={legende} className="card-image" />
        <div className="card-description">
            <h2 className="card-description-title">{title}</h2>
            <p className="card-description-intro">{intro}</p>
            <Link to={`/ressources/${slug}`} className="card-link">Lire la suite</Link>
        </div>
    </div>
);

Card.propTypes = {
    title: PropTypes.string.isRequired,
    imgcard: PropTypes.string.isRequired,
    legende: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
};

export default Card;
