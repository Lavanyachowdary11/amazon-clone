import React from 'react'
import './Home.css'
import Product from './Product.js'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="Clean Code: A Handbook of Agile Software by Martin Robert C. (Author)"
                        price={419}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/41zoxjP9lcL._SX323_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id="4903850"
                        title="New Apple MacBook Pro (13-inch, 8GB RAM, 256GB SSD, 1.4GHz Quad-core 8th-Generation Intel Core i5 Processor, Magic Keyboard) - Space Grey"
                        price={122990}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Ztc9lofJL._SL1500_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="49538094"
                        title="OnePlus 7T Glacier Blue (8GB RAM+256GB Storage)"
                        price={37999}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/41CK68JShbL._SY300_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={11455}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="Sony WH-1000XM3 Industry Leading Wireless Noise Cancelling Headphones, 30 Hours Battery Life,..."
                        price={21990}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61D4Z3yKPAL._SL1500_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>

            </div>
        </div>
    );
}

export default Home
