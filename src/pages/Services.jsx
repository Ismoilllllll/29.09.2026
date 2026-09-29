import { Link } from "react-router-dom";

const items = [
  ["Uy topish", "Tuman, xona soni, metro va narx bo‘yicha ochiq e’lonlar. Har uyda to‘rtta rasm."],
  ["E’lon joylash", "Ijara beruvchi ismi, telefoni va aniq manzil bilan e’lon chiqarish."],
  ["Ko‘rik", "Vaqtni oldindan kelishib, uyni joyida ko‘rish. Ofis yordam beradi."],
  ["Shartnoma", "Oylik to‘lov, depozit va muddatni tushuntirish. Hujjat namunasini ko‘rsatamiz."],
  ["Joylashuv tekshiruvi", "Metro, maktab, bozor va ofis masofasini e’lon ichida yozamiz."],
  ["Uzoq muddat", "Oilaviy kvartira va hovli uylar uchun olti oydan boshlab shart."],
  ["Narx bo‘yicha saralash", "Avval arzon yoki avval qimmat tartibida ro‘yxatni ko‘rish mumkin."],
  ["Telefon ochiq", "Vositachisiz qo‘ng‘iroq. Raqam kartada va uy sahifasida turadi."],
  ["Kun va tun rejimi", "Sahifa yorug‘ va qorong‘i rejimda o‘qiladi, tanlov saqlanadi."],
];

export default function Services() {
  return (
    <main>
      <section className="bg-ink px-4 py-20 text-white sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Xizmatlar</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl">Ijara bo‘yicha yordam</h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            E’lon topishdan ko‘rikkacha. Manzil va telefon ochiq, vositachisiz qo‘ng‘iroq qilasiz.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([title, text]) => (
            <article key={title} className="rounded-[28px] border border-line bg-paper p-6 dark:border-white/10 dark:bg-ink-soft">
              <h2 className="font-display text-3xl">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-[32px] bg-sand p-8 dark:bg-ink-soft sm:p-10">
          <h2 className="font-display text-4xl">E’lon berishni xohlaysizmi?</h2>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            Ism, telefon, tuman va qisqa tavsifni yozib qoldiring. Ofis ish vaqtida qo‘ng‘iroq qiladi.
          </p>
          <Link to="/aloqa" className="mt-6 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white dark:bg-gold dark:text-ink">
            Aloqa sahifasi
          </Link>
        </div>
      </section>
    </main>
  );
}
