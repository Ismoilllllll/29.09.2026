import { Link } from "react-router-dom";
import { districts, rentals } from "../data/rentals";

export default function Districts() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-deep">Tumanlar</p>
      <h1 className="mt-2 font-display text-5xl text-ink dark:text-white">Toshkent tumanlari</h1>
      <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
        Har tumanda metro, bozor va maktab atrofi yozilgan. Kartani ochsangiz, shu tumandagi e’lonlar chiqadi.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {districts.map((item) => {
          const count = rentals.filter((rental) => rental.district === item.name).length;
          return (
            <article key={item.name} className="rounded-[28px] border border-line bg-paper p-6 dark:border-white/10 dark:bg-ink-soft">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-display text-3xl">{item.name}</h2>
                <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold-deep dark:text-gold">{count} ta</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
              <Link to={`/arenda?tuman=${encodeURIComponent(item.name)}`} className="mt-5 inline-flex text-sm font-semibold text-gold-deep dark:text-gold">
                Shu tumandagi uylar
              </Link>
            </article>
          );
        })}
      </div>
    </main>
  );
}
