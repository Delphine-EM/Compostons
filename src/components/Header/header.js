// == Import : npm
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

// == Import : components
import UserZone from "./UserZone/userZone";
import Modal from "../Modal/modal";

// == Import : local
import { UserContext } from "../../context/userContext";
import useModal from "../../hooks/useModal";
import logo from '../../assets/logo.png';
import './header.scss';

/**
 * Correspond aux différents éléments présent dans le "header".
 * @returns {JSX.Element}
 */
const Header = () => {
    const { isOpen, toggle } = useModal();

    const [state] = useContext(UserContext);
    const { isLogged, username } = state;

    const [isShowing, setIsShowing] = useState(false);

    return (
        <>
            <header className="header">
                <div className="header-top">
                    <Link to="/">
                        <div className="header_title">
                            <img src={logo} className="header_title_logo" alt="Logo Compostons" />
                            <h1 className="header_title_text">CompOstons</h1>
                        </div>
                    </Link>
                    {
                        isLogged && (
                            <div className="hello-user-container">
                                <p className="hello-user-text">Bonjour {username} !</p>
                            </div>
                        )
                    }
                    <div className="nav-login">
                        <nav className="nav">
                            <Link to="/">
                                <button name="Accueil" type="button" className="nav_button">
                                    Accueil
                                </button>
                            </Link>
                            <Link to="/ressources">
                                <button name="Articles" type="button" className="nav_button">
                                    Ressources
                                </button>
                            </Link>
                        </nav>
                        {
                            isLogged
                                ? (
                                    <div className="login">
                                        <FontAwesomeIcon
                                            icon={faUserCircle}
                                            className="login_icon"
                                            onClick={() => setIsShowing(!isShowing)}
                                        />
                                        {isShowing && <UserZone setIsShowing={setIsShowing} />}
                                    </div>
                                )
                                : (
                                    <div className="login">
                                        <FontAwesomeIcon
                                            icon={faUserCircle}
                                            className="login_icon"
                                            onClick={toggle}
                                        />
                                    </div>
                                )
                        }
                    </div>
                </div>
                <div className="header-bottom">
                    <p>Rien ne se perd, rien ne se crée, (presque) tout se compost !</p>
                </div>
            </header>
            <Modal isOpen={isOpen} hide={toggle} />
        </>
    );
};

export default Header;
