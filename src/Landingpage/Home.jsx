import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';
import mrunali from './mrunali.jpg';
import Headerimage1 from './Headerimage1.jpg';
import header33 from './header33.jpg';
import header99 from './header99.jpeg';
import img1 from './img1.jpeg';
import img2 from './img2.jpeg';

const Home = () => {
  return (
    <main className="main">
      {/* Carousel Component */}
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
          <img src={mrunali} alt="Destination 1" />
          <p className="legend">Beautiful Beach</p>
        </div>
        <div>
          <img src={Headerimage1} alt="Destination 2" />
          <p className="legend">Mountain Adventure</p>
        </div>
        <div>
          <img src={header33} alt="Destination 3" />
          <p className="legend">City Lights</p>
        </div>
        <div>
          <img src={header99} alt="Destination 4" />
          <p className="legend">Historical places</p>
        </div>
      </Carousel>

      {/* Project Partners Section */}
      <section className="project-partners">
        <h2>Our Project Partners</h2>
        <div className="partners-grid">
          <div className="partner-card">
            <img src={img1} alt="Partner 1" />
            <p>Name: Dhanashri Nimbhorkar</p>
            <p className="work">Merged codes</p>
          </div>
          <div className="partner-card">
            <img src={img2} alt="Partner 2" />
            <p>Name: Sakshi Manakar</p>
            <p className="work">Login Page</p>
          </div>
          <div className="partner-card">
            <img src={img1} alt="Partner 3" />
            <p>Name: Yamini Shende</p>
            <p className="work">Cuisines</p>
          </div>
          <div className="partner-card">
            <img src={img2} alt="Partner 4" />
            <p>Name: Nikita Sirsat</p>
            <p className="work">Stay</p>
          </div>
          <div className="partner-card">
            <img src={img1} alt="Partner 5" />
            <p>Name: Mrunali Gore</p>
            <p className="work">Landing Page</p>
          </div>
          <div className="partner-card">
            <img src={img2} alt="Partner 6" />
            <p>Name: Samiksha Malasne</p>
            <p className="work">Search Places</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
