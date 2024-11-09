import React, { useState } from 'react';
import { useSpring, animated, useTrail } from 'react-spring';
import './Category.css';

const categories = [
  { id: 1, name: 'Business', blogs: [
    { title: 'How to Scale Your Business', content: 'Learn the strategies for scaling your business to the next level.' },
    { title: 'Effective Business Management', content: 'Tips for managing a growing business while maintaining efficiency.' },
    { title: 'Business Trends in 2024', content: 'Stay ahead of the curve with the latest business trends in 2024.' },
  ]},
  { id: 2, name: 'Startup', blogs: [
    { title: 'How to Start a Successful Startup', content: 'Step-by-step guide for launching a successful startup in today’s competitive market.' },
    { title: 'Building a Strong Team for Your Startup', content: 'Learn how to hire the right people for your startup and build an effective team.' },
    { title: 'Securing Funding for Your Startup', content: 'Understand the different funding options available for startups.' },
  ]},
  { id: 3, name: 'Technology', blogs: [
    { title: 'Latest AI Innovations', content: 'Discover the latest AI advancements and how they’re changing the tech landscape.' },
    { title: 'The Future of Cloud Computing', content: 'Exploring the role of cloud computing in the future of tech industries.' },
    { title: 'Blockchain: Beyond Cryptocurrencies', content: 'Learn about the many uses of blockchain beyond just cryptocurrency.' },
  ]},
  { id: 4, name: 'Economy', blogs: [
    { title: 'Global Economic Trends', content: 'Explore the global economic trends shaping the market in 2024.' },
    { title: 'Economic Impact of AI and Automation', content: 'How AI and automation are transforming industries and the economy.' },
    { title: 'Understanding Inflation and its Effects', content: 'Learn about inflation and how it affects the global economy.' },
  ]},
];

function CategoryPage() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [showBlogs, setShowBlogs] = useState(false);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setShowBlogs(showBlogs === category ? null : category); 
  };

  // Animation for sliding content
  const slideAnimation = useSpring({
    maxHeight: showBlogs ? '1000px' : '0',
    opacity: showBlogs ? 1 : 0,
    overflow: 'hidden',
    transition: 'max-height 0.5s ease, opacity 0.5s ease',
  });

  
  const trail = useTrail(categories.length, {
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { tension: 150, friction: 20 },
  });

  return (
    <div className="category-page">
      {/* Banner Section */}
      <section className="category-banner">
        <h1>Select a Category to Explore</h1>
      </section>

      {/* Category Boxes Section */}
      <section className="category-selection">
        {trail.map((style, index) => (
          <animated.div
            key={categories[index].id}
            className="category-box"
            style={style}
            onClick={() => handleCategoryClick(categories[index].name)}
          >
            <h2>{categories[index].name}</h2>
          </animated.div>
        ))}
      </section>

      {/* Dynamic Blog Content */}
      <section className="category-blogs">
        <animated.div style={slideAnimation}>
          {showBlogs && (
            <>
              <h3>Blogs Related to {activeCategory}</h3>
              <div className="blog-list">
                {categories
                  .find((category) => category.name === activeCategory)
                  .blogs.map((blog, index) => (
                    <div key={index} className="blog-item">
                      <h4>{blog.title}</h4>
                      <p>{blog.content}</p>
                    </div>
                  ))}
              </div>
            </>
          )}
        </animated.div>
      </section>
    </div>
  );
}

export default CategoryPage;
