"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLista } from "./ListaProvider";
import { IconoLista } from "./Iconos";

const enlaces = [
  { href: "/tratamientos", texto: "Tratamientos" },
  { href: "/#antes-y-despues", texto: "Antes y después" },
  { href: "/#la-doctora", texto: "La doctora" },
];

export default function Encabezado() {
  const { items, listo } = useLista();
  const pathname = usePathname();
  const total = listo ? items.length : 0;
  const [salta, setSalta] = useState(false);
  const previo = useRef(total);

  useEffect(() => {
    if (total > previo.current) {
      setSalta(true);
      const t = setTimeout(() => setSalta(false), 450);
      previo.current = total;
      return () => clearTimeout(t);
    }
    previo.current = total;
  }, [total]);

  return (
    <header className="sticky top-0 z-50 border-b border-arena/70 bg-porcelana/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="group flex flex-col leading-none" aria-label="Inicio">
          <span className="font-serif text-[1.45rem] font-semibold text-cacao">Juliana Estrada</span>
          <span className="mt-0.5 text-[0.7rem] font-normal text-nude">Odontología estética</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {enlaces.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className={`text-sm font-normal transition-colors hover:text-malva ${
                pathname.startsWith(e.href) && e.href !== "/" ? "text-malva" : "text-tinta"
              }`}
            >
              {e.texto}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/agendar"
            className="hidden rounded-full bg-malva px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-malva-oscuro md:inline-block"
          >
            Agendar valoración
          </Link>
          <Link
            href="/agendar"
            aria-label={`Mi lista de tratamientos: ${total}`}
            className="relative grid h-11 w-11 place-items-center rounded-full border border-arena bg-white text-cacao transition-colors hover:border-malva hover:text-malva"
          >
            <IconoLista className="h-5 w-5" />
            {total > 0 && (
              <span
                className={`absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-malva px-1 text-[0.7rem] font-semibold text-white ${
                  salta ? "contador-salta" : ""
                }`}
              >
                {total}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
