// == Import : npm
import { useEffect, useState } from 'react';
import { isPointWithinRadius } from 'geolib';
import axios from 'axios';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { GeoSearchControl, MapBoxProvider } from 'leaflet-geosearch';
import {
    MapContainer,
    useMap,
    TileLayer,
    Marker,
    Popup,
} from 'react-leaflet';

// == Import : components
import List from "./List/list";

// == Import : local
import {
    greenIcon,
    brownIcon,
    redIcon,
    lightGreenIcon,
} from "../../tools/icons";
import './map.scss';

const SearchField = ({ onShowLocation }) => {
    const provider = new MapBoxProvider({
        params: {
            access_token: process.env.REACT_APP_MAP_API_KEY,
        },
    });

    const searchControl = new GeoSearchControl({
        style: 'bar', // défini le format du champ de recherche
        provider: provider,
        notFoundMessage: 'Désolé, l\'adresse saisie ne peut être trouvé', // message en cas de fausse adresse
        searchLabel: 'Trouver un point de compost près de chez vous', // placeholder
    });

    const map = useMap();

    useEffect(() => {
        map.addControl(searchControl);
        return () => map.removeControl(searchControl);
    }, []);

    useEffect(() => {
        map.on('geosearch/showlocation', (e) => {
            onShowLocation(e);
        });
    }, []);

    return null;
};

const Map = () => {
    const [coords, setCoords] = useState({ x: null, y: null });
    const [dataInfo, setDataInfo] = useState([]);
    const [newDataInfo, setNewDataInfo] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        axios.get('https://compostons.herokuapp.com/composts')
            .then((response) => {
                setDataInfo(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        if (dataInfo.length) {
            setNewDataInfo([]);
            dataInfo.forEach((element) => {
                const isInPerimeter = isPointWithinRadius({ latitude: element.latitude, longitude: element.longitude }, { latitude: coords.y, longitude: coords.x }, 2000);

                if (isInPerimeter) {
                    setNewDataInfo((prevState) => [...prevState, element]);
                }
            });
        }
    }, [coords]);

    const displayMarker = (data) => data.map((marker) => {
        let messageAvailability, iconType;

        switch (marker.category) {
            case 'marron':
                messageAvailability = 'Accepte les déchets de type brun';
                iconType = brownIcon;
                break;
            case 'vert':
                messageAvailability = 'Accepte les déchets de type vert';
                iconType = lightGreenIcon;
                break;
            case 'tous types':
                messageAvailability = 'Accepte tous types de déchets compostable';
                iconType = greenIcon;
                break;
            default:
                messageAvailability = 'N\'accepte pas de déchets pour le moment';
                iconType = redIcon;
                break;
        }

        return (
            <Marker
                key={marker.id}
                position={[marker.latitude, marker.longitude]}
                icon={iconType}
                eventHandlers={{
                    click: () => {
                        setSelectedId(marker.user_id);
                    },
                }}
            >
                <Popup>
                    {marker.username} <br />
                    {messageAvailability}
                </Popup>
            </Marker>
        );
    });

    return (
        <div className="map">
            <div className="map-title">
                <h1 className="welcome-title">Bienvenue sur CompOstons</h1>
                <p className="intro">
                    Notre but est de faciliter la mise en relation entre les personnes  qui
                    souhaitent proposer leur compost et les personnes qui souhaitent réduire leurs
                    déchets ménagers.
                </p>
                <p className="map-use">
                    Trouvez dès maintenant les points de compost les plus proches de chez vous en
                    saisissant votre adresse.
                </p>
            </div>
            <div className="map-list-container">
                <div className="map-leaflet">
                    <MapContainer center={[46.9, 2.61878695312962]} zoom={5.5} className="map-leaflet-container">
                        <SearchField
                            apiKey={process.env.REACT_APP_MAP_API_KEY}
                            onShowLocation={(e) => {
                                setCoords({ x: e.location.x, y: e.location.y });
                            }}
                        />
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <MarkerClusterGroup
                            maxClusterRadius={70}
                        >
                            {
                                newDataInfo.length > 0
                                    ? displayMarker(newDataInfo)
                                    : displayMarker(dataInfo)
                            }
                        </MarkerClusterGroup>
                    </MapContainer>
                </div>
                {
                    newDataInfo.length > 0
                        ? <List dataInfo={newDataInfo} selectedId={selectedId} />
                        : <List dataInfo={dataInfo} selectedId={selectedId} />
                }
            </div>
        </div>
    );
};

export default Map;
