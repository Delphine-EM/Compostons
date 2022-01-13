// == Import : npm
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useContext } from 'react';

// == Import : components
import Header from '../Header/header';
import Ressources from '../Ressources/ressources';
import Ressource from '../Ressource/ressource';
import Dashboard from '../Dashboard/dashboard';
import Error from '../error/error';
import Team from '../Team/team';
import Footer from '../Footer/footer';

// == Import : local
import { UserContext } from '../../context/userContext';
import './app.scss';

const App = () => {
    const [state] = useContext(UserContext);
    const { isLogged } = state;

    return (
        <div className="app">
            <Header />
            <main className="main">
                <Switch>
                    <Route path={"/"} exact>
                        {/* <Map /> */}
                    </Route>
                    <Route path={"/ressources"} exact>
                        <Ressources />
                    </Route>
                    <Route path={"/ressources/:slug"} exact>
                        <Ressource />
                    </Route>
                    <Route path="/team">
                        <Team />
                    </Route>
                    {
                        isLogged
                            ? (
                                <Route path="/profil">
                                    <Dashboard />
                                </Route>
                            )
                            : (
                                <Redirect from="/profil" to="/" />
                            )
                    }
                    <Route>
                        <Error />
                    </Route>
                </Switch>
            </main>
            <Footer />
        </div>
    );
};

export default App;
