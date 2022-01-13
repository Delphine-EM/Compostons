// == Import : local
import errorImage from '../../assets/images/error-img.png';
import './error.scss';

/**
 * Composant permettant d'afficher un message d'erreur lorsque l'utilisateur essaie d'accéder
 * à une URL invalide.
 * @returns {JSX.Element}
 */
const Error = () => (
    <>
        <div className="error">
            <p className="error-message">Oops il semblerait que cette page n'existe pas !</p>
        </div>
        <div className="image-container">
            <img src={errorImage} className="error-image" alt="Dessin d'une poule à l'air perdue, page inexistante" />
        </div>
    </>
);

export default Error;
