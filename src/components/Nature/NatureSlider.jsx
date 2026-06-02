import { useEffect, useState } from "react";
import { fetchNatureImages } from "./NatureSliderAPI";
import { NatureSliderList } from "./NatureSliderList";
import styles from "./NatureSlider.module.css";

export function NatureSlider() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchNatureImages()
      .then((data) => setImages(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Beautiful nature</h2>

      <NatureSliderList images={images} />
    </section>
  );
}
