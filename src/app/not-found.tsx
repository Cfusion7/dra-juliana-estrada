import Link from "next/link";

export default function NoEncontrado() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-serif text-5xl font-semibold text-cacao">Esta página no existe</h1>
      <p className="mt-4">Puede que el enlace esté incompleto. Vuelve al inicio o mira los tratamientos.</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/" className="rounded-full bg-malva px-7 py-3.5 font-medium text-white">
          Ir al inicio
        </Link>
        <Link href="/tratamientos" className="rounded-full border border-cacao/30 px-7 py-3.5 font-medium text-cacao">
          Ver tratamientos
        </Link>
      </div>
    </div>
  );
}
