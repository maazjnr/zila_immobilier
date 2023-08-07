import React, { useState, useEffect } from 'react';

const imageUrls = [
  'https://img.freepik.com/premium-photo/modern-interior-design-3d-illustration_259454-1571.jpg?w=2000',
  'https://img.freepik.com/premium-photo/modern-interior-design-3d-illustration_259454-1649.jpg?w=360',
  'https://img.freepik.com/free-photo/room-with-blurred-seats_1203-1260.jpg',
  'https://img.freepik.com/premium-photo/white-room-with-large-white-wall-large-white-poster_915002-40.jpg?w=360'
  // Add more image URLs here
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${imageUrls[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
  };

  // Apply the CSS to hide scrollbars and prevent scrolling above the navbar
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen" style={backgroundImageStyle}>
      <h1 className="text-primary">Home</h1>
    </div>
  );
}
