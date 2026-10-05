import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { categorias } from "@/data/tratamientos";

export const metadata: Metadata = {
  title: "Tratamientos",
  description: "Prevención, estética dental, restauraciones, rehabilitación oral y ortodoncia.",
};

export default function Tratamientos() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:pt-16">
      <h1 className="font-serif text-5xl font-semibold text-cacao sm:text-6xl">Tratamientos</h1>
      <p className="mt-4 max-w-xl leading-relaxed">
        Elige una categoría, conoce cada tratamiento y marca con «Me interesa» los que quieras consultar en tu valoración.
      </p>

      <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-5">
        {categorias.map((c, i) => (
          <li key={c.slug}>
            <Link href={`/tratamientos/${c.slug}`} className="group block">
              <span className="relative block aspect-[4/5] overflow-hidden rounded-t-full rounded-b-3xl bg-rubor">
                <Image
                  src={c.foto}
                  alt=""
                  fill
                  priority={i < 2}
                  sizes="(min-width: 1024px) 220px, (min-width: 768px) 30vw, 50vw"
                  style={c.encuadre ? { objectPosition: c.encuadre } : undefined}
                  className={`object-cover transition-transform duration-500 group-hover:scale-[1.04] ${
                    c.recorte ? "mix-blend-multiply" : ""
                  }`}
                />
              </span>
              <span className="mt-4 block font-serif text-[1.45rem] font-semibold leading-tight text-cacao group-hover:text-malva">
                {c.nombre}
              </span>
              <span className="mt-1 block text-sm text-nude">
                {c.tratamientos.length} {c.tratamientos.length === 1 ? "tratamiento" : "tratamientos"}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
