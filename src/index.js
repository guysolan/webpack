import css from "./style.css";
import copyToClipboard from "./copyToClipboard.js"
import navToggle from "./navToggle.js"
import Nav from "./components/nav.js"
import Footer from "./components/footer.js"
import "./favicons.js"

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));

customElements.define('nav-component', Nav);
customElements.define('footer-component', Footer);


const burger = document.querySelector(".burger");
burger.addEventListener("click", navToggle);