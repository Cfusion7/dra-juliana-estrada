/**
 * Arco de la portada: la forma de una corona dental / ventana en arco,
 * con líneas de contorno finas como las del portafolio.
 */
export default function ArcoLineas({ className = "" }: { className?: string }) {
  const w = 400;
  const h = 520;
  const lineas = Array.from({ length: 7 }, (_, i) => i);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={className} fill="none" aria-hidden="true" preserveAspectRatio="xMidYMax meet">
      {lineas.map((i) => {
        const inset = 18 + i * 16;
        const x0 = inset;
        const x1 = w - inset;
        const r = (x1 - x0) / 2;
        const top = inset;
        const d = `M ${x0} ${h} L ${x0} ${top + r} A ${r} ${r} 0 0 1 ${x1} ${top + r} L ${x1} ${h}`;
        return (
          <path
            key={i}
            d={d}
            className="arco-linea"
            stroke="var(--color-malva)"
            strokeOpacity={0.32 - i * 0.035}
            strokeWidth={1}
            style={{ animationDelay: `${i * 0.12}s` }}
          />
        );
      })}
    </svg>
  );
}
