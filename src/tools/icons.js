import L from 'leaflet';

const greenIcon = new L.Icon({
    iconUrl: require('../assets/images/icondarkgreen.png'),
    iconSize: [50, 50],
    popupAnchor: [0, -18],
});

const brownIcon = new L.Icon({
    iconUrl: require('../assets/images/iconbrown.png'),
    iconSize: [50, 50],
    popupAnchor: [0, -18],
});

const redIcon = new L.Icon({
    iconUrl: require('../assets/images/iconred.png'),
    iconSize: [50, 50],
    popupAnchor: [0, -18],
});

const lightGreenIcon = new L.Icon({
    iconUrl: require('../assets/images/iconlightgreen.png'),
    iconSize: [50, 50],
    popupAnchor: [0, -18],
});

export {
    greenIcon,
    brownIcon,
    redIcon,
    lightGreenIcon,
};
