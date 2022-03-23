export default class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section id='contact' class='footer'>
      <div class="footer-content">
         <div class='footer-words'>
            <div class='footer-title'>
               <h2>Contact</h2>
               <img src="../dist/images/logo.svg" alt="Logo Image">
            </div>
            <div class="links-row">
               <div class="links-column">
                  <h3>Company</h3>
                  <a href="../">Home</a>
                  <a href="../contact.html">Contact Us</a>
                  <h3>Products</h3>
                  <a href="../night-splint.html">Achilles Rupture Night Splint</a>
                  <a href="../trauma-splint.html">Achilles Rupture Trauma Splint</a>
               </div>
               <div class="links-column">
                  <h3>Information</h3>
                  <a href="../achilles-ruptures.html">Achilles Ruptures</a>
                  <a href="../FAQs/achilles-rupture-timeline.html">Achilles Rupture Timeline</a>
                  <a href="../FAQs/is-my-achilles-ruptured.html">Is my Achilles Ruptured?</a>
                  <a href="../FAQs/what-happens-if-my-achilles-is-ruptured?">What happens if my Achilles is ruptured?</a>
                  <a href="../FAQs/achilles-tear-treatment.html">Achilles Tear Treatment</a>
                  <a href="../FAQs/torn-achilles-recovery.html">Torn Achilles Recovery</a>
                  <a href="../FAQs/life-after-achilles-rupture.html">Life After Achilles Rupture</a>
               </div>
               <div class="links-column">
                  <h3>Stay in Touch</h3>
                  <a class='invert' target="_blank"
                  href='mailto:info@thetismedical.com'>Email Us</a>
               <a class='invert' target="_blank" href='https://www.linkedin.com/company/thetis-medical-ltd'>LinkedIn</a>
               <a class='invert' target="_blank" href='https://www.instagram.com/thetismedical/'>Instagram</a>
               <a class='invert' target="_blank" href='https://www.facebook.com/thetismedical'>Facebook</a>
               </div>
            </div>
            <div class="socials">
               <a class='invert' target="_blank"
                  href='mailto:info@thetismedical.com'><img
                     src="../dist/images/social-media-email.svg" alt="Email Icon"></a>
               <a class='invert' target="_blank" href='https://www.linkedin.com/company/thetis-medical-ltd'><img
                     src="../dist/images/social-media-linkedin.svg" alt="Linkedin Icon"></a>
               <a class='invert' target="_blank" href='https://www.instagram.com/thetismedical/'><img
                     src="../dist/images/social-media-insta.svg" alt="Instagram Icon"></a>
               <a class='invert' target="_blank" href='https://www.facebook.com/thetismedical'><img
                     src="../dist/images/social-media-facebook.svg" alt="Facebook Icon"></a>
            </div>
            <p>&copy;Thetis Medical Ltd 2022</p>
         </div>
      </div>
   </section>
        `;
    }
  }
  