import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export async function generateMetadata() {
  const meal = getMeal(params.mealSlug); //Nos permite de forma dinámica mostrar el titulo según la comida

  if (!meal) {
    //Función que detiene la ejecución del componente, y muestra la pagina de error mas cercana
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}
export default function MealsDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    //Función que detiene la ejecución del componente, y muestra la pagina de error mas cercana
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>"); //Para que aparezca correctamente el salto de linea por numero

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
