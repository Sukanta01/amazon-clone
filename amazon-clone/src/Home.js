import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt=""
            />

            {/* Product id,title,price,rating,image */}
            <div className="home_row">
            <Product
            id="12345678"
            title="CORSECA DM5710BT Bluetooth Stereo"
            price={1196}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41LRcrbMdXL.jpg"
            alt=""
            />
             <Product
            id="12345678"
            title="OnePlus 8 Pro (Glacial Green 12GB RAM+256GB Storage)"
            price={ 59999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/619iTNHSCGL._SL1500_.jpg"
            alt=""
            />
            </div>
           
            
            

            <div className="home_row">

            <Product
            id="12345678"
            title="A1 Bluetooth Smart Watch Compatible with All 4G Phone with Camera and Sim Card Support Compatible with All Android and iOS Smartphones Pink"
            price={998}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/318QpCtJkWL.jpg"
            alt=""
            />
            <Product
            id="12345678"
            title="Think and Grow Rich Paperback – 1 January 2014"
            price={172}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41+eK8zBwQL._SX319_BO1,204,203,200_.jpg"
            alt=""
            />
             <Product
            id="12345678"
            title="Nike Women's WMNS Air Zoom Vomero 12 Running Shoes"
            price={6997}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81EAvfncBjL._UL1500_.jpg"
            alt=""
            />
            </div>
            <Product
            id="12345678"
            title="Echo Dot (3rd Gen) – Smart speaker with Alexa (White)"
            price={3499}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/713i%2B1NrUcL._SL1500_.jpg"
            alt=""
            />

            <div className="home_row">

            </div>
            {/* Product */}
            </div>
           
    )
}

export default Home
