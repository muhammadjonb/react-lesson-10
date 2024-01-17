import React from 'react'
import './Home.scss'
import {
  img1,
  img2,
  img3,
  card,
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
} from "../../assets/images";

const Home = () => {
  return (
    <main>
      <section className="hero_bg">
        <div className="container">
          <div className="hero">
            <span>New Arrival</span>
            <h1>Discover Our New Collection</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="btn">BUY Now</button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="range">
            <h2>Browse The Range</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="range_cards">
              <div className="range_card">
                <img src={img1} alt="rome" />
                <h3>Dining</h3>
              </div>
              <div className="range_card">
                <img src={img2} alt="rome" />
                <h3>Living</h3>
              </div>
              <div className="range_card">
                <img src={img3} alt="rome" />
                <h3>Bedroom</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="products">
            <h2>Our Products</h2>
            <div className="products_cards">
              <div className="products_card">
                <div className="card_bg">
                  <button>Add to cart</button>
                  <div className="card_bg_share">
                    <div className="card_bg_icons">
                      <ion-icon name="share-social-outline"></ion-icon>
                      Share
                    </div>
                    <div className="card_bg_icons">
                      <ion-icon name="git-compare-outline"></ion-icon>
                      Compare
                    </div>
                    <div className="card_bg_icons">
                      <ion-icon name="heart-outline"></ion-icon>
                      Like
                    </div>
                  </div>
                </div>
                <img src={card} alt="" />
                <h3>Syltherine</h3>
                <span>Stylish cafe chair</span>
                <h4>
                  Rp 2.500.000 <span>Rp 3.500.000</span>
                </h4>
              </div>
              <div className="products_card">
                <div className="card_bg">
                  <button>Add to cart</button>
                  <div className="card_bg_share">
                    <div className="card_bg_icons">
                      <ion-icon name="share-social-outline"></ion-icon>
                      Share
                    </div>
                    <div className="card_bg_icons">
                      <ion-icon name="git-compare-outline"></ion-icon>
                      Compare
                    </div>
                    <div className="card_bg_icons">
                      <ion-icon name="heart-outline"></ion-icon>
                      Like
                    </div>
                  </div>
                </div>
                <img src={card1} alt="" />
                <h3>Leviosa</h3>
                <span>Stylish cafe chair</span>
                <h4>Rp 2.500.000</h4>
              </div>
              <div className="products_card">
                <div className="card_bg">
                  <button>Add to cart</button>
                  <div className="card_bg_share">
                    <div className="card_bg_icons">
                      <ion-icon name="share-social-outline"></ion-icon>
                      Share
                    </div>
                    <div className="card_bg_icons">
                      <ion-icon name="git-compare-outline"></ion-icon>
                      Compare
                    </div>
                    <div className="card_bg_icons">
                      <ion-icon name="heart-outline"></ion-icon>
                      Like
                    </div>
                  </div>
                </div>
                <img src={card2} alt="" />
                <h3>Lolito</h3>
                <span>Luxury big sofa</span>
                <h4>
                  Rp 7.000.000 <span>Rp 14.000.000</span>
                </h4>
              </div>
              <div className="products_card">
                <div className="card_bg">
                  <button>Add to cart</button>
                  <div className="card_bg_share">
                    <div className="card_bg_icons">
                      <ion-icon name="share-social-outline"></ion-icon>
                      Share
                    </div>
                    <div className="card_bg_icons">
                      <ion-icon name="git-compare-outline"></ion-icon>
                      Compare
                    </div>
                    <div className="card_bg_icons">
                      <ion-icon name="heart-outline"></ion-icon>
                      Like
                    </div>
                  </div>
                </div>
                <img src={card3} alt="" />
                <h3>Respira</h3>
                <span>Outdoor bar table and stool</span>
                <h4>Rp 500.000</h4>
              </div>
              <div className="products_card">
                <div className="card_bg">
                  <button>Add to cart</button>
                  <div className="card_bg_share">
                    <div className="card_bg_icons">
                      <ion-icon name="share-social-outline"></ion-icon>
                      Share
                    </div>
                    <div className="card_bg_icons">
                      <ion-icon name="git-compare-outline"></ion-icon>
                      Compare
                    </div>
                    <div className="card_bg_icons">
                      <ion-icon name="heart-outline"></ion-icon>
                      Like
                    </div>
                  </div>
                </div>
                <img src={card4} alt="" />
                <h3>Grifo</h3>
                <span>Night lamp</span>
                <h4>Rp 1.500.000</h4>
              </div>
              <div className="products_card">
                <div className="card_bg">
                  <button>Add to cart</button>
                  <div className="card_bg_share">
                    <div className="card_bg_icons">
                      <ion-icon name="share-social-outline"></ion-icon>
                      Share
                    </div>
                    <div className="card_bg_icons">
                      <ion-icon name="git-compare-outline"></ion-icon>
                      Compare
                    </div>
                    <div className="card_bg_icons">
                      <ion-icon name="heart-outline"></ion-icon>
                      Like
                    </div>
                  </div>
                </div>
                <img src={card5} alt="" />
                <h3>Muggo</h3>
                <span>Small mug</span>
                <h4>Rp 150.000</h4>
              </div>
              <div className="products_card">
                <div className="card_bg">
                  <button>Add to cart</button>
                  <div className="card_bg_share">
                    <div className="card_bg_icons">
                      <ion-icon name="share-social-outline"></ion-icon>
                      Share
                    </div>
                    <div className="card_bg_icons">
                      <ion-icon name="git-compare-outline"></ion-icon>
                      Compare
                    </div>
                    <div className="card_bg_icons">
                      <ion-icon name="heart-outline"></ion-icon>
                      Like
                    </div>
                  </div>
                </div>
                <img src={card6} alt="" />
                <h3>Pingky</h3>
                <span>Cute bed set</span>
                <h4>
                  Rp 7.000.000 <span>Rp 14.000.000</span>
                </h4>
              </div>
              <div className="products_card">
                <div className="card_bg">
                  <button>Add to cart</button>
                  <div className="card_bg_share">
                    <div className="card_bg_icons">
                      <ion-icon name="share-social-outline"></ion-icon>
                      Share
                    </div>
                    <div className="card_bg_icons">
                      <ion-icon name="git-compare-outline"></ion-icon>
                      Compare
                    </div>
                    <div className="card_bg_icons">
                      <ion-icon name="heart-outline"></ion-icon>
                      Like
                    </div>
                  </div>
                </div>
                <img src={card7} alt="" />
                <h3>Potty</h3>
                <span>Minimalist flower pot</span>
                <h4>Rp 500.000</h4>
              </div>
            </div>
            <button className="products_btn">Show More</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home