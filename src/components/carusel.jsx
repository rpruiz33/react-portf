import React from 'react';

const ImagenConEstilo = () => {
  const imageUrl = "https://media.licdn.com/dms/image/v2/C4E03AQHNOXD-nEKmgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1639681377888?e=1743638400&v=beta&t=Yu3lzzG3ukvuxT3noL1EONtyGczTsa-kT9v-jkx09vM";

  const styles = {
    container: {
      position: 'relative',
      width: '250px',
      height: '250px',
      margin: '20px auto',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(255, 255, 255, 0.2)',
      background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.4), rgba(255, 0, 255, 0.4))',
      padding: '5px',
      animation: 'borderAnimation 3s infinite alternate'
    },
    imageContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '8px',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 0 12px rgba(255, 255, 255, 0.4) inset'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center center',
      display: 'block',
      borderRadius: '8px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img 
          src={imageUrl} 
          alt="Profile" 
          style={styles.image}
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = 'https://via.placeholder.com/250';
          }}
        />
      </div>
    </div>
  );
};

export default ImagenConEstilo;
