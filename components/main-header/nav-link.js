"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav.link.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      } //Si estamos en la ruta activa, entonces aplica el estilo active y link, sino no añadas ninguna clase solo muestra la clase link
    >
      {children}
    </Link>
  );
}
