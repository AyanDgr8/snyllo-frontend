// src/components/routes/Header.js

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <img
              src="https://alienotion.live/wp-content/uploads/2023/11/SynlloEsteticaHorizontalLogoTransparent01-1-166x42.png"
              alt="Snyllo Estetica"
              decoding="async"
              srcSet="https://alienotion.live/wp-content/uploads/2023/11/SynlloEsteticaHorizontalLogoTransparent01-1-166x42.png 1x, http://alienotion.live/wp-content/uploads/2023/11/SynlloEsteticaHorizontalLogoTransparent01-1.png 2x"
              sizes="(max-width: 166px) 100vw, 166px"
            />
          </div>
          <div className="buttons">
            <button onClick={() => window.open('https://alienotion.live/?page_id=5425', '_blank')} className="button">Benefits of LHR</button>
            <button onClick={() => window.open('https://alienotion.live/?page_id=5407', '_blank')} className="button">Products</button>
            <button onClick={() => window.open('https://alienotion.live/?page_id=5421', '_blank')} className="button">Treatments</button>
            <button onClick={() => window.open('https://alienotion.live/?page_id=5410', '_blank')} className="button">Technology</button>
            <button onClick={() => window.open('https://alienotion.live/?page_id=32', '_blank')} className="button">Prices & Services</button>
            <button onClick={() => window.open('https://alienotion.live/?page_id=32', '_blank')} className='button contact'>Contact Us</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
