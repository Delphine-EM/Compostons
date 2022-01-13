// == Import : npm
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// == Import : components
import Confirm from "./Confirm/confirm";

// == Import : local
import './dashboardModal.scss';

/**
 * Composant permettant d'afficher un modal dans le composant "Dashboard" et d'y afficher le contenu
 * du composant "Confirm"
 * @param {boolean} isOpen
 * @param {function} hide
 */
const DashboardModal = ({ isOpen, hide }) => {
    const target = document.getElementById('root');
    return (
        isOpen
            ? ReactDOM.createPortal(
                <div className="modal-overlay">
                    <div className="modal-wrapper">
                        <div className="modal-confirm">
                            <Confirm hide={hide} />
                        </div>
                    </div>
                </div>,
                target,
            )
            : null
    );
};

DashboardModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    hide: PropTypes.func.isRequired,
};

export default DashboardModal;

