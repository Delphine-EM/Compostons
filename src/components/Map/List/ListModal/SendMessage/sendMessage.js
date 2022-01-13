// == Import : npm
import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// == Import : local
import { UserContext } from "../../../../../context/userContext";
import './sendMessage.scss';

const SendMessage = ({ hide, markerOwner }) => {
    const [textValue, setTextValue] = useState('');
    const [linkingMessage, setLinkingMessage] = useState('');
    const [state] = useContext(UserContext);
    const { mail, id, jwtToken } = state;

    const handleSubmit = (e) => {
        e.preventDefault();
        setLinkingMessage('Envoi en cours');
        const token = {
            headers: { authorization: `Bearer ${jwtToken}` },
        };
        axios.post(`https://compostons.herokuapp.com/users/${id}/mail`, {
            ownerId: markerOwner.userId,
            replyTo: mail,
            text: textValue,
            html: textValue,
        }, token)
            .then((response) => {
                setLinkingMessage('Mail envoyé');
                setTimeout(() => {
                    setLinkingMessage('');
                    hide();
                }, 3000);
            })
            .catch((error) => {
                setLinkingMessage('Une erreur est survenue, veuillez ré-essayer plus tard');
                console.log(error);
            });
    };

    return (
        <>
            <div className="modal-header">
                <h2>Entrer en contact avec {markerOwner.pseudo}</h2>
                <button
                    name="Fermeture"
                    type="button"
                    className="modal-close-button"
                    onClick={hide}
                >
                    <span>&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form
                    className="linking-form"
                    onSubmit={handleSubmit}
                >
                <textarea
                    name="linking-text"
                    id="linking-text"
                    cols="30"
                    rows="10"
                    value={textValue}
                    onChange={(e) => setTextValue(e.target.value)}
                />
                {linkingMessage
                    ? <div className="linking-form-message">{linkingMessage}</div>
                    : (
                        <button
                            className="linking-form-submit"
                            type="submit"
                        >
                            Envoyer
                        </button>
                    )
                }
                </form>
            </div>
        </>
    );
};

SendMessage.propTypes = {
    hide: PropTypes.func.isRequired,
    markerOwner: PropTypes.object.isRequired,
};

export default SendMessage;
