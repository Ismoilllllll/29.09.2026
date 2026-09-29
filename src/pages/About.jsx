import { Link } from "react-router-dom";
import { rentals } from "../data/rentals";

export default function About() {
  return (
    <main>
      <section className="bg-ink px-4 py-20 text-white sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Biz haqimizda</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl">Toshkent ijarasi, ochiq raqam bilan</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            UyArenda — Toshkentdagi kvartira va hovli uylarni ijara beruvchining telefoni bilan ko‘rsatadigan sayt. Maqsad oddiy: odam uyni ko‘rib, egasiga o‘zi qo‘ng‘iroq qilsin.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-3">
        {[
          ["Nima qilamiz", "E’lonni tuman, metro va narx bilan joylaymiz. Har uyda to‘rtta rasm, manzil va yaqin joylar bor."],
          ["Nima qilmaymiz", "Raqamni yashirmaymiz va qo‘ng‘iroqni o‘zimizga burmaymiz. Ko‘rik va shart egasi bilan."],
          ["Kimlar uchun", "Yosh oila, talaba, ish joyiga yaqin uy qidirayotganlar va uyni ijaraga bermoqchi bo‘lganlar."],
        ].map(([title, text]) => (
          <article key={title} className="rounded-[28px] border border-line bg-paper p-6 dark:border-white/10 dark:bg-ink-soft">
            <h2 className="font-display text-3xl">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{text}</p>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="rounded-[32px] bg-sand p-8 dark:bg-ink-soft sm:p-10">
          <p className="font-display text-4xl text-ink dark:text-white">Hozir ro‘yxatda {rentals.length} ta ochiq uy</p>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            Ofis Yunusobod 4-mavzeda. Dushanbadan shanbagacha, soat to‘qqizdan yetigacha.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/arenda" className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white dark:bg-gold dark:text-ink">Uylarni ko‘rish</Link>
            <Link to="/aloqa" className="rounded-full border border-ink/20 px-5 py-2.5 text-sm font-semibold dark:border-white/20">Aloqa</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
