import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Blog</h1>
          <p>From the latest trends in tech to timeless lifestyle insights...": Highlights the diverse range of topics covered in the blog, suggesting that there’s something for everyone.</p>
          <Link to="/about-us" className="cta-btn">Learn More</Link>
        </div>
      </section>
{/* About Us Section */}
<section className="about-us">
  <div className="content">
    <h2>About Us</h2>
    <p>
      Welcome to our platform! We are a team of passionate individuals dedicated to empowering and inspiring people through knowledge and creative expression. Our mission is to provide valuable insights across a range of topics, from cutting-edge technology to everyday lifestyle tips.
    </p>
    <p>
      Our blog is more than just a place to read articles; it's a community where ideas are exchanged, and learning happens in an interactive and engaging way. We aim to bridge the gap between technology and everyday life, making complex concepts accessible for everyone.
    </p>
    <p>
      Whether you're interested in the latest trends in tech, need career advice, or simply looking for new ways to enhance your lifestyle, we have something for you. We strive to produce content that is informative, engaging, and relevant to the needs of our diverse audience.
    </p>
    <p>
      At our core, we believe that learning never stops, and we want to be a part of your continuous journey toward growth and improvement. Join us as we explore, learn, and share together!
    </p>
  </div>
  <div className="about-image">
    <img 
      src="https://th.bing.com/th/id/OIP.v_caPLCqaTa7jPh_RK6gXgHaD4?w=329&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
      alt="Blog Platform" 
    />
  </div>
</section>


     {/* Features Section */}
<section className="features">
  <h2>Our Key Features</h2>
  <div className="feature-cards">
    <div className="feature-card">
      <img 
        src="https://th.bing.com/th/id/OIP.Hzq5Fgb9XvKljEL6x8wVmgHaE8?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
        alt="AI-Powered Interview Simulation" 
        className="feature-img"
      />
      <h3>AI-Powered Interview Simulation</h3>
      <p>Our platform offers realistic mock interviews powered by AI, helping users prepare for job interviews with real-time feedback and improvements.</p>
    </div>
    <div className="feature-card">
      <img 
        src="https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg?auto=compress&cs=tinysrgb&w=1600" 
        alt="Personalized Career Advice" 
        className="feature-img"
      />
      <h3>Personalized Career Advice</h3>
      <p>Get tailored career advice based on your experience, skills, and job preferences to guide you toward your ideal career path.</p>
    </div>
    <div className="feature-card">
      <img 
        src="https://th.bing.com/th/id/OIP.gFDpmwibDDyGV833b99qaQHaE6?rs=1&pid=ImgDetMain" 
        alt="Real-Time Performance Analytics" 
        className="feature-img"
      />
      <h3>Real-Time Performance Analytics</h3>
      <p>Track your performance with detailed analytics after every mock interview, helping you identify areas to improve for better job prospects.</p>
    </div>
  </div>
</section>



      {/* Categories Section */}
      <section className="categories">
        <h2>Explore Categories</h2>
        <div className="category-cards">
          <div className="category-card">
            <img src="https://th.bing.com/th?id=OIP.XK6NXaxbrbjWFXsLYgW6UwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Category 1" />
            <h3>Technology</h3>
            <p>Latest trends in tech.</p>
          </div>
          <div className="category-card">
            <img src="https://th.bing.com/th/id/OIP.XbKtK_zYwcJ2NkgNnhQOsQHaEc?w=281&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Category 2" />
            <h3>Lifestyle</h3>
            <p>Tips for a balanced life.</p>
          </div>
          <div className="category-card">
            <img src="https://th.bing.com/th/id/OIP.FHGTTK-VQW7afE-1aV-ZTQHaEq?w=299&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Category 3" />
            <h3>Business</h3>
            <p>Entrepreneurship and growth.</p>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
<section className="blog-preview">
  <h2>Latest Posts</h2>
  <div className="blog-posts">
    <div className="blog-post">
      <img src="https://th.bing.com/th/id/OIP.BxeBLleRU3UkeEr0EgwuLQHaE8?rs=1&pid=ImgDetMain" alt="Blog 1" />
      <h3>How AI Will Take Control!</h3>
      <p>In this post, we explore how artificial intelligence is becoming increasingly influential and what its future holds in various industries.</p>
      <a href="/post/1" className="cta-btn">Read More</a>
    </div>
    <div className="blog-post">
      <img src="https://th.bing.com/th/id/R.cad1db7637f1d2de218d0268f904c7a7?rik=0Qg2KGHd6diO7Q&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2ff%2f3%2fc%2f765310-best-business-wallpapers-1920x1080.jpg&ehk=SbkgvOSZpWq%2fNynUbpU2vMubLGv9CBG43hTKBDMycbA%3d&risl=&pid=ImgRaw&r=0" alt="Blog 2" />
      <h3>You Can't Succeed Without Falling</h3>
      <p>Success isn't a straight path. This post discusses the importance of overcoming failure and how it is an essential part of personal growth.</p>
      <a href="/post/2" className="cta-btn">Read More</a>
    </div>
  </div>
</section>


      {/* Authors Section */}
      <section className="authors">
        <h2>Meet Our Authors</h2>
        <div className="author-cards">
          <div className="author-card">
            <img src="https://letterreview.com/wp-content/uploads/2022/06/old-male-author-writing-books-1024x683.jpg" alt="Author 1" />
            <h3>John Doe</h3>
            <p>John is a tech enthusiast with a passion for software development and AI. He writes about emerging technologies and programming languages.</p>
            <a href="/author/1" className="cta-btn">Read More</a>
          </div>
          <div className="author-card">
            <img src="https://th.bing.com/th/id/OIP.Ak-wFugzkBL9aCRO1Bg8nAHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1." alt="Author 2" />
            <h3>Jane Smith</h3>
            <p>Jane is an experienced business strategist and a regular contributor to articles on entrepreneurship, business growth, and leadership.</p>
            <a href="/author/2" className="cta-btn">Read More</a>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Join Us and Stay Informed</h2>
        <p>Subscribe to get the latest updates directly to your inbox.</p>
        <a href="#subscribe" className="cta-btn">Subscribe Now</a>
      </section>
    </div>
  );
};

export default Home;
