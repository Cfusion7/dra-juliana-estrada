/**
 * DATOS DEL CONSULTORIO
 * ---------------------------------------------------------------
 * Aquí se cambia todo lo que es información de contacto.
 * Si un campo queda vacío (""), el sitio simplemente no lo muestra.
 */

export const negocio = {
  /** Nombre que aparece en grande en la portada */
  nombre: "Dra. Juliana Estrada",

  /** Nombre corto para saludos ("Hola Dra. Juliana, …") */
  nombreCorto: "Dra. Juliana",

  /** Especialidad que va debajo del nombre */
  especialidad: "Estética y rehabilitación oral",

  /** Frase corta de la portada */
  eslogan: "Sonrisas naturales, funcionales y duraderas.",

  /**
   * PENDIENTE: número de WhatsApp que recibe las citas.
   * Solo números, con el código de país y sin "+" ni espacios. Ej: "573001234567".
   * Mientras esté vacío, el botón abre WhatsApp para que la persona elija el contacto.
   */
  whatsapp: "",

  /** PENDIENTE: ciudad del consultorio. Ej: "Bucaramanga" */
  ciudad: "",

  /** PENDIENTE: dirección del consultorio. Ej: "Cra 33 # 48-20, consultorio 502" */
  direccion: "",

  /**
   * Enlace de Google Maps. Si lo dejas vacío y hay dirección,
   * se arma solo a partir de la dirección y la ciudad.
   */
  mapsUrl: "",

  /** PENDIENTE: horario de atención. Ej: "Lunes a viernes 8:00 a.m. – 6:00 p.m." */
  horario: "",

  /** Instagram (solo el usuario, sin @). Opcional. */
  instagram: "",
};

/** Enlace a Google Maps listo para usar (o "" si no hay dirección). */
export function enlaceMaps(): string {
  if (negocio.mapsUrl) return negocio.mapsUrl;
  if (!negocio.direccion) return "";
  const q = [negocio.direccion, negocio.ciudad].filter(Boolean).join(", ");
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}
