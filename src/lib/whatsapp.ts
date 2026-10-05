import { negocio } from "@/data/negocio";

export type ItemLista = {
  /** id único: tratamiento + opción */
  id: string;
  slug: string;
  nombre: string;
  opcion?: string;
};

export type DatosCita = {
  nombre: string;
  horario: string;
  nota: string;
};

/** Arma el texto del mensaje de WhatsApp */
export function armarMensaje(items: ItemLista[], datos: DatosCita): string {
  const lineas: string[] = [];
  lineas.push(`Hola ${negocio.nombreCorto}, quiero agendar una valoración.`);
  lineas.push("");

  if (items.length > 0) {
    lineas.push("Tratamientos que me interesan:");
    for (const it of items) {
      lineas.push(`• ${it.nombre}${it.opcion ? ` (${it.opcion})` : ""}`);
    }
  } else {
    lineas.push("Me interesa una valoración general.");
  }

  lineas.push("");
  lineas.push(`Nombre: ${datos.nombre.trim() || "—"}`);
  lineas.push(`Horario preferido: ${datos.horario || "—"}`);
  if (datos.nota.trim()) lineas.push(`Nota: ${datos.nota.trim()}`);
  lineas.push("");
  lineas.push("Quedo atento(a) para confirmar la cita. ¡Gracias!");
  return lineas.join("\n");
}

/** Enlace de WhatsApp con el mensaje ya escrito */
export function enlaceWhatsApp(texto: string): string {
  const numero = negocio.whatsapp.replace(/\D/g, "");
  const base = numero ? `https://wa.me/${numero}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(texto)}`;
}
