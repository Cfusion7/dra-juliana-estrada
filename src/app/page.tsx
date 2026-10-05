import Image from "next/image";
import Link from "next/link";
import ArcoLineas from "@/components/Arco";
import AntesDespues from "@/components/AntesDespues";
import { IconoFlecha, IconoUbicacion } from "@/components/Iconos";
import { enlaceMaps, negocio } from "@/data/negocio";
import { categorias } from "@/data/tratamientos";

export default function Inicio() {
  const maps = enlaceMaps();

  return (
    <>
      {/* PORTADA */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl items-end gap-2 px-4 pt-6 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:pt-12">
          {/* Arco con la doctora */}
          <div className="relative mx-auto w-full max-w-[290px] sm:max-w-[340px] lg:order-2 lg:max-w-[440px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-gradient-to-b from-rubor-2 via-rubor to-porcelana">
              <ArcoLineas className="absolute inset-0 h-full w-full" />
              <Image
                src="/img/doctora/dra-juliana-estrada.png"
                alt="Dra. Juliana Estrada"
                width={509}
                height={1012}
                priority
                sizes="(min-width: 1024px) 300px, 220px"
                className="absolute bottom-0 left-1/2 h-[96%] w-auto max-w-none -translate-x-1/2"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-porcelana via-porcelana/70 to-transparent" />
            </div>
          </div>

          {/* Texto */}
          <div className="aparece relative z-10 -mt-14 pb-6 text-center lg:order-1 lg:mt-0 lg:pb-20 lg:text-left">
            <h1 className="font-serif text-[3.3rem] font-semibold leading-[0.92] text-cacao sm:text-7xl lg:text-[6.4rem]">
              Dra. Juliana
              <br />
              Estrada
            </h1>
            <p className="mt-4 text-base text-tinta sm:text-lg">{negocio.especialidad}</p>
            <p className="mx-auto mt-5 max-w-sm font-serif text-[1.6rem] leading-snug text-malva lg:mx-0 lg:text-3xl">
              {negocio.eslogan}
            </p>

            <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/agendar"
                className="rounded-full bg-malva px-8 py-4 text-center text-base font-medium text-white transition-colors hover:bg-malva-oscuro"
              >
                Agendar valoración
              </Link>
              <Link
                href="/tratamientos"
                className="rounded-full border border-cacao/30 px-8 py-4 text-center text-base font-medium text-cacao transition-colors hover:border-cacao hover:bg-white"
              >
                Ver tratamientos
              </Link>
            </div>

            {negocio.direccion && (
              <a
                href={maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm text-tinta underline-offset-4 hover:text-malva hover:underline"
              >
                <IconoUbicacion className="h-5 w-5 text-malva" />
                {negocio.direccion}
                {negocio.ciudad && `, ${negocio.ciudad}`}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* LA DOCTORA */}
      <section id="la-doctora" className="scroll-mt-20 bg-rubor">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.35fr_1fr] lg:gap-20 lg:py-24">
          <div>
            <h2 className="font-serif text-4xl font-semibold leading-[1.05] text-cacao sm:text-5xl">
              Precisión clínica con una mirada estética
            </h2>
            <p className="mt-6 max-w-[60ch] text-[1.02rem] leading-relaxed">
              Cada tratamiento se planea a tu medida para devolverle a tu sonrisa su función, su armonía y su estética.
              La doctora combina técnica, estética y tecnología para lograr resultados naturales, funcionales y
              duraderos, siempre cuidando tu salud y tu bienestar.
            </p>
          </div>
          <dl className="self-end divide-y divide-arena border-y border-arena">
            <div className="py-4">
              <dt className="text-sm text-nude">Especialista en Rehabilitación Oral</dt>
              <dd className="mt-0.5 font-normal text-cacao">Universidad Santo Tomás</dd>
            </div>
            <div className="py-4">
              <dt className="text-sm text-nude">Odontóloga</dt>
              <dd className="mt-0.5 font-normal text-cacao">Universidad Antonio Nariño</dd>
            </div>
            <div className="py-4">
              <dt className="text-sm text-nude">Experiencia</dt>
              <dd className="mt-0.5 font-normal text-cacao">8 años en odontología estética</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* TRATAMIENTOS */}
      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6 lg:pt-28">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-serif text-4xl font-semibold text-cacao sm:text-5xl">Tratamientos</h2>
            <p className="mt-3 max-w-md">Entra a cada categoría y marca con «Me interesa» lo que quieras consultar.</p>
          </div>
          <Link href="/tratamientos" className="text-sm font-medium text-malva underline-offset-4 hover:underline">
            Ver todos
          </Link>
        </div>

        <ul className="mt-10 grid gap-x-12 border-t border-arena md:grid-cols-2 md:border-t-0">
          {categorias.map((c) => (
            <li key={c.slug} className="border-b border-arena md:first:border-t md:[&:nth-child(2)]:border-t">
              <Link href={`/tratamientos/${c.slug}`} className="group flex items-center gap-5 py-5">
                <span className="relative h-24 w-[4.6rem] shrink-0 overflow-hidden rounded-t-full rounded-b-2xl bg-rubor">
                  <Image
                    src={c.foto}
                    alt=""
                    fill
                    sizes="80px"
                    style={c.encuadre ? { objectPosition: c.encuadre } : undefined}
                    className={c.recorte ? "scale-125 object-cover mix-blend-multiply" : "object-cover"}
                  />
                </span>
                <span className="flex-1">
                  <span className="block font-serif text-2xl font-semibold leading-tight text-cacao transition-colors group-hover:text-malva">
                    {c.nombre}
                  </span>
                  <span className="mt-1 block text-sm text-nude">
                    {c.tratamientos.length} {c.tratamientos.length === 1 ? "tratamiento" : "tratamientos"}
                  </span>
                </span>
                <IconoFlecha className="h-5 w-5 shrink-0 text-nude transition-transform group-hover:translate-x-1 group-hover:text-malva" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ANTES Y DESPUÉS */}
      <section id="antes-y-despues" className="mx-auto max-w-6xl scroll-mt-20 px-4 pt-20 sm:px-6 lg:pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <h2 className="font-serif text-4xl font-semibold text-cacao sm:text-5xl">Antes y después</h2>
            <p className="mt-4 max-w-md leading-relaxed">
              Un caso real de prótesis fija sobre dientes: los dientes remanentes se preparan para recibir una prótesis
              que devuelve la forma, el color y la función.
            </p>
            <Link
              href="/tratamientos/rehabilitacion"
              className="mt-6 inline-block text-sm font-medium text-malva underline-offset-4 hover:underline"
            >
              Ver rehabilitación oral
            </Link>
          </div>
          <AntesDespues
            antes="/img/antes-despues/antes-1.jpg"
            despues="/img/antes-despues/despues-1.jpg"
            descripcion="Prótesis fija sobre dientes"
          />
        </div>
      </section>

      {/* CÓMO AGENDAR */}
      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6 lg:pt-28">
        <div className="rounded-[36px] bg-cacao px-6 py-12 text-porcelana/85 sm:px-12 lg:px-16 lg:py-16">
          <h2 className="font-serif text-4xl font-semibold text-porcelana sm:text-5xl">Así agendas tu valoración</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              ["Elige", "Marca con «Me interesa» los tratamientos que quieres consultar."],
              ["Envía", "Tu lista llega por WhatsApp, ya escrita, con un solo toque."],
              ["Confirma", "Te respondemos para acordar el día y la hora de tu valoración."],
            ].map(([titulo, texto], i) => (
              <li key={titulo} className="border-t border-porcelana/20 pt-5">
                <span className="font-serif text-xl text-malva-claro">{i + 1}.</span>
                <p className="mt-1 text-lg font-medium text-porcelana">{titulo}</p>
                <p className="mt-2 text-sm leading-relaxed">{texto}</p>
              </li>
            ))}
          </ol>
          <Link
            href="/agendar"
            className="mt-10 inline-block w-full rounded-full bg-porcelana px-8 py-4 text-center font-medium text-cacao transition-colors hover:bg-malva-claro sm:w-auto"
          >
            Agendar valoración
          </Link>
        </div>
      </section>
    </>
  );
}
