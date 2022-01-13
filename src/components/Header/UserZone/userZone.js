// == Import : npm
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import { UserContext } from "../../../context/userContext";

/**
 * Permet à l'utilisateur connecté d'accèder à son espace personnel.
 * @param {function} setIsShowing
 * @returns {JSX.Element}
 */
const UserZone = ({ setIsShowing }) => {
    const [state, dispatch] = useContext(UserContext);

    const handleLogoutButton = () => {
        dispatch({ type: 'LOGOUT' });
        setIsShowing(false);
    };

    return (
        <div className="userzone">
            <button
                name="Fermeture"
                type="button"
                className="userzone-close-button"
                onClick={() => setIsShowing(false)}
            >
                <span>&times;</span>
            </button>

            <Link to="/profil">
                <button
                    name="Profil"
                    type="button"
                    className="userzone-profil-button"
                    onClick={() => setIsShowing(false)}
                >
                    Mon profil
                </button>
            </Link>

            <button
                name="Déconnexion"
                type="button"
                className="userzone-logout-button"
                onClick={handleLogoutButton}
            >
                Déconnexion
            </button>
        </div>
    );
};

UserZone.propTypes = {
    setIsShowing: PropTypes.func.isRequired,
};

export default UserZone;
