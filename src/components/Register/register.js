// == Import : npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// == Import : components
import Field from "../Field/field";

// == Import : local
import './register.scss';

/**
 * Composant qui gère la logique permettant à l'utilisateur de se créer un compte.
 * @param {function} hide
 * @param {function} setIsLogin
 * @returns {JSX.Element}
 */
const Register = React.forwardRef(({ hide, setIsLogin }, ref) => {
    const [pseudoValue, setPseudoValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [radioValue, setRadioValue] = useState('proposeur');
    const [displayValidMessage, setDisplayValidMessage] = useState(false);
    const [displayErrorMessage, setDisplayErrorMessage] = useState(false);

    useEffect(() => {
        return () => {
            setIsLogin(true);
        };
    }, []);

    const handleClickCloseModal = () => {
        setTimeout(() => {
            hide();
        }, 500);

        ref.current.classList.add('close');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('https://compostons.herokuapp.com/register', {
            mail: emailValue,
            password: passwordValue,
            username: pseudoValue,
            role: radioValue,
        })
            .then((response) => {
                if (response.status === 201) {
                    setDisplayValidMessage(true);
                    setTimeout(() => {
                        setDisplayValidMessage(false);
                        setIsLogin(true);
                    }, 3000);
                }
            })
            .catch((error) => {
                console.log('error', error);

                if (error) {
                    setDisplayErrorMessage(true);
                    setTimeout(() => {
                        setDisplayErrorMessage(false);
                        setPseudoValue('');
                        setEmailValue('');
                        setPasswordValue('');
                    }, 2500);
                }
            });
    };

    return (
        <>
            <div className="modal-header">
                <h2>Inscription</h2>
                <button
                    name="Fermeture"
                    type="button"
                    className="modal-close-button"
                    onClick={handleClickCloseModal}
                >
                    <span>&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form
                    className="inscription-form"
                    onSubmit={handleSubmit}
                >
                    <div className="input-field">
                        <Field
                            name="pseudo"
                            placeholder="Pseudo"
                            type="text"
                            value={pseudoValue}
                            onChange={(event) => setPseudoValue(event.target.value)}
                            required
                        />
                        <Field
                            name="Email"
                            placeholder="Votre adresse email"
                            type="email"
                            value={emailValue}
                            onChange={(event) => setEmailValue(event.target.value)}
                            required
                        />
                        <Field
                            name="password"
                            placeholder="Votre mot de passe"
                            type="password"
                            value={passwordValue}
                            onChange={(event) => setPasswordValue(event.target.value)}
                            required
                        />
                    </div>
                    <div className="radio-field">
                        <p className="radio-field__text">Je souhaite :</p>
                        <label htmlFor="proposeur">
                            <input
                                onChange={(event) => setRadioValue(event.target.value)}
                                type="radio"
                                id="offering"
                                name="inscriptionChoice"
                                value="proposeur"
                                className="radio-field__box"
                                checked={radioValue === 'proposeur'}
                            />
                            Proposer mon compost
                        </label>
                        <label htmlFor="searching">
                            <input
                                onChange={(event) => setRadioValue(event.target.value)}
                                type="radio"
                                id="searching"
                                name="inscriptionChoice"
                                value="chercheur"
                                className="radio-field__box"
                                checked={radioValue === 'chercheur'}
                            />
                            Trouver un compost
                        </label>
                    </div>
                    <button
                        className="inscription-form__submit"
                        type="submit"
                    >
                        S'inscrire
                    </button>
                    {displayValidMessage && <div className="validMessage">Inscription réussie ! Vous pouvez maintenant vous connecter.</div>}
                    {displayErrorMessage && <div className="errorMessage">Pseudo ou Email déjà existant</div>}
                </form>
            </div>
        </>
    );
});

Register.propTypes = {
    hide: PropTypes.func.isRequired,
    setIsLogin: PropTypes.func.isRequired,
};

export default Register;
