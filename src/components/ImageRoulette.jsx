import { useEffect, useState } from "react";

export default function ImageRoulette({ images = [], alt = "Uy rasmi", tall = false }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = images.length || 1;

  useEffect(() => {
    if (paused || images.length < 2) return undefined;
    const timer = setInterval(() => {
      setIndex((value) => (value + 1) % images.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [paused, images.length]);

  if (!images.length) return null;

  return (
    <div
      className={`roulette group relative overflow-hidden bg-ink ${tall ? "h-[420px] sm:h-[520px]" : "h-64 sm:h-72"}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${alt} — ${i + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-[900ms] ease-out ${
            i === index ? "z-10 scale-100 opacity-100" : "z-0 scale-110 opacity-0"
          }`}
        />
      ))}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/10" />
      <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full bg-ink/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold backdrop-blur">
        <span className="roulette-dot" />
        Aylanmoqda · {index + 1}/{count}
      </div>
      <div className="absolute bottom-4 left-0 right-0 z-20 flex items-center justify-center gap-2">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`${i + 1}-rasm`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-gold" : "w-2.5 bg-white/70"}`}
          />
        ))}
      </div>
      <button
        type="button"
        aria-label="Oldingi rasm"
        onClick={() => setIndex((value) => (value - 1 + count) % count)}
        className="absolute left-3 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-ink opacity-0 transition group-hover:opacity-100"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Keyingi rasm"
        onClick={() => setIndex((value) => (value + 1) % count)}
        className="absolute right-3 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-ink opacity-0 transition group-hover:opacity-100"
      >
        ›
      </button>
    </div>
  );
}
