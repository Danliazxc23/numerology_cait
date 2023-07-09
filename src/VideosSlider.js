import React, { useState } from 'react';

const VideosSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0); // состояние для активного слайда

  const handleSlideChange = (index) => {
    setActiveSlide(index); // обновление активного слайда
  };

  // массив с данными о видео
  const videos = [

    {
      src: '/videos/4684321196762.mp4',
      type: 'video/mp4',
    },
  ];

  return (
    <div className="Reviews">
      <h2>Отзывы клиентов</h2>
      <div style={{ position: 'relative' }}>
        {/* Видео */}
        <video width={1801} height={1239} controls>
          {videos.map((video, index) => (
            <source key={index} src={video.src} type={video.type} />
          ))}
        </video>
      </div>
      <div className="owl-dots">
  {/* Кнопки переключения */}
  {videos.map((_, index) => (
    <button
      key={index}
      className={`owl-dot ${activeSlide === index ? 'active' : ''} ${
        index === activeSlide - 1 ? 'left-arrow' : ''
      } ${index === activeSlide + 1 ? 'right-arrow' : ''}`}
      onClick={() => handleSlideChange(index)}
    >
      <span></span>
    </button>
  ))}
</div>
    </div>
  );
};

export default VideosSlider;