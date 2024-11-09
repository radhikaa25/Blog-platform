import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Author.css';

const authors = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://letterreview.com/wp-content/uploads/2022/06/old-male-author-writing-books-1024x683.jpg',
    bio: 'John is a tech enthusiast with a passion for software development and AI. He writes about emerging technologies and programming languages.',
    link: '/author/john-doe',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'https://th.bing.com/th/id/OIP.Ak-wFugzkBL9aCRO1Bg8nAHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    bio: 'Jane is an experienced business strategist and a regular contributor to articles on entrepreneurship, business growth, and leadership.',
    link: '/author/jane-smith',
  },
  {
    id: 3,
    name: 'Alen Brown',
    image: 'https://th.bing.com/th/id/R.27f26c16338557f167b5b636732146a5?rik=W7hmDKLV40VLGw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-VIGdAFGG6tc%2fTwcJOjHNpBI%2fAAAAAAAAAms%2fLUsNe1KejS4%2fs1600%2fsalman-rushdie14804.jpg&ehk=97sDHQgFnE9aA0cgem4JzLCbsym3YEO7m6TsW7xIF%2fI%3d&risl=&pid=ImgRaw&r=0',
    bio: 'Alen is passionate about personal growth and wellness. He shares insights on mental health, self-improvement, and career development.',
    link: '/author/alice-brown',
  },
];

const Author = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className="authors" id="authors">
      <animated.h2 style={fadeIn}>Meet Our Incredible Authors</animated.h2>

      <div className="author-cards">
        {authors.map((author) => (
          <div key={author.id} className="author-card">
            <img src={author.image} alt={author.name} />
            <h3>{author.name}</h3>
            <p>{author.bio}</p>
            <a href={author.link} className="cta-btn">Read More</a>
          </div>
        ))}
      </div>

      <section className="join-team">
        <h2>Join Our Team of Passionate Writers</h2>
        <p>Do you have a story to tell? Are you passionate about writing and sharing your knowledge with the world? We’re always looking for talented writers to join our team and contribute to our growing blog. Share your story, and help us inspire others!</p>
        <a href="/join-us" className="cta-btn">Join the Team</a>
      </section>
    </div>
  );
};

export default Author;
