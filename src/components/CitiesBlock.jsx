import React from 'react';
import { Carousel } from 'react-bootstrap';
import CityItem from './CityItem';

function CitiesBlock() {
  const cities = [
    { image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/01/81/df.jpg", name: "Oslo" },
    { image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/01/81/df.jpg", name: "Kongsberg" },
    { image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/01/81/df.jpg", name: "Stavanger" },
    { image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/01/81/df.jpg", name: "Lyngdal" },
    { image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/01/81/df.jpg", name: "Tronheim" },
    { image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/01/81/df.jpg", name: "Tønsberg" },
    { image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/01/81/df.jpg", name: "Bergen" },
    { image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/01/81/df.jpg", name: "Kristiansand" }
  ];

  return (
    <div className="cities-town">
      <div className="container">
        <div className="row">
          <div className="slider-content">
            <div className="row">
              <div className="col-lg-12">
                <h2>Sjekk ut <em>Bedrifter &amp; i Byen din,</em></h2>
              </div>
              <div className="col-lg-12">
                <Carousel>
                  {cities.map((city, index) => (
                    <Carousel.Item key={index}>
                      <CityItem image={city.image} name={city.name} />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CitiesBlock;
