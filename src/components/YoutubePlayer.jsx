import React from 'react';

const YouTubePlayer = ({ videoUrl }) => {
  // Extraer el ID del video de YouTube de la URL proporcionada
  const videoId = videoUrl.split('v=')[1];

  // Construir la URL de embed de YouTube
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="youtube-player">
      <iframe
        width="100%"
        height="480"
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubePlayer;
