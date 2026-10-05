/**
 * TRATAMIENTOS
 * ---------------------------------------------------------------
 * Cada categoría tiene su página propia y su lista de tratamientos.
 *
 * Fotos: van en /public/img/<categoria>/<tratamiento>.jpg
 * Para cambiar una foto, reemplaza el archivo dejando el mismo nombre.
 *
 * "recorte: true" es para fotos de objetos sobre fondo blanco
 * (prótesis, alineadores…): el fondo blanco se funde con la tarjeta.
 *
 * "opciones" son variantes sin costo que el paciente puede escoger.
 * No hay precios: el botón final pide una valoración por WhatsApp.
 */

export type Tratamiento = {
  slug: string;
  nombre: string;
  /** Línea corta debajo del nombre (opcional) */
  apunte?: string;
  descripcion: string;
  foto: string;
  recorte?: boolean;
  opciones?: string[];
};

export type Categoria = {
  slug: string;
  nombre: string;
  intro: string;
  foto: string;
  recorte?: boolean;
  /** Qué parte de la foto se ve en la tarjeta de la categoría (ej: "70% 55%") */
  encuadre?: string;
  tratamientos: Tratamiento[];
};

export const categorias: Categoria[] = [
  {
    slug: "prevencion",
    nombre: "Prevención y salud oral",
    intro:
      "Cuidados para mantener tus dientes sanos y proteger los tratamientos estéticos que ya tienes.",
    foto: "/img/prevencion/limpieza-profunda.jpg",
    tratamientos: [
      {
        slug: "limpieza-profunda",
        nombre: "Limpieza profunda",
        apunte: "Con ultrasonido y profilaxis",
        descripcion:
          "Elimina sarro, cálculos y placa bacteriana con un equipo de ultrasonido que desprende los depósitos por vibración controlada. Termina con un pulido que deja los dientes limpios, lisos y brillantes.",
        foto: "/img/prevencion/limpieza-profunda.jpg",
      },
      {
        slug: "toxina-botulinica",
        nombre: "Toxina botulínica",
        apunte: "Botox",
        descripcion:
          "Tratamiento mínimamente invasivo. En bruxismo relaja los músculos de la masticación y reduce la tensión, el dolor mandibular y el desgaste dental. En uso estético suaviza las líneas de expresión sin perder la naturalidad del rostro.",
        foto: "/img/prevencion/toxina-botulinica.jpg",
        opciones: ["Para bruxismo", "Estético"],
      },
      {
        slug: "placa-neuromiorrelajante",
        nombre: "Placa neuromiorrelajante",
        descripcion:
          "Dispositivo hecho a tu medida que relaja los músculos de la masticación, protege los dientes y previene fracturas en los tratamientos estéticos que ya tienes.",
        foto: "/img/prevencion/placa-neuromiorrelajante.jpg",
        recorte: true,
      },
    ],
  },
  {
    slug: "estetica",
    nombre: "Estética dental",
    intro: "Tratamientos para mejorar el color, la forma y la armonía de tu sonrisa.",
    foto: "/img/estetica/diseno-sonrisa-ceramica.jpg",
    tratamientos: [
      {
        slug: "blanqueamiento",
        nombre: "Blanqueamiento dental",
        apunte: "Entre 4 y 6 sesiones",
        descripcion:
          "Dientes más blancos en poco tiempo, con un acabado natural y brillante y menor sensibilidad. El número de sesiones depende de cada paciente.",
        foto: "/img/estetica/blanqueamiento.jpg",
      },
      {
        slug: "diseno-sonrisa-resina",
        nombre: "Diseño de sonrisa en resina",
        descripcion:
          "Con resinas de alta estética para mejorar la forma y la apariencia de tu sonrisa de manera sutil. Necesita controles y pulido cada tres meses, más limpiezas regulares. Dura menos que la cerámica.",
        foto: "/img/estetica/diseno-sonrisa-resina.jpg",
      },
      {
        slug: "diseno-sonrisa-ceramica",
        nombre: "Diseño de sonrisa en cerámica",
        apunte: "Disilicato de litio",
        descripcion:
          "Cerámica o porcelana de alta estética y gran resistencia. Acabado más natural, color estable en el tiempo y menor riesgo de fractura: la opción más duradera para tu sonrisa.",
        foto: "/img/estetica/diseno-sonrisa-ceramica.jpg",
        opciones: ["Monolíticos", "Estratificados"],
      },
    ],
  },
  {
    slug: "restauraciones",
    nombre: "Restauraciones dentales",
    intro: "Devuelven la forma y la función del diente conservando la mayor estructura posible.",
    foto: "/img/restauraciones/incrustaciones-ceramicas.jpg",
    encuadre: "72% 55%",
    tratamientos: [
      {
        slug: "incrustaciones-ceramicas",
        nombre: "Incrustaciones cerámicas",
        descripcion:
          "Piezas de cerámica que reemplazan la estructura dental perdida. Ayudan a evitar fracturas y caries, corrigen defectos y disminuyen la sensibilidad, de manera conservadora.",
        foto: "/img/restauraciones/incrustaciones-ceramicas.jpg",
      },
    ],
  },
  {
    slug: "rehabilitacion",
    nombre: "Rehabilitación oral",
    intro: "Soluciones para reponer dientes perdidos y recuperar la función y la estética.",
    foto: "/img/rehabilitacion/protesis-fija-implantes.jpg",
    tratamientos: [
      {
        slug: "protesis-fija-dientes",
        nombre: "Prótesis fija sobre dientes",
        descripcion:
          "Se apoya en tus dientes remanentes, previamente preparados, y se fija con un cemento especializado para reponer los dientes perdidos y recuperar la masticación y la estética.",
        foto: "/img/rehabilitacion/protesis-fija-dientes.jpg",
        recorte: true,
      },
      {
        slug: "protesis-fija-implantes",
        nombre: "Prótesis fija sobre implantes",
        apunte: "En tres fases",
        descripcion:
          "Planificación con tomografía y modelos digitales, colocación de los implantes y prótesis definitiva con impresión digital. El provisional puede ser inmediato o a los 3 meses, según tu caso.",
        foto: "/img/rehabilitacion/protesis-fija-implantes.jpg",
      },
      {
        slug: "corona-individual",
        nombre: "Corona individual",
        descripcion:
          "Recubre y protege un diente comprometido, devolviéndole función, resistencia y estética. Indicada en fracturas, desgaste, caries extensas o dientes con endodoncia.",
        foto: "/img/rehabilitacion/corona-individual.jpg",
      },
      {
        slug: "corona-implante",
        nombre: "Corona sobre implante",
        descripcion:
          "Reemplaza un diente ausente sobre un implante dental, con una apariencia y una función muy naturales. Una solución estable y duradera.",
        foto: "/img/rehabilitacion/corona-implante.jpg",
        recorte: true,
      },
      {
        slug: "protesis-removible-total",
        nombre: "Prótesis removible total",
        descripcion:
          "Para reemplazar todos los dientes. En acrílico, con una base rosada que simula la encía y dientes artificiales que devuelven la función y la estética.",
        foto: "/img/rehabilitacion/protesis-removible-total.jpg",
        recorte: true,
      },
      {
        slug: "protesis-removible-parcial",
        nombre: "Prótesis removible parcial",
        apunte: "Con ganchos",
        descripcion:
          "Reemplaza algunos dientes perdidos. Estructura de metal y acrílico que se sujeta a tus dientes con ganchos metálicos.",
        foto: "/img/rehabilitacion/protesis-removible-parcial.jpg",
        recorte: true,
      },
    ],
  },
  {
    slug: "ortodoncia",
    nombre: "Ortodoncia",
    intro: "Alinea tus dientes de forma progresiva y discreta.",
    foto: "/img/ortodoncia/ortodoncia-invisible.jpg",
    recorte: true,
    tratamientos: [
      {
        slug: "ortodoncia-invisible",
        nombre: "Ortodoncia invisible",
        apunte: "Alineadores transparentes",
        descripcion:
          "Alineadores hechos a tu medida que se cambian más o menos cada 15 días para mover los dientes poco a poco. La duración y el número de alineadores dependen de cada paciente.",
        foto: "/img/ortodoncia/ortodoncia-invisible.jpg",
        recorte: true,
      },
    ],
  },
];

export function buscarCategoria(slug: string) {
  return categorias.find((c) => c.slug === slug);
}
