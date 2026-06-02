import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from "./NatureSlider.module.css";

export function NatureSliderList({ images }) {
  return (
    <Splide
      options={{
        type: "loop",
        perPage: 3,
        focus: "center",
        gap: "20px",
        autoplay: true,
        interval: 2500,
        pauseOnHover: false,
        arrows: false,
        pagination: false,
        breakpoints: {
          768: {
            perPage: 1,
          },
        },
      }}
    >
      {images.map((img) => (
        <SplideSlide key={img.id}>
          <div className={styles.card}>
            <img src={img.webformatURL} alt={img.tags} />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
