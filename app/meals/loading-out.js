import classes from "./loading.module.css";

//Mejoramos la experiencia de usuario al recargar la pagina
export default function MealsLoadingPage() {
  return <p className={classes.loading}>Fetching meals...</p>;
}
