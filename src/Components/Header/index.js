import { Link } from "react-router-dom";


const Header = () => {
    return ( 
        <header>
            <h2>Header da Página </h2>
            <Link to="/contato">Contatos</Link>
        </header>
     );
}
 
export default Header;