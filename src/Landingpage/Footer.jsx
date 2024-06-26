import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">My Travel Diary</h1>
          <p>
            My Travel Diary is an award-winning travel blog about destinations, lifestyles, people, and cultures. The blog has been continuously featured by some of the most esteemed publications, TV channels, radio stations, online portals, and newspapers.
          </p>
          <div className="socials">
            <a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://twitter.com/your-twitter-profile"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.instagram.com/your-instagram-profile  "><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.pinterest.com/your-pinterest-profile"><FontAwesomeIcon icon={faPinterest} /></a>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Stay</a></li>
            <li><a href="#">Cuisines</a></li>
          </ul>
        </div>
        <div className="footer-section latest-posts">
           <h2>Latest Posts</h2>
       <ul>
           <li><a href="#">Exploring the Western Ghats: Top Destinations in Maharashtra - June 24, 2024</a></li>
               <li><a href="#">Hidden Gems of Mumbai: Offbeat Experiences in the City - June 15, 2024</a></li>
  </ul>
</div>

       
      </div>
      <div className="footer-bottom">
        &copy; 2024  | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
