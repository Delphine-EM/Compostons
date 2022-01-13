// == Import : npm
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

// == Import : local
import { UserContext } from '../../../../context/userContext';
import './confirm.scss';

/**
 * Composant permettant à l'utilisateur de valider, ou non, la supression de son compte.
 * Ce composant est affiché dans le modal (DashboardModal) lié au composant "Dashboard".
 * @param {function} hide
 * @returns {JSX.Element}
 */
const Confirm = ({ hide }) => {
    const history = useHistory();
    const [state, dispatch] = useContext(UserContext);
    const { id, jwtToken } = state;

    // Redirection sur la page d'accueil à la soumission du formaulaire
    const onDeletedAccountRedirect = () => {
        const url = '/';
        history.push(url);
    };

    // Soumission du formulaire et requête pour supprimer un compte utilisateur
    const handleAccountDeleteButton = () => {
        const token = {
            headers: { authorization: `Bearer ${jwtToken}` },
        };
        axios.delete(`https://compostons.herokuapp.com/users/${id}`, token)
            .then((response) => {
                dispatch({
                    type: 'LOGOUT',
                });
                onDeletedAccountRedirect();
            })
            .catch((error) => {
                console.log('error', error);
            });
    };

    return (
        <div className="confirm-modal_container">
            <div className="confirm-modal_header">
                <p>Êtes-vous sûr ?</p>
                <button
                    name="Fermeture"
                    type="button"
                    className="confirm-modal_close-button"
                    onClick={hide}
                >
                    <span>&times;</span>
                </button>
            </div>
            <div className="buttons-block">
                <button
                    className="delete__button"
                    type="button"
                    onClick={handleAccountDeleteButton}
                >
                    Supprimer
                </button>
                <button
                    className="abort__button"
                    type="button"
                    onClick={hide}
                >
                    Annuler
                </button>
            </div>
        </div>
    );
};

Confirm.propTypes = {
    hide: PropTypes.func.isRequired,
};

export default Confirm;
