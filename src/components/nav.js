export default class Nav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
<div class='nav-bits'>
   <div class='nav-text'>
      <h2>About Us</h2>
      <p>At Thetis Medical, our sole focus is making medical splints for Achilles Tendon injuries.</p>
      <p>We combine the knowledge of experienced orthopaedic specialists with design and engineering
         technology. Our
         patented design creates a comfortable and secure splint.</p>
      <p>Thetis splints improve the recovery experience for patients, save hospital staff time and reduce
         costs.</p>
   </div>
   <div class="nav-links">
      <a href='./achilles-ruptures.html'>
         <h3>Rupture FAQs</h3>
      </a>
      <a href='./night-splint.html'>
         <h3>Night Splint</h3>
      </a>
      <a href='./trauma-splint.html'>
         <h3>Trauma Splint</h3>
      </a>
   </div>
</div>
<div class="footer-content nav">
   <div class='footer-words'>
      <div class="socials">
         <a class='invert' target="_blank"
            href='https://us5.list-manage.com/contact-form?u=c24150147626fd5e19c7684c6&form_id=06069b6e5471c060d76fb6ebe2d5adc7'><img
               src="./images/social-media-email.svg" alt="Email Icon"></a>
         <a class='invert' href='https://www.linkedin.com/company/thetis-medical-ltd'><img
               src="./images/social-media-linkedin.svg" alt="Linkedin Icon"></a>
         <a class='invert' href='https://www.instagram.com/thetismedical/'><img
               src="./images/social-media-insta.svg" alt="Instagram Icon"></a>
         <a class='invert' href='https://www.facebook.com/thetismedical'><img
               src="./images/social-media-facebook.svg" alt="Facebook Icon"></a>
      </div>
   </div>
</div>
`;

    }
}