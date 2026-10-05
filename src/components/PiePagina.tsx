import Link from "next/link";
import { enlaceMaps, negocio } from "@/data/negocio";
import { categorias } from "@/data/tratamientos";
import { IconoReloj, IconoUbicacion, IconoWhatsApp } from "./Iconos";

export default function PiePagina() {
  const maps = enlaceMaps();
  return (
    <footer className="mt-24 border-t border-arena bg-rubor pb-28 pt-16 md:pb-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-serif text-3xl font-semibold text-cacao">{negocio.nombre}</p>
          <p className="mt-1 text-sm">{negocio.especialidad}</p>
          <ul className="mt-6 space-y-3 text-sm">
            {negocio.direccion && (
              <li className="flex gap-3">
                <IconoUbicacion className="h-5 w-5 shrink-0 text-malva" />
                {maps ? (
                  <a href={maps} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                    {negocio.direccion}
                    {negocio.ciudad && `, ${negocio.ciudad}`}
                  </a>
                ) : (
                  negocio.direccion
                )}
              </li>
            )}
            {negocio.horario && (
              <li className="flex gap-3">
                <IconoReloj className="h-5 w-5 shrink-0 text-malva" />
                {negocio.horario}
              </li>
            )}
            {negocio.whatsapp && (
              <li className="flex gap-3">
                <IconoWhatsApp className="h-5 w-5 shrink-0 text-malva" />
                <a href={`https://wa.me/${negocio.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Escríbenos por WhatsApp
                </a>
              </li>
            )}
            {negocio.instagram && (
              <li>
                <a href={`https://instagram.com/${negocio.instagram}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Instagram @{negocio.instagram}
                </a>
              </li>
            )}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-cacao">Tratamientos</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {categorias.map((c) => (
              <li key={c.slug}>
                <Link href={`/tratamientos/${c.slug}`} className="hover:text-malva">
                  {c.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-cacao">Tu cita</p>
          <p className="mt-4 text-sm leading-relaxed">
            Elige los tratamientos que te interesan y envía tu solicitud de valoración por WhatsApp.
          </p>
          <Link
            href="/agendar"
            className="mt-5 inline-block rounded-full bg-malva px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-malva-oscuro"
          >
            Agendar valoración
          </Link>
        </div>
      </div>
      <p className="mx-auto mt-14 max-w-6xl px-4 text-xs text-nude sm:px-6">
        © {new Date().getFullYear()} {negocio.nombre}
      </p>
    </footer>
  );
}
