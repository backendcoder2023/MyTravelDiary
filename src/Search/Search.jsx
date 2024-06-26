import React, { useState } from 'react';
import './Search.css';

const cityImages = {
  'Delhi': [
    "https://www.travelandleisure.com/thmb/OFR_JsTYAek4QAZPzHJhNaCEmNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/red-fort-NEWDELHITG0721-3948738c3fd5496f9e9fcc037989a027.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/03/3f/fd/caption.jpg?w=1400&h=1400&s=1&cx=2294&cy=1952&chk=v1_c3b28b866491ff3722ce",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyc6kFssX0LBECzdyWzZkkuXQw89TMYH-rjA&s",
    "https://www.thoughtco.com/thmb/8hRkNpA3eA7UU5VH9k63iDbU0OE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/swaminarayan-akshardham-temple--the-biggest-hindu-temple-in-the-world--new-delhi--india-827546130-5a4e9693494ec90036e9373d.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/23/c6/0f/img-20160507-135554-largejpg.jpg?w=400&h=300&s=1",
    "https://www.tajmahalinagra.com/wp-content/uploads/2022/03/tourist-attractions-in-delhi-750x350.jpg",
    "https://ihplb.b-cdn.net/wp-content/uploads/2021/05/nemrana-fort.png",
    "https://hohodelhi.com/Delhi-Jaipur-Tour-Package-Car/images/SliderImg.jpg"
  ],
  'Mumbai': [
    "https://www.fabhotels.com/blog/wp-content/uploads/2018/09/places-vist-in-mumbai-600.jpg",
    "https://static.javatpoint.com/tourist-places/images/tourist-places-in-mumbai.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/dest_img/mmt/activities/m_Mumbai_dest_landscape_l_1029_1543.jpg",
    "https://www.revv.co.in/blogs/wp-content/uploads/2017/11/4vqymeb.jpg",
    "https://ihplb.b-cdn.net/wp-content/uploads/2014/12/Cathedral-of-The-Holy-Name.jpg",
    "https://lh3.googleusercontent.com/K8kH4X92P4ftHi76GUesMBrabdzY3TUe_claOtxjvnl32yVNPbU4GgAPGo6HixOqKXh3zwoRIGHNuhBhJ4aL6z8XQ7klnbueg8Y=w3840-h2160-c-rw-v3",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU26XdVxxwauoQyhcg-rJo7RGYHmI2Bhdm7A&s",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/19/88/12/global-vipassana-pagoda.jpg?w=500&h=400&s=1"
  ],
  'Nagpur': [
    "https://static.langimg.com/photo/imgsize-123404,msid-85555756/navbharat-times.jpg",
    "https://www.holidify.com/images/cmsuploads/compressed/DhammaChakraStupa_20200120183154_20200120183213.jpg",
    "https://www.revv.co.in/blogs/wp-content/uploads/2020/03/best-places-to-visit-in-Nagpur.jpg",
    "https://www.holidify.com/images/cmsuploads/compressed/800px-BAPS_Swaminarayan_Temple%252C_Nagpur_20190116150202.jpg",
  ],
  'Goa': [
    "https://resources.thomascook.in/images/holidays/staticPage/ThingsToDo/Panjim850.jpg",
    "https://assets-news.housing.com/news/wp-content/uploads/2022/06/22073109/Best-tourist-places-to-visit-in-Goa-and-things-to-do-03.jpg",
    "https://www.villacalangute.com/blog/religious-places-to-visit-in-goa/religious-places-to-visit-in-goa-large.jpg",
    "https://aryango.com/wp-content/uploads/2022/12/Goa-1024x576.jpg",
    "https://www.trawell.in/admin/images/upload/121905516Shantadurga_Temple_Kavlem_Main.jpg",
    "https://media2.thrillophilia.com/images/photos/000/115/737/original/1516998283_0_139c88_4f6e83d3_orig.jpg?width=975&height=600",
    "https://www.planetware.com/wpimages/2020/06/india-goa-top-attractions-popular-beaches.jpg",
    "https://www.bestbus.in/assets/images/news-cms/best-time-to-visit-goa.jpg",
  ],
  'Bangalore': [
    "https://www.gingerhotels.com/resourcefiles/blogsmallimages/banglore.jpg",
    "https://ourbackpacktales.com/wp-content/uploads/2020/04/Coimbatore-places-to-visit-from-bangalore-our-backpack-tales-1024x682.jpeg",
    "https://indiator.com/tourist-places/wp-content/uploads/2016/11/bangalore3.jpg",
    "https://img.traveltriangle.com/blog/wp-content/uploads/2018/05/Cover2.jpg",
    
  ],
  'Manali':[
    "https://www.justahotels.com/wp-content/uploads/2023/10/Places-To-Visit-in-Manali.jpg",
    "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Solang-Valley.jpg",
    "https://joymanali.com/uploads/0000/1/2023/02/09/manali-ct-cover.jpg",
    "https://i.ytimg.com/vi/7NKk41YVWyA/maxresdefault.jpg"
  ],
  'Vrundavan': [
    "https://hblimg.mmtcdn.com/content/hubble/img/Vrindavan%20Cover/mmt/activities/m_Vrindavan_4_l_417_600.jpg",
    "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/05/f159185b9aabce95660e9d4452db77e9_1000x1000.jpg",
    "https://www.holidify.com/images/cmsuploads/compressed/5395_20190319183709.jpg",
    "https://s.rfi.fr/media/display/9771ff06-0f0f-11ea-9c2d-005056a9aa4d/w:1280/p:1x1/vrindavan_chandrodaya_temple_render_2.jpg"
  ],
  
  'Kolkata': [
    "https://hblimg.mmtcdn.com/content/hubble/img/kolkata/mmt/activities/t_ufs/m_activities_kolkata_dakshineshwar_kali_temple_l_397_601.jpg",
    "https://www.fabhotels.com/blog/wp-content/uploads/2021/09/28-New-Town-Eco-Park.jpg",
    "https://www.holidify.com/images/cmsuploads/compressed/attr_1815_20190329140817.jpg",
    "https://static-blog.treebo.com/blog/wp-content/uploads/2018/07/Shiv-Mandir-in-Bardhaman.jpg"
  ],
  
};

function Search({ placeholder, data }) {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      setFilteredData(data.filter(city => city.toLowerCase().startsWith(value.toLowerCase())));
    } else {
      setFilteredData([]);
      setSelectedCity(null); // Hide images if the input is cleared
    }
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setQuery(city);
    setFilteredData([]);
  };

  return (
    <div className='search'>
      <div className='searchContainer'>
        <div className='searchInput'>
          <input 
            type='text' 
            placeholder={placeholder} 
            value={query} 
            onChange={handleInputChange} 
          />
        </div>
        {filteredData.length > 0 && (
          <div className='dataResult'>
            {filteredData.map((item, index) => (
              <div 
                key={index} 
                className='dataItem' 
                onClick={() => handleCityClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
      {selectedCity && (
        <div className='imageContainer'>
          <h2>{selectedCity}</h2>
          <div className='cityImages'>
            {cityImages[selectedCity]?.map((image, index) => (
              <img key={index} src={image} alt={selectedCity} className='cityImage' />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;


