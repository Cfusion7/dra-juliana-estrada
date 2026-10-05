"use client";

import Image from "next/image";
import { useState } from "react";
import type { Tratamiento } from "@/data/tratamientos";
import { useLista } from "./ListaProvider";
import { IconoCheck, IconoMas } from "./Iconos";

export default function TarjetaTratamiento({ t, prioridad = false }: { t: Tratamiento; prioridad?: boolean }) {
  const { tiene, agregar, quitar, listo } = useLista();
  const [opcion, setOpcion] = useState<string | undefined>(t.opciones?.[0]);
  const id = opcion ? `${t.slug}:${opcion}` : t.slug;
  const enLista = listo && tiene(id);

  function alternar() {
    if (enLista) quitar(id);
    else agregar({ id, slug: t.slug, nombre: t.nombre, opcion });
  }

  return (
    <article className="flex flex-col">
      <div className="relative aspect-[3/2] overflow-hidden rounded-[28px] bg-rubor">
        <Image
          src={t.foto}
          alt={t.nombre}
          fill
          priority={prioridad}
          sizes="(min-width: 768px) 45vw, 100vw"
          className={t.recorte ? "object-contain p-4 mix-blend-multiply" : "object-cover"}
        />
      </div>

      <div className="flex flex-1 flex-col px-1 pt-5">
        <h3 className="font-serif text-[1.75rem] font-semibold leading-tight text-cacao">{t.nombre}</h3>
        {t.apunte && <p className="mt-1 text-sm font-normal text-nude">{t.apunte}</p>}
        <p className="mt-3 max-w-prose text-[0.95rem] leading-relaxed">{t.descripcion}</p>

        {t.opciones && (
          <fieldset className="mt-5">
            <legend className="mb-2 text-sm font-normal text-cacao">Me interesa para</legend>
            <div className="flex flex-wrap gap-2">
              {t.opciones.map((o) => (
                <label key={o} className="cursor-pointer">
                  <input
                    type="radio"
                    name={`opcion-${t.slug}`}
                    value={o}
                    checked={opcion === o}
                    onChange={() => setOpcion(o)}
                    className="peer sr-only"
                  />
                  <span className="block rounded-full border border-arena bg-white px-4 py-2 text-sm transition-colors peer-checked:border-cacao peer-checked:bg-cacao peer-checked:text-porcelana peer-focus-visible:outline-2 peer-focus-visible:outline-malva">
                    {o}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        )}

        <div className="mt-auto pt-6">
          <button
            type="button"
            onClick={alternar}
            aria-pressed={enLista}
            className={`flex w-full items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-[0.95rem] font-medium transition-colors sm:w-auto ${
              enLista
                ? "border-malva bg-malva text-white hover:bg-malva-oscuro"
                : "border-malva bg-transparent text-malva hover:bg-malva hover:text-white"
            }`}
          >
            {enLista ? <IconoCheck className="h-5 w-5" /> : <IconoMas className="h-5 w-5" />}
            {enLista ? "En tu lista" : "Me interesa"}
          </button>
          {enLista && (
            <p className="mt-2 text-center text-xs text-nude sm:text-left">Toca de nuevo para quitarlo</p>
          )}
        </div>
      </div>
    </article>
  );
}
