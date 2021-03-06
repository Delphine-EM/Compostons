// == Import : npm
import { Link } from 'react-router-dom';

// == Import : local
import './footer.scss';

/**
 * Contient le "footer" à affiché.
 * @returns {JSX.Element}
 */
const Footer = () => (
    <footer className="footer">
        <div className="footer_navigation">
            <Link to="/sitemap">
                <p>Plan du site</p>
            </Link>
            <p>|</p>
            <Link to="#">
                <p>Contact</p>
            </Link>
            <p>|</p>
            <Link to="#">
                <p>Cookies</p>
            </Link>
            <p>|</p>
            <Link to="/team">
                <p>L'équipe</p>
            </Link>
        </div>
        <div className="footer_copyright">
            <p>CompostOns 2021 &copy; Tous droits réservés</p>
        </div>
    </footer>
);

export default Footer;
