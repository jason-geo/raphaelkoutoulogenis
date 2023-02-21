import React, { useState, useEffect } from 'react';

const WordPressMedia = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await fetch('https://raphaelkoutoulogenis.com/wp-json/wp/v2/media');
      const data = await res.json();
      setPhotos(data);
    };

    fetchPhotos();
  }, []);

  return (
    <div>
      {photos.map(photo => (
        <img key={photo.id} src={photo.source_url} alt={photo.alt_text} />
      ))}
    </div>
  );
};

export default WordPressMedia;
