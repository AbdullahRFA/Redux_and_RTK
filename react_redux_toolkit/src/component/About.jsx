import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About YourChoice</h1>
      <p style={styles.text}>
        Welcome to <strong>YourChoice</strong>, your number one source for all things quality. 
        We're dedicated to giving you the very best of products, with a focus on dependability, 
        customer service, and uniqueness.
      </p>
      <p style={styles.text}>
        Founded in 2025, YourChoice has come a long way from its beginnings. 
        When we first started out, our passion for eco-friendly and affordable products 
        drove us to do intense research, so that YourChoice can offer you the world's 
        most advanced shopping experience. We now serve customers all over the world.
      </p>
      <p style={styles.text}>
        We hope you enjoy our products as much as we enjoy offering them to you. 
        If you have any questions or comments, please don't hesitate to contact us.
      </p>
    </div>
  );
};

// Simple internal styles for the About page
const styles = {
  container: {
    maxWidth: '800px',
    margin: '3rem auto',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    lineHeight: '1.6',
    color: '#333'
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    color: '#2c3e50'
  },
  text: {
    marginBottom: '1rem',
    fontSize: '1.1rem',
    color: '#555'
  }
};

export default About;