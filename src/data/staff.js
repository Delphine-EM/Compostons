// == Import : local
import avocado from '../assets/images/avocat.png';
import mandarin from '../assets/images/mandarine.png';
import pear from '../assets/images/poire.png';
import melonWater from '../assets/images/pasteque.png';
import carrot from '../assets/images/carotte.png';

const dudes = [
    {
        id: 1,
        lastname: 'Delphine',
        infos: 'https://github.com/Delphine-EM',
        job: 'Référente Tech, Front',
        picture: `${mandarin}`,
        alt: 'dessin d\'un avocat',
    },
    {
        id: 2,
        lastname: 'Loïc',
        infos: 'https://github.com/LoicFort',
        job: 'Lead-dev Back',
        picture: `${melonWater}`,
        alt: 'dessin d\'une pastèque',
    },
    {
        id: 3,
        lastname: 'Florian',
        infos: 'https://github.com/Florian-Vallois',
        job: 'Lead-dev Front',
        picture: `${carrot}`,
        alt: 'dessin d\'une carotte',
    },
    {
        id: 4,
        lastname: 'Marc',
        infos: 'https://github.com/Macoltat',
        job: 'Scrum Master, Front',
        picture: `${avocado}`,
        alt: 'dessin d\'un avocat',
    },
    {
        id: 5,
        lastname: 'Faustino',
        infos: 'https://github.com/PiccilloF',
        job: 'Product Owner, Front',
        picture: `${pear}`,
        alt: 'dessin d\'une poire',
    }
];

export default dudes;
