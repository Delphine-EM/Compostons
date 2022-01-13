// == Import : npm
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// == Import : components
import SendMessage from "./SendMessage/sendMessage";

// == Import : local
import './listModal.scss';

const ListModal = ({ isOpen, hide, markerOwner }) => {
    const target = document.getElementById('root');
    return (
        isOpen
            ? ReactDOM.createPortal(
                <div className="modal-overlay">
                    <div className="modal-wrapper">
                        <div className="modal">
                            <SendMessage hide={hide} markerOwner={markerOwner} />
                        </div>
                    </div>
                </div>,
                target,
            )
            : null
    );
};

ListModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    hide: PropTypes.func.isRequired,
    pointOwner: PropTypes.object,
};

export default ListModal;
