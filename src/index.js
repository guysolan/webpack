import css from "./style.css";
import copyToClipboard from "./copyToClipboard.js"
import navToggle from "./navToggle.js"
import Nav from "./components/nav.js"
import Footer from "./components/footer.js"
import "./favicons.js"



require("./images/night-splint.png")
require("./images/trauma-splint.png")
require("./images/logo-background.svg")
require("./images/idea-arrow.svg")
require("./images/lightbulb.svg")
require("./images/design-arrow.svg")
require("./images/gears.svg")
require("./images/testing-arrow.svg")
require("./images/clipboard.svg")
require("./images/fraction-9.0.svg")
require("./images/fraction-8.6.svg")
require("./images/fraction-8.7.svg")
require("./images/hospital.svg")
require("./images/pharmacy.svg")
require("./images/insurance.svg")
require("./images/UK.svg")
require("./images/social-media-email.svg")
require("./images/social-media-linkedin.svg")
require("./images/social-media-insta.svg")
require("./images/social-media-facebook.svg")
require("./images/logo.svg")

console.log('Run from index.js')

customElements.define('nav-component', Nav);
customElements.define('footer-component', Footer);



// copyToClipboard()

const burger = document.querySelector(".burger");
const navbar = document.querySelector(".nav-bar");

burger.addEventListener("click", navToggle);
