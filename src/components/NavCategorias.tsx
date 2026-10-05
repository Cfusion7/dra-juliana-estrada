"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { categorias } from "@/data/tratamientos";

/** Barra para saltar entre categorías (se queda pegada arriba) */
export default function NavCategorias() {
  const pathname = usePathname();
  const contenedor = useRef<HTMLDivElement>(null);

  // Deja visible la categoría activa en celular
  useEffect(() => {
    const activo = contenedor.current?.querySelector<HTMLElement>("[data-activo='true']");
    activo?.scrollIntoView({ block: "nearest", inline: "center" });
  }, [pathname]);

  return (
    <nav aria-label="Categorías" className="sticky top-16 z-30 border-b border-arena/70 bg-porcelana/95 backdrop-blur-md">
      <div ref={contenedor} className="sin-barra mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
        {categorias.map((c) => {
          const activo = pathname === `/tratamientos/${c.slug}`;
          return (
            <Link
              key={c.slug}
              href={`/tratamientos/${c.slug}`}
              data-activo={activo}
              aria-current={activo ? "page" : undefined}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${
                activo
                  ? "border-malva bg-malva font-medium text-white"
                  : "border-arena bg-white text-tinta hover:border-malva hover:text-malva"
              }`}
            >
              {c.nombre}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
