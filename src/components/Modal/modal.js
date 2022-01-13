// == Import : npm
import { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// == Import : components
import Login from "../Login/login";
import Register from "../Register/register";

// == Import : local
import './modal.scss';

/**
 * Modal permettant à un utilisateur non connecté de se créer un compte ou de se connecter.
 * @param {boolean} isOpen
 * @param {function} hide
 * @returns {JSX.Element|null}
 * @constructor
 */
const Modal = ({ isOpen, hide }) => {
    const [isLogin, setIsLogin] = useState(true);
    const modalOverlayRef = useRef(null);
    const target = document.getElementById('root');

    return (
        isOpen
            ? ReactDOM.createPortal(
                <div className="modal-overlay" ref={modalOverlayRef}>
                    <div className="modal-wrapper">
                        <div className="modal">
                            {
                                isLogin
                                    ? <Login hide={hide} setIsLogin={setIsLogin} ref={modalOverlayRef} />
                                    : <Register hide={hide} setIsLogin={setIsLogin} ref={modalOverlayRef} />
                            }
                        </div>
                    </div>
                </div>,
                target,
            )
            : null
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    hide: PropTypes.func.isRequired,
};

export default Modal;
