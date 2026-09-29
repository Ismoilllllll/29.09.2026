import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center px-4 text-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-deep">Xato 404</p>
        <h1 className="mt-3 font-display text-5xl text-ink dark:text-white">Sahifa topilmadi</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Bu manzil yo‘q. Bosh sahifaga yoki ijara ro‘yxatiga qayting.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/" className="inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white dark:bg-gold dark:text-ink">Bosh sahifa</Link>
          <Link to="/arenda" className="inline-flex rounded-full border border-line px-5 py-2.5 text-sm font-semibold dark:border-white/15">Ijara</Link>
        </div>
      </div>
    </main>
  );
}
