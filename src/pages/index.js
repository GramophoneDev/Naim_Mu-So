import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <br></br><br></br><br></br>
        <p>{config.subHeading}</p>
        </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
          The Naim Streaming Platform
          </h2>
          <p>
            At the heart of every unit in the Naim Mu-So Family of products is the Naim Streaming Platform
            <br />
            developed by 25 engineers over 3 years to offer the very best performance no matter how you 
            <br />
            listen. Found in our $20,000 flagship we now offer this level of performance almost anywhere.
          </p>
        </header>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Naim Mu-So V1
            <br />
          </h2>
          <p>
          Mu-so is Naim's first wireless music system. Finely tuned by specialist engineers in England,
          commanding 450 watts of power through six custom-designed speakers to create an experience of
          music that has to be heard to be believed.
          </p>
          <div className="strikethrough">MSRP:$1499</div>
          <a href="https://gramophone-online-store.myshopify.com/cart/17702826055:1?channel=buy_button" target="_blank" rel="noopener noreferrer">
          <button>
            Add To Cart For Price
          </button>
          </a>
          <br />
        </div>
      </section>

      <section className="spotlight">
        <div className="image">
          <img id="qb" src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Naim Mu-So QB
          </h2>
          <p>
          Mu-so Qb is alive with custom features. From the contours of the glass-filled polymer casing to the bass radiators that help create huge low frequencies. Mu-so Qb delivers a staggering 300 watts of power that unmasks your music with a sound that defies size.
          </p>
          <div className="strikethrough">MSRP:$999</div>
          <a href="https://gramophone-online-store.myshopify.com/cart/17385923911:1?channel=buy_button" target="_blank" rel="noopener noreferrer">
          <button>
            Add To Cart For Price
          </button>
          </a>
        </div>
      </section>
    <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Naim Mu-So V2
            <br />
          </h2>
          <p>
          Mu-so 2nd Generation is the successor to the multiple award-winning Mu-so wireless music system,
           re-engineered for class-leading performance,functionality and usability by our experts here in 
           Salisbury, England.
          </p>
          <br />
          <a href="https://gramophone-online-store.myshopify.com/cart/20475623211062:1?channel=buy_button" target="_blank" rel="noopener noreferrer">
          <button>
            Buy Now
          </button>
          </a>
          <br />
        </div>
      </section>
      </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Looking For Other Naim Products?</h2>
          <p>
            Follow the link to visit Naim's main product page for more information on the complete line of Naim products.
          </p>
        </header>
        <ul className="actions stacked">
          <br/>
          <br />
          <li>
            <a href="https://www.naimaudio.com/products" target="_blank" rel="noopener noreferrer" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
