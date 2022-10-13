import './style.css'
import { nav } from './components/Nav/nav';
import { footer } from './components/Footer/footer';
import { Champions } from './pages/Champions/champ';
import { Home } from './pages/Home/home';
import { Places } from "./pages/Places/places";
import { Brands } from "./pages/Brands/brands"
import { linkPg } from './utils/links';

const header = document.querySelector("header");
header.innerHTML = nav();

const footerDiv = document.querySelector("footer");
footerDiv.innerHTML = footer();

Home();
linkPg("#homeLink", Home);
linkPg("#championsLink", Champions);
linkPg("#placesLink", Places);
linkPg("#brandsLink", Brands)