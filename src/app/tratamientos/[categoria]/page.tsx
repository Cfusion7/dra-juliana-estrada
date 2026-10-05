import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NavCategorias from "@/components/NavCategorias";
import TarjetaTratamiento from "@/components/TarjetaTratamiento";
import { IconoFlecha } from "@/components/Iconos";
import { buscarCategoria, categorias } from "@/data/tratamientos";

type Props = { params: Promise<{ categoria: string }> };

export function generateStaticParams() {
  return categorias.map((c) => ({ categoria: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params;
  const c = buscarCategoria(categoria);
  return c ? { title: c.nombre, description: c.intro } : {};
}

export default async function PaginaCategoria({ params }: Props) {
  const { categoria } = await params;
  const c = buscarCategoria(categoria);
  if (!c) notFound();

  const i = categorias.findIndex((x) => x.slug === c.slug);
  const siguiente = categorias[(i + 1) % categorias.length];

  return (
    <>
      <NavCategorias />
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:pt-14">
        <h1 className="font-serif text-[2.9rem] font-semibold leading-[1.02] text-cacao sm:text-6xl">{c.nombre}</h1>
        <p className="mt-4 max-w-xl leading-relaxed">{c.intro}</p>

        <div className="mt-12 grid gap-x-12 gap-y-16 md:grid-cols-2">
          {c.tratamientos.map((t, k) => (
            <TarjetaTratamiento key={t.slug} t={t} prioridad={k < 2} />
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-arena pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link href={`/tratamientos/${siguiente.slug}`} className="group flex items-center gap-3">
            <span>
              <span className="block text-sm text-nude">Siguiente categoría</span>
              <span className="block font-serif text-2xl font-semibold text-cacao group-hover:text-malva">
                {siguiente.nombre}
              </span>
            </span>
            <IconoFlecha className="h-5 w-5 text-nude transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/agendar"
            className="rounded-full bg-malva px-7 py-3.5 text-center font-medium text-white transition-colors hover:bg-malva-oscuro"
          >
            Agendar valoración
          </Link>
        </div>
      </div>
    </>
  );
}
