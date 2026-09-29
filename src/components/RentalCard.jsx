import { Link } from "react-router-dom";
import ImageRoulette from "./ImageRoulette";

export default function RentalCard({ item }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-line bg-paper shadow-[0_18px_50px_-28px_rgba(12,18,32,0.55)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(12,18,32,0.6)] dark:border-white/10 dark:bg-ink-soft">
      <ImageRoulette images={item.images} alt={item.title} />
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-deep dark:text-gold">
            {item.district}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">{item.floor} qavat</span>
        </div>
        <h3 className="mt-3 font-display text-2xl leading-tight text-ink dark:text-white">{item.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.address}</p>
        <p className="mt-3 font-display text-2xl text-ink dark:text-gold">{item.price}</p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {item.rooms} xona · {item.area} · {item.metro}
        </p>
        <div className="mt-4 flex items-end justify-between gap-3 border-t border-line pt-4 dark:border-white/10">
          <div>
            <p className="text-sm font-semibold text-ink dark:text-white">{item.owner}</p>
            <a href={`tel:${item.phone.replace(/\s/g, "")}`} className="text-sm font-semibold text-gold-deep dark:text-gold">
              {item.phone}
            </a>
          </div>
          <Link
            to={`/arenda/${item.id}`}
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white dark:bg-gold dark:text-ink"
          >
            Batafsil
          </Link>
        </div>
      </div>
    </article>
  );
}
