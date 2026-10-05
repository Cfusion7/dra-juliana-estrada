"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { armarMensaje, enlaceWhatsApp } from "@/lib/whatsapp";
import { useLista } from "./ListaProvider";
import { IconoCerrar, IconoWhatsApp } from "./Iconos";

const HORARIOS = ["Mañana", "Tarde", "Cualquier horario"];

export default function FormularioCita() {
  const { items, quitar, listo } = useLista();
  const [nombre, setNombre] = useState("");
  const [horario, setHorario] = useState("");
  const [nota, setNota] = useState("");

  const mensaje = useMemo(() => armarMensaje(items, { nombre, horario, nota }), [items, nombre, horario, nota]);

  return (
    <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
      {/* Lista */}
      <section aria-labelledby="titulo-lista">
        <h2 id="titulo-lista" className="font-serif text-3xl font-semibold text-cacao">
          Tu lista
        </h2>

        {!listo ? (
          <div className="mt-5 h-24 animate-pulse rounded-3xl bg-rubor" />
        ) : items.length === 0 ? (
          <div className="mt-5 rounded-3xl bg-rubor p-6">
            <p className="leading-relaxed">
              Aún no has elegido tratamientos. Puedes pedir una valoración general o mirar los tratamientos y marcar los
              que te interesan.
            </p>
            <Link href="/tratamientos" className="mt-4 inline-block font-medium text-malva underline-offset-4 hover:underline">
              Ver tratamientos
            </Link>
          </div>
        ) : (
          <ul className="mt-5 divide-y divide-arena border-y border-arena">
            {items.map((it) => (
              <li key={it.id} className="flex items-center justify-between gap-4 py-4">
                <span>
                  <span className="block font-normal text-cacao">{it.nombre}</span>
                  {it.opcion && <span className="block text-sm text-nude">{it.opcion}</span>}
                </span>
                <button
                  type="button"
                  onClick={() => quitar(it.id)}
                  aria-label={`Quitar ${it.nombre}`}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-nude transition-colors hover:bg-rubor hover:text-malva"
                >
                  <IconoCerrar className="h-5 w-5" />
                </button>
              </li>
            ))}
          </ul>
        )}

        {listo && items.length > 0 && (
          <Link href="/tratamientos" className="mt-4 inline-block text-sm font-medium text-malva underline-offset-4 hover:underline">
            Agregar otro tratamiento
          </Link>
        )}
      </section>

      {/* Datos */}
      <section aria-labelledby="titulo-datos" className="rounded-[32px] bg-white p-6 ring-1 ring-arena sm:p-8">
        <h2 id="titulo-datos" className="font-serif text-3xl font-semibold text-cacao">
          Tus datos
        </h2>
        <p className="mt-1 text-sm text-nude">Todo es opcional.</p>

        <form
          className="mt-6 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(enlaceWhatsApp(mensaje), "_blank", "noopener,noreferrer");
          }}
        >
          <div>
            <label htmlFor="nombre" className="text-sm font-normal text-cacao">
              Nombre
            </label>
            <input
              id="nombre"
              type="text"
              autoComplete="name"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="¿Cómo te llamas?"
              className="mt-2 w-full rounded-2xl border border-arena bg-porcelana px-4 py-3.5 text-base text-cacao placeholder:text-nude/70 focus:border-malva focus:outline-none"
            />
          </div>

          <fieldset>
            <legend className="text-sm font-normal text-cacao">Horario preferido</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {HORARIOS.map((h) => (
                <label key={h} className="cursor-pointer">
                  <input
                    type="radio"
                    name="horario"
                    value={h}
                    checked={horario === h}
                    onChange={() => setHorario(h)}
                    className="peer sr-only"
                  />
                  <span className="block rounded-full border border-arena bg-porcelana px-4 py-2.5 text-sm transition-colors peer-checked:border-cacao peer-checked:bg-cacao peer-checked:text-porcelana peer-focus-visible:outline-2 peer-focus-visible:outline-malva">
                    {h}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="nota" className="text-sm font-normal text-cacao">
              Nota
            </label>
            <textarea
              id="nota"
              rows={3}
              value={nota}
              onChange={(e) => setNota(e.target.value)}
              placeholder="Cuéntanos qué te gustaría mejorar de tu sonrisa"
              className="mt-2 w-full resize-none rounded-2xl border border-arena bg-porcelana px-4 py-3.5 text-base text-cacao placeholder:text-nude/70 focus:border-malva focus:outline-none"
            />
          </div>

          <details className="group rounded-2xl bg-rubor/70 px-4 py-3">
            <summary className="cursor-pointer list-none text-sm font-normal text-cacao">
              <span className="underline-offset-4 group-open:underline">Ver el mensaje que se enviará</span>
            </summary>
            <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-tinta">{mensaje}</pre>
          </details>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 rounded-full bg-malva px-6 py-4 text-base font-medium text-white transition-colors hover:bg-malva-oscuro"
          >
            <IconoWhatsApp className="h-6 w-6" />
            Enviar por WhatsApp
          </button>
        </form>
      </section>
    </div>
  );
}
