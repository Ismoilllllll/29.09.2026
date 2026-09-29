import { faqs } from "../data/rentals";
import { Link } from "react-router-dom";

export default function Faq() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-deep">Savol-javob</p>
      <h1 className="mt-2 font-display text-5xl text-ink dark:text-white">Ko‘p so‘raladigan savollar</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">
        Ijara, depozit va e’lon joylash haqida qisqa javoblar. Yana savol bo‘lsa, aloqa sahifasidan yozing.
      </p>
      <div className="mt-10 space-y-4">
        {faqs.map((item) => (
          <article key={item.q} className="rounded-[28px] border border-line bg-paper p-6 dark:border-white/10 dark:bg-ink-soft">
            <h2 className="text-xl font-semibold">{item.q}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.a}</p>
          </article>
        ))}
      </div>
      <Link to="/aloqa" className="mt-8 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white dark:bg-gold dark:text-ink">
        Savol qoldirish
      </Link>
    </main>
  );
}
