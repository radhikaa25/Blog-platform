import React from 'react';
import './Blog.css'; 

function Blog() {
 
  const blogPosts = [
    {
      id: 1,
      title: "Tech Innovations to Watch in 2024",
      excerpt: "Stay updated with the latest tech trends and innovations that will shape the future.",
      imgSrc: "https://th.bing.com/th/id/OIP.Yvl-U1zwwgLzvCx2qJf1TwHaE8?rs=1&pid=ImgDetMain",
      link: "/blog/tech-innovations-2024",
    },
    {
      id: 2,
      title: "Effective Business Strategies for Growth",
      excerpt: "Learn business strategies that can help take your startup to the next level.",
      imgSrc: "https://i1.pickpik.com/photos/750/297/235/596877aaad500-thumb.jpg",
      link: "/blog/business-strategies-growth",
    },
    {
      id: 3,
      title: "How AI is Revolutionizing Healthcare",
      excerpt: "Explore how artificial intelligence is transforming the healthcare industry.",
      imgSrc: "https://th.bing.com/th/id/OIP.CqagzSAJZPwFLbm9ih76igHaE7?rs=1&pid=ImgDetMain",
      link: "/blog/ai-healthcare-revolution",
    },
    {
      id: 4,
      title: "Marketing Trends to Follow in 2024",
      excerpt: "Get ahead of the curve by understanding the marketing trends of the coming year.",
      imgSrc: "https://th.bing.com/th/id/OIP.zd0_Aa8yCmBndJ5h7tJwyAHaE7?w=232&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      link: "/blog/marketing-trends-2024",
    },
    {
      id: 5,
      title: "The Future of Remote Work",
      excerpt: "How remote work is reshaping industries and the workforce of tomorrow.",
      imgSrc: "https://th.bing.com/th/id/OIP.6Kqb-a5J_WiFFG4Og8o3nwHaE7?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      link: "/blog/future-remote-work",
    },
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">Our Latest Blog Posts</h1>

      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post-card">
            <img src={post.imgSrc} alt={post.title} className="blog-post-image" />
            <div className="blog-post-content">
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <a href={post.link} className="read-more-btn">Read More</a>
            </div>
          </div>
        ))}
      </div>

      {/* Categories Section */}
      <section className="categories" id="categories">
        <h2>Browse by Category</h2>
        <div className="category-cards">
          <div className="category-card">
            <h3>Technology</h3>
            <p>Explore the latest tech trends, gadgets, and innovations in the tech world.</p>
          </div>
          <div className="category-card">
            <h3>Health</h3>
            <p>Discover articles on fitness, wellness, nutrition, and mental health.</p>
          </div>
          <div className="category-card">
            <h3>Business</h3>
            <p>Learn about entrepreneurship, startups, and business growth strategies.</p>
          </div>
          <div className="category-card">
            <h3>Education</h3>
            <p>Read about the latest developments in the education sector and learning resources.</p>
          </div>
          <div className="category-card">
            <h3>Travel</h3>
            <p>Find articles on travel destinations, tips, and personal experiences.</p>
          </div>
        </div>
      </section>

      {/* Read More Section */}
      <div className="read-more-container">
        <a href="/blog" className="read-more-btn">Read More...</a>
      </div>
    </div>
  );
}

export default Blog;
