import React, { useState } from 'react';
import './Stay.css';
import BookingModal from './BookingModal';

const menuItems = [
  {
    id: 1,
    title: "Delhi Hotel ",
    price: "35000/-",
    img: "https://res.cloudinary.com/simplotel/image/upload/x_0,y_78,w_1500,h_844,c_crop,q_80,fl_progressive/w_600,h_337,f_auto,c_fit/the-grand-new-delhi/Exterior__The_Grand_New_Delhi__Hotels_in_Delhi__1_lxoffk",
    desc: "Hotel California is a song by American rock band Eagles, released as the second single of their album of the same name on February 22, 1977."
  },
  {
    id: 2,
    title: "Mumbai",
    price: "33000/-",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/6b/44/1b/grand-hyatt-mumbai-hotel.jpg?w=1200&h=-1&s=1",
    desc: "Enjoy a drink at the AC Lounge before having a restful night sleep in our modern rooms."
  },
  {
    id: 3,
    title: "Nagpur",
    price: "22000/-",
    img: "https://images.trvl-media.com/lodging/4000000/3070000/3062200/3062156/4881b701.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium",
    desc: "Rating: 4.5 reviews. Price range: ₹ (Based on Average Nightly Rates for a Standard Room from our Partners)."
  },
  {
    id: 4,
    title: "Goa",
    price: "30000/-",
    img: "https://q-xx.bstatic.com/xdata/images/hotel/max1200/404879675.jpg?k=4c356c1d255d418bf06d97e2d6eeadaf0ba545e7810477fe59a16947d9b62d13&o=",
    desc: "Rating: 4.5 reviews. Price range: ₹ (Based on Average Nightly Rates for a Standard Room from our Partners)."
  },
  {
    id: 5,
    title: "Bangalore",
    price: "25000/-",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/d8/25/6b/hotel-bangalore-gate.jpg?w=700&h=-1&s=1",
    desc: "Rating: 4.5 reviews. Price range: ₹ (Based on Average Nightly Rates for a Standard Room from our Partners)."
  },
  {
    id: 6,
    title: "Manali",
    price: "10000/-",
    img: "https://assets.cntraveller.in/photos/60ba2618bfe773a828a470d9/master/w_1600%2Cc_limit/Narkanda-cottages-866x650.jpg",
    desc: "Rating: 4.5 reviews. Price range: ₹ (Based on Average Nightly Rates for a Standard Room from our Partners)."
  },
  {
    id: 7,
    title: "Vrindawan",
    price: "23000/-",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/11/ee/20/c6/glittering-amber-light.jpg",
    desc: "Rating: 4.5 reviews. Price range: ₹ (Based on Average Nightly Rates for a Standard Room from our Partners)."
  },
  {
    id: 8,
    title: "Channai",
    price: "40000/-",
    img: "https://www.thehotelguru.com/_images/be/0c/be0c0a4b1f7de04e7304ed11f0a983e1/chennai-s1180x560.jpg",
    desc: "Rating: 4.5 reviews. Price range: ₹ (Based on Average Nightly Rates for a Standard Room from our Partners)."
  },
  {
    id: 9,
    title: "Kolkata",
    price: "27000/-",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/1b/32/15/the-oberoi-grand-kolkata.jpg?w=1200&h=-1&s=1",
    desc: "Rating: 4.5 reviews. Price range: ₹ (Based on Average Nightly Rates for a Standard Room from our Partners)."
  },
  {
    id: 10,
    title: "Jaipur",
    price: "34000/-",
    img: "https://media.cntraveller.in/wp-content/uploads/2017/02/wtsinjaipurlead.jpg",
    desc: "Rating: 4.5 reviews. Price range: ₹ (Based on Average Nightly Rates for a Standard Room from our Partners)."
  },
  {
    id: 11,
    title: "Shimla",
    price: "34000/-",
    img: "https://content.r9cdn.net/rimg/himg/87/d1/cf/leonardo-1124242-The_outdoor_infinity_whirlpool-1_O-357345.jpg",
    desc: "Rating: 4.5 reviews. Price range: ₹ (Based on Average Nightly Rates for a Standard Room from our Partners)."
  },
  {
    id: 12,
    title: "Agra",
    price: "34000/-",
    img: "https://www.journeyera.com/wp-content/uploads/2020/05/best-hotels-in-agra-near-taj-mahal-with-view-47406095-1024x682.jpg",
    desc: "Rating: 4.5 reviews. Price range: ₹ (Based on Average Nightly Rates for a Standard Room from our Partners)."
  },
  
];

const Stay = () => {
  const [items] = useState(menuItems);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen (true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <section className="stay-section">
      <div className="title">
        <h2>The Best Place To Stay</h2>
        <div className="line"></div>
      </div>
      <div className="center">
        {items.map((item) => {
          const { id, title, img, price, desc } = item;
          return (
            <article key={id} className="menu-item">
              <img src={img} alt={title} className="image" />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">{price}</h4>
                </header>
                <p className="text">{desc}</p>
                <button className="book-btn" onClick={() => openModal(title)}>Book Now</button>
              </div>
            </article>
          );
        })}
      </div>
      {isModalOpen && <BookingModal isOpen={isModalOpen} onClose={closeModal} title={selectedItem} />}
    </section>
  );
};

export default Stay;