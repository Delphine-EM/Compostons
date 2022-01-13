// == Import : npm
import { Redirect, useParams } from 'react-router-dom';

// == Import : local
import ressources from '../../data/ressources';
import './ressource.scss';

/**
 * Permet d'afficher le détail d'une ressource.
 * @returns {JSX.Element}
 */
const Ressource = () => {
    const { slug } = useParams();
    const article = ressources.find((item) => item.slug === slug);

    if (!article) {
        return <Redirect to="/error" />;
    }

    return (
        <div className="article">
            <img src={article.img} alt={article.legende} className="article-img" />
            <h1 className="article-title">
                {article.title}
            </h1>
            <p className="article-intro">
                {article.intro}
            </p>
            <p className="article-text">
                {article.text}
            </p>
        </div>
    );
};

export default Ressource;
