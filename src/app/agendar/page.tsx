import type { Metadata } from "next";
import FormularioCita from "@/components/FormularioCita";

export const metadata: Metadata = {
  title: "Agendar valoración",
  description: "Envía tu solicitud de valoración por WhatsApp con los tratamientos que te interesan.",
};

export default function Agendar() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:pt-16">
      <h1 className="font-serif text-5xl font-semibold leading-[1.02] text-cacao sm:text-6xl">Agenda tu valoración</h1>
      <p className="mt-4 max-w-xl leading-relaxed">
        Revisa los tratamientos que te interesan, déjanos tus datos y envía la solicitud por WhatsApp. Te responderemos
        para acordar el día y la hora.
      </p>
      <FormularioCita />
    </div>
  );
}
