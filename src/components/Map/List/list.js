// == Import : npm
import { useState, useContext, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import : components
import ListModal from "./ListModal/listModal";
import Card from "./Card/card";

// == Import : local
import useModal from "../../../hooks/useModal";
import { UserContext } from "../../../context/userContext";
import './list.scss';

const List = ({ dataInfo, selectedId }) => {
    const { isOpen, toggle } = useModal();
    const [state] = useContext(UserContext);
    const { isLogged } = state;
    const [markerOwner, setMarkerOwner] = useState({ pseudo: 'toto', userId: 123 });

    const listZone = useRef(null);
    const cardItem = useRef(null);

    useEffect(() => {
        if (cardItem.current) {
            const heightToSkip = listZone.current.childNodes[0].offsetTop;
            listZone.current.scrollTo({
                top: (cardItem.current.offsetTop - heightToSkip),
                left: 0,
                behavior: 'smooth',
            });
        }
    }, [cardItem, selectedId]);

    const counterTitle = (length) => {
        let title = 'Aucun point de compostage trouvé';

        if (length === 1) {
            title = '1 point de compostage trouvé';
        }
        else if (length > 1) {
            title = `${length} points de compostage trouvés`;
        }
        return title;
    };
    return (
        <div className="list">
            {dataInfo && (
                <>
                    <h1 className="list-title">
                        {counterTitle(dataInfo.length)}
                    </h1>
                    <div className="list-marker" ref={listZone}>
                        {dataInfo.map((dataMarker) => {
                            let messageAvailability;
                            switch (dataMarker.category) {
                                case 'marron':
                                    messageAvailability = 'Accepte les déchets de type brun';
                                    break;
                                case 'vert':
                                    messageAvailability = 'Accepte les déchets de type vert';
                                    break;
                                case 'tous types':
                                    messageAvailability = 'Accepte tous types de déchets compostable';
                                    break;
                                default:
                                    messageAvailability = 'N\'accepte pas de déchets pour le moment';
                                    break;
                            }
                            return (
                                <Card
                                    key={dataMarker.id}
                                    pseudo={dataMarker.username}
                                    message={messageAvailability}
                                    userId={dataMarker.user_id}
                                    toggleLinking={toggle}
                                    setOwnerPoint={setMarkerOwner}
                                    isLogged={isLogged}
                                    selectedId={selectedId}
                                    ref={cardItem}
                                />
                            );
                        })}
                    </div>
                    <ListModal isOpen={isOpen} hide={toggle} markerOwner={markerOwner} />
                </>
            )}
        </div>
    );
};

List.propTypes = {
    dataInfo: PropTypes.array,
    selectedId: PropTypes.number,
};

List.defaultProps = {
    dataInfo: null,
    selectedId: null,
};

export default List;
