import type { Metadata, Viewport } from "next";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "./globals.css";
import { ListaProvider } from "@/components/ListaProvider";
import Encabezado from "@/components/Encabezado";
import PiePagina from "@/components/PiePagina";
import BarraLista from "@/components/BarraLista";
import { negocio } from "@/data/negocio";

export const metadata: Metadata = {
  title: {
    default: `${negocio.nombre} | ${negocio.especialidad}`,
    template: `%s | ${negocio.nombre}`,
  },
  description:
    "Odontología estética y rehabilitación oral: diseño de sonrisa, blanqueamiento, coronas, prótesis e implantes. Agenda tu valoración por WhatsApp.",
};

export const viewport: Viewport = {
  themeColor: "#fbf8f6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-dvh">
        <ListaProvider>
          <Encabezado />
          <main>{children}</main>
          <PiePagina />
          <BarraLista />
        </ListaProvider>
      </body>
    </html>
  );
}
