"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLista } from "./ListaProvider";

/** Barra fija abajo en celular cuando hay tratamientos en la lista */
export default function BarraLista() {
  const { items, listo } = useLista();
  const pathname = usePathname();
  if (!listo || items.length === 0 || pathname === "/agendar") return null;

  const n = items.length;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-arena bg-porcelana/95 px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between gap-3">
        <p className="text-sm text-tinta">
          <span className="font-semibold text-cacao">{n}</span> {n === 1 ? "tratamiento" : "tratamientos"} en tu lista
        </p>
        <Link
          href="/agendar"
          className="rounded-full bg-malva px-5 py-3 text-sm font-medium text-white active:bg-malva-oscuro"
        >
          Agendar valoración
        </Link>
      </div>
    </div>
  );
}
