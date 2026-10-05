"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import type { ItemLista } from "@/lib/whatsapp";

const CLAVE = "dra-juliana-lista-v1";

type Contexto = {
  items: ItemLista[];
  listo: boolean;
  tiene: (id: string) => boolean;
  agregar: (item: ItemLista) => void;
  quitar: (id: string) => void;
  vaciar: () => void;
  avisar: (texto: string) => void;
};

const ListaContext = createContext<Contexto | null>(null);

export function ListaProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ItemLista[]>([]);
  const [listo, setListo] = useState(false);
  const [aviso, setAviso] = useState<{ texto: string; n: number } | null>(null);
  const temporizador = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Recupera la lista guardada (sobrevive a recargar la página)
  useEffect(() => {
    try {
      const guardado = localStorage.getItem(CLAVE);
      if (guardado) setItems(JSON.parse(guardado));
    } catch {}
    setListo(true);
  }, []);

  useEffect(() => {
    if (!listo) return;
    try {
      localStorage.setItem(CLAVE, JSON.stringify(items));
    } catch {}
  }, [items, listo]);

  const avisar = useCallback((texto: string) => {
    if (temporizador.current) clearTimeout(temporizador.current);
    setAviso((a) => ({ texto, n: (a?.n ?? 0) + 1 }));
    temporizador.current = setTimeout(() => setAviso(null), 2200);
  }, []);

  const tiene = useCallback((id: string) => items.some((i) => i.id === id), [items]);

  const agregar = useCallback(
    (item: ItemLista) => {
      setItems((prev) => (prev.some((i) => i.id === item.id) ? prev : [...prev, item]));
      avisar(`${item.nombre} quedó en tu lista`);
    },
    [avisar]
  );

  const quitar = useCallback(
    (id: string) => {
      setItems((prev) => prev.filter((i) => i.id !== id));
      avisar("Quitado de tu lista");
    },
    [avisar]
  );

  const vaciar = useCallback(() => setItems([]), []);

  return (
    <ListaContext.Provider value={{ items, listo, tiene, agregar, quitar, vaciar, avisar }}>
      {children}
      <div aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-24 z-[60] md:bottom-8">
        {aviso && (
          <p
            key={aviso.n}
            className="aviso absolute left-1/2 w-max max-w-[calc(100vw-32px)] -translate-x-1/2 rounded-full bg-cacao px-5 py-3 text-center text-sm font-normal text-porcelana shadow-lg"
          >
            {aviso.texto}
          </p>
        )}
      </div>
    </ListaContext.Provider>
  );
}

export function useLista() {
  const ctx = useContext(ListaContext);
  if (!ctx) throw new Error("useLista debe usarse dentro de ListaProvider");
  return ctx;
}
