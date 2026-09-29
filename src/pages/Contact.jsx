import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <main className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-deep">Aloqa</p>
        <h1 className="mt-2 font-display text-5xl text-ink dark:text-white">Ijara e’loni qoldiring</h1>
        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
          Ofis: Yunusobod 4-mavze, Amir Temur ko‘chasi, 18-uy. Dushanba–shanba, 09:00–19:00. Yakshanba dam olish kuni.
        </p>
        <div className="mt-8 space-y-3 text-sm leading-7">
          <p>Telefon: +998 71 200 45 67</p>
          <p>Pochta: info@uyarenda.uz</p>
          <p>Metro: Shahriston — 8 daqiqa piyoda</p>
          <p>Ijara qidirsangiz, ro‘yxatdagi egaga to‘g‘ridan-to‘g‘ri qo‘ng‘iroq qiling.</p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            ["Ish vaqti", "09:00–19:00"],
            ["Kunlar", "Dushanba–shanba"],
            ["Til", "O‘zbek tili"],
            ["Manzil", "Yunusobod 4"],
          ].map(([label, value]) => (
            <article key={label} className="rounded-2xl border border-line p-4 dark:border-white/10">
              <p className="text-xs uppercase tracking-wide text-gold-deep">{label}</p>
              <p className="mt-1 font-semibold">{value}</p>
            </article>
          ))}
        </div>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSent(true);
        }}
        className="space-y-4 rounded-[28px] border border-line bg-paper p-6 dark:border-white/10 dark:bg-ink-soft"
      >
        <label className="block text-sm font-medium">Ism
          <input required placeholder="Ismingiz" className="mt-1 w-full rounded-2xl border border-line bg-transparent px-3 py-3 dark:border-white/10" />
        </label>
        <label className="block text-sm font-medium">Telefon
          <input required placeholder="+998" className="mt-1 w-full rounded-2xl border border-line bg-transparent px-3 py-3 dark:border-white/10" />
        </label>
        <label className="block text-sm font-medium">Tuman
          <input placeholder="Masalan, Yunusobod" className="mt-1 w-full rounded-2xl border border-line bg-transparent px-3 py-3 dark:border-white/10" />
        </label>
        <label className="block text-sm font-medium">Xona soni va narx
          <input placeholder="3 xona, 6 mln so‘m" className="mt-1 w-full rounded-2xl border border-line bg-transparent px-3 py-3 dark:border-white/10" />
        </label>
        <label className="block text-sm font-medium">Xabar
          <textarea required rows={5} placeholder="Uy haqida qisqacha yozing" className="mt-1 w-full rounded-2xl border border-line bg-transparent px-3 py-3 dark:border-white/10" />
        </label>
        <button className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white dark:bg-gold dark:text-ink">Yuborish</button>
        {sent && <p className="text-sm font-medium text-gold-deep">So‘rov qabul qilindi. Ofis tez orada qo‘ng‘iroq qiladi.</p>}
      </form>
    </main>
  );
}
