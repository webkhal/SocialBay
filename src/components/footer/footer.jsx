import React from 'react';
import 'primeflex/primeflex.css';
import './footer.css';

function Footer() {
  return (
    <footer className="footer-container">
   
     
        <p>© {new Date().getFullYear()} Social bay. All rights reserved.</p>
    
    </footer>
  );
}

export default Footer;
