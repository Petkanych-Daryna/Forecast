import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css";
import styles from "./NatureSlider.module.css";

export function NatureSlider() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=52746634-048ebfd846d8921f5de123532&q=nature&image_type=photo&per_page=10`,
    )
      .then((res) => res.json())
      .then((data) => setImages(data.hits));
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Beautiful nature</h2>

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
    </section>
  );
}
