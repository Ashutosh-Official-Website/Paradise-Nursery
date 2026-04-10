import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container" style={{padding: '20px', textAlign: 'center'}}>
      <h1 className="about-us-title">About Paradise Nursery</h1>
      <p className="about-us-description">At Paradise Nursery, we believe that every home deserves a touch of nature.</p>
      <p className="about-us-content" style={{maxWidth: '800px', margin: '0 auto'}}>
        Our journey began with a simple passion for greenery. Today, we offer a curated selection 
        of plants ranging from air-purifying giants to aromatic herbs. Our mission is to provide 
        healthy, beautiful plants while educating our community on the joys of plant parenthood. 
        Whether you are a seasoned gardener or a first-time plant parent, we are here to help 
        you grow your own slice of paradise.
      </p>
    </div>
  );
};

export default AboutUs;
