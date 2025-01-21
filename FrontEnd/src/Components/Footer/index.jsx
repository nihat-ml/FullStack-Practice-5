import React from 'react';

function Footer() {
  return (
    <footer style={{ padding: '20px', background: '#ccc', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      
        <div>
          <h4>Navigations</h4>
          <ul>
            <li>Sell online</li>
            <li>Features</li>
            <li>Shopping cart</li>
            <li>Store builder</li>
          </ul>
        </div>

       
        <div>
          <h4>Promo</h4>
          <img src="shoe_image.png" alt="Promo Shoes" style={{ width: '150px', borderRadius: '8px' }} />
          <p><a href="#">Finding Your Perfect Shoes</a></p>
          <p>Promo from January 15 — 25, 2019</p>
        </div>

       
        <div>
          <h4>Contact Info</h4>
          <p>📍 203 Fake St. Mountain View, San Francisco, California, USA</p>
          <p>📞 +2 392 3929 210</p>
          <p>📧 emailaddress@domain.com</p>
        </div>

      
        <div>
          <h4>Subscribe</h4>
          <input type="email" placeholder="Email" style={{ padding: '5px', marginRight: '5px' }} />
          <button style={{ background: 'purple', color: 'white', padding: '5px 10px' }}>SEND</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
