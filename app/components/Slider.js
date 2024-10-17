'use client'

import { useState } from 'react';
import styles from './Slider.module.css'; // CSS 모듈

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/Artboard 1.jpg',
    '/Artboard 2.jpg',
    '/Artboard 3.jpg',
    '/Artboard 4.jpg',
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.slider}>
      <div
        className={styles.slides}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} className={styles.image} />
        ))}
      </div>

      {/* 첫 슬라이드에서는 Prev 버튼 숨김 */}
      {currentIndex !== 0 && (
        <button className={styles.prev} onClick={prevSlide}>
          &lt;
        </button>
      )}

      {/* 마지막 슬라이드에서는 Next 버튼 숨김 */}
      {currentIndex !== images.length - 1 && (
        <button className={styles.next} onClick={nextSlide}>
          &gt;
        </button>
      )}

      {/* 슬라이드 인디케이터 */}
      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}