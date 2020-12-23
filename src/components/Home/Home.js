import React from 'react';
import Product from '../Product/Product';
import './Home.css'


const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__mainImg" src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-D-6bababd9-ff42-407e-8e71-b6b0012e8def._CB417386616_QL85_V1_.jpg" alt="logo"/>
      
        <div className="home__row">
          <Product
          id='111221' 
          title='The Lean Starup: How Constant Innovation Creates Radically Successful Businesses paperback' 
          price='11.96'
          rating='4'
          image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
          />  
          <Product 
          id='111222' 
          title='Kenwood KMix Stand Mixer for Baking Stylish for Baking, Stylish Kitchen Mixer with K-beater, Bough Hook and Whisk 5 Litre Glass Bowl'
          price='249.0'
          rating='5'
          image='https://www.orientelectric.com/images/bgallery/KMX750RD-2.png'
          />
        </div>

        <div className="home__row">
        <Product
          id='111521' 
          title='Gear S2 With Digital Watch Face - Smart Watch Samsung Gear S2 measure blood oxygen levels on demand.'
          price='199.04'
          rating='3'
          image='https://www.seekpng.com/png/full/356-3564519_gear-s2-with-digital-watch-face-smart-watch.png'
          />
          <Product
          id='111522' 
          title='Redesigned new look with a richer louder sound built-in speaker for streaming songs from Prime music, Radio player, and others'
          price='98.99'
          rating='4'
          image='https://www.bhphotovideo.com/images/images2500x2500/amazon_b07ct3w44k_echo_plus_2nd_generation_1437072.jpg'
          />
          <Product
          id='111525' 
          title='Apple Ipad Pro (10.2-inch Retina display
          A12 Bionic chip) Silver - 4th Genaration.'
          price='329.25'
          rating='4'
          image='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-11-select-wifi-spacegray-202003?wid=470&hei=556&fmt=png-alpha&.v=1583544727993'
          />
          
        </div>
        <div className="home__row">
          <Product
          id='111235' 
          title='Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor = Super Ultra Wide Dual WQHD 5120 x 1440'
          price='1020.44'
          rating='4'
          image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg'
          />
        </div>

        <div className="home__row">
        <Product
          id='112245' 
          title='Fujifilm X-E3 Mirrorless Digital Camera w/XF23mmF2 R WR Kit - Silver'
          price='749.00'
          rating='4'
          image='https://download.fujifilm.co.jp/press/en/n170907_01/01.jpg'
          />
        <Product
          id='112259' 
          title='Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i7-9750H, NVIDIA GeForce RTX 2060, 17.3" Full HD IPS 144Hz 3ms Display, 16GB DDR4, 256GB NVMe SSD, Gigabit WiFi 5, Backlit Keyboard, AN517-51-76V6'
          price='1132.34'
          rating='5'
          image='https://images-na.ssl-images-amazon.com/images/I/71QXJg8uOCL._SL1500_.jpg'
          />
        </div>

        <div className="home__row">
        <Product
          id='112345' 
          title='Brooklyn Botany Brown Sugar Body Scrub - Great as a Face Scrub & Exfoliating Body Scrub for Acne Scars, Stretch Marks, Foot Scrub, Great Gifts For Women - 10 oz'
          price='15.75'
          rating='5'
          image='https://cdn.shopify.com/s/files/1/1647/3859/products/sugar_open_front_2_-_Copy_2048x.jpg?v=1548865195'
          />
        <Product
          id='112349' 
          title='Bath and Body Works Eucalyptus Spearmint Bath Soak Aromatherapy'
          price='15.70'
          rating='5'
          image='https://images-na.ssl-images-amazon.com/images/I/817ZPAfLioL._SL1500_.jpg'
          />
        <Product
          id='112359' 
          title='B + W 43mm UV Protection Filter (010) for Camera Lens – Standard Mount (F-PRO), MRC, 16 Layers Multi-Resistant Coating, Photography Filter, 43 mm, Clear Protector'
          price='21.95'
          rating='4'
          image='https://m.media-amazon.com/images/I/71RIlbGSoxL.jpg'
          />
        </div>
      
      </div>
    </div>
  );
};

export default Home;