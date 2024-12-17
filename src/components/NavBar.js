import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/books">Lien-React</Link>
    </nav>
  );
}

export default NavBar;
