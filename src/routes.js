import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Header from './Components/Header';
import Erro from './pages/Error'
import Produto from './pages/Produto';


const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/> 
                <Route exact path="/sobre" component={Sobre}/>
                <Route exact path="/contato" component={Contato}/>
                <Route path="/produto/:id" component={Produto} />

                <Route path="*" component={Erro} />
            </Switch>
            
        </BrowserRouter>
    )
}

export default Routes;

// o exact define que so chame a pagina se a url for exatamente a que está no path
// Switch permite que carregue apenas uma pagina por vez