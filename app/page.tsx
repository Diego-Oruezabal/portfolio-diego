// app/page.tsx
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/es");  // O cambia a "/en" si quieres inglés como idioma por defecto
}
