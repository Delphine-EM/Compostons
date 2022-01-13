// == Import : components
import Card from "./Card/card";

// == Import : local
import ressources from "../../data/ressources";

/**
 * Permet d'afficher la liste de toutes les ressources, via le composant Card.
 * @returns {JSX.Element}
 */
const Ressources = () => (
    <div className="articles">
        {ressources.map((article) => (
            <Card
                key={article.id}
                {...article}
            />
        ))}
    </div>
);

export default Ressources;
