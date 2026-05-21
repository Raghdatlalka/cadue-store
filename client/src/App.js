import './App.css';
import logo from './images/logo.png';
import hero from './images/hero.jpg';
import flower from './images/flower.jpg';
import gift from './images/gift.jpg';
import chocolate from './images/chocolate.jpg';

function App() {
  return (
    <div>
      <div className="top-bar">
      <marquee scrollamount="12">
  Free delivery for orders over ₪250 ✨ Luxury flowers & gifts for every special moment ✨
</marquee>
</div>

      <nav className="navbar">
      <div className="logo-area">
  <img src={logo} alt="CADEAU Logo" className="logo-img" />
</div>
<div className="links">
  <a href="/">Home</a>
  <a href="/">Categories</a>
  <a href="/">Products</a>
  <a href="/">Reviews</a>
  <a href="/">🛒</a>
  <a href="/">👤</a>
</div>
      </nav>

      <section
  className="hero"
  style={{ backgroundImage: `url(${hero})` }}
>
        <div className="hero-text">
          <h1>Luxury Flowers & Gifts</h1>
          <p>Elegant gifts for every special moment</p>
          <button>Shop Now</button>
        </div>
      </section>

      <section className="categories">
        <h2>Shop By Category</h2>

        <div className="category-list">
          <div className="category-card">Flowers</div>
          <div className="category-card">Gifts</div>
          <div className="category-card">Chocolate</div>
          <div className="category-card">Graduation</div>
          <div className="category-card">Baby Gifts</div>
        </div>
      </section>
      
      <section className="products">
        <h2>Our Products</h2>

        <div className="product-list">
          <div className="product-card">
            <img src={flower} alt="Flower Bouquet" />
            <h3>Flower Bouquet</h3>
            <p>Beautiful fresh flowers</p>
            <span>₪120</span>
            <button>Add To Cart</button>
          </div>

          <div className="product-card">
            <img src={gift} alt="Gift Box" />
            <h3>Gift Box</h3>
            <p>Elegant gift for special moments</p>
            <span>₪180</span>
            <button>Add To Cart</button>
          </div>

          <div className="product-card">
            <img src={chocolate} alt="Chocolate Box" />
            <h3>Chocolate Box</h3>
            <p>Luxury chocolate package</p>
            <span>₪190</span>
            <button>Add To Cart</button>
          </div>
        </div>
      </section>

      <section className="services">
  <h2>Our Services</h2>

  <div className="service-list">
    <div className="service-card">
      <h3>Online Orders</h3>
      <p>Customers can order flowers and gifts online easily.</p>
    </div>

    <div className="service-card">
      <h3>Gift Delivery</h3>
      <p>Orders can be delivered to different areas.</p>
    </div>

    <div className="service-card">
      <h3>Secure Login</h3>
      <p>Users can create accounts and access private pages securely.</p>
    </div>
  </div>
</section>
      <section className="reviews">
        <h2>Customer Reviews</h2>

        <div className="review-list">
          <div className="review-card">
            <h3>Sarah</h3>
            <p>Beautiful flowers and fast service.</p>
          </div>

          <div className="review-card">
            <h3>Rana</h3>
            <p>The gift box was elegant and perfect.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <h3>CADEAU</h3>
        <p>Flowers and gifts for every special moment</p>
        <p>© 2026 CADEAU. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;