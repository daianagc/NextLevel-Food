"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";
import classes from "./image-slideshow.module.css";

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); //se usa para manejar el índice de la imagen actual

  useEffect(() => {
    //establece un intervalo que cambia la imagen cada 5 segundos
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval); // limpia el intervalo cuando el componente se desmonta.
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map(
        (
          image,
          index //Se mapea el array de imágenes para renderizar cada una.
        ) => (
          <Image
            key={index}
            src={image.image}
            className={index === currentImageIndex ? classes.active : ""}
            alt={image.alt}
          /> //La salida de la imagen componente de next para cada imagen
          //La clase CSS active se aplica a la imagen actual para estilizarla
        )
      )}
    </div>
  );
}
