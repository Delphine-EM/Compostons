// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : components
import Modal from "../../../Modal/modal";

// == Import : local
import useModal from "../../../../hooks/useModal";
import './card.scss'

const Card = React.forwardRef(({
    pseudo,
    message,
    userId,
    toggleLinking,
    setOwnerPoint,
    isLogged,
    selectedId,
}, ref) => {
    const { isOpen, toggle } = useModal();

    const handleClick = () => {
        setOwnerPoint({ userId: userId, pseudo: pseudo });
        toggleLinking();
    };

    const handleClickConnection = () => {
        toggle();
    };

    return (
        <>
            <div
                className={`list-card ${selectedId === userId ? 'active' : ''}`}
                ref={selectedId === userId ? ref : null}
            >
                <p className="list-card-pseudo">
                    {pseudo}
                </p>
                <p className="list-card-message">
                    {message}
                </p>
                {isLogged
                    ? <button name={userId} type="button" className="button-linking" onClick={handleClick}>Envoyer un message</button>
                    : <button type="button" onClick={handleClickConnection} className="button-linking">Se connecter pour le (la) contacter</button>
                }
            </div>
            <Modal isOpen={isOpen} hide={toggle} />
        </>
    );
});

Card.propTypes = {
    pseudo: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    toggleLinking: PropTypes.func.isRequired,
    setOwnerPoint: PropTypes.func.isRequired,
    isLogged: PropTypes.bool.isRequired,
    selectedId: PropTypes.number,
};

Card.defaultProps = {
    selectedId: null,
};

export default Card;
