import { NavLink } from "react-router-dom";
import '../styles/ErrorPage.scss';
import '../styles/_mixins.scss';
import '../styles/_variables.scss';

function ErrorPage() {
  return (
    <div id="error-page">
      <h1 className="title_errorPage">404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <p className="PLink">
        <NavLink to="/" className="link_acueil active">Retourner sur la page d'accueil</NavLink>
      </p>
    </div>
  );
}

export default ErrorPage;
