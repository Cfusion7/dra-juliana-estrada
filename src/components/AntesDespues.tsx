"use client";

import Image from "next/image";
import { useState } from "react";

/** Comparador antes / después: se desliza con el dedo o con el teclado */
export default function AntesDespues({
  antes,
  despues,
  descripcion,
}: {
  antes: string;
  despues: string;
  descripcion: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <figure>
      <div className="relative aspect-[3/2] select-none overflow-hidden rounded-[28px] bg-rubor">
        <Image src={despues} alt={`Después: ${descripcion}`} fill sizes="(min-width: 768px) 60vw, 100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={antes} alt={`Antes: ${descripcion}`} fill sizes="(min-width: 768px) 60vw, 100vw" className="object-cover" />
        </div>

        <span className="absolute left-3 top-3 rounded-full bg-cacao/80 px-3 py-1 text-xs font-medium text-porcelana">Antes</span>
        <span className="absolute right-3 top-3 rounded-full bg-porcelana/90 px-3 py-1 text-xs font-medium text-cacao">Después</span>

        {/* línea y manija */}
        <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
          <div className="absolute inset-y-0 -translate-x-1/2 border-l-2 border-white/90" />
          <div className="absolute top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-malva text-white shadow-md">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
            </svg>
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Desliza para comparar antes y después"
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-3 text-sm text-nude">{descripcion}. Desliza para comparar.</figcaption>
    </figure>
  );
}
