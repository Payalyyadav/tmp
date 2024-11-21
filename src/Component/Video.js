import React from 'react';
import { Carousel } from 'react-bootstrap';

const Video = () => {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/carousel-2-mobile-small-b3fd61960ed47643ca39fc0fc54d435f77369ddadc3f163ec91fc5a806b33ace.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Mobile friendly themes</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/carousel-3-mobile-small-f586e6a7e1563512c0524687fe15f2f748c8849992c080de3ae60365d9b5d211.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Mobile friendly Shopify Apps</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/carousel-1-mobile-small-21ae4e287eb9c87f9eeca84adbc0c9aaf8fd13ff6cce71c01f0202aabba27b92.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Mobile friendly online storefront</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Video;
