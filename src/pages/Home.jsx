import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RentalCard from "../components/RentalCard";
import { districts, faqs, rentals } from "../data/rentals";

const steps = [
  ["01", "Tuman tanlang", "Yunusoboddan Bektemirgacha — metro, ko‘cha va mo‘ljal bo‘yicha qarang."],
  ["02", "Rasmlarni aylantiring", "Har uyda to‘rtta rasm o‘zi almashib turadi. Sichqoncha keltirsangiz to‘xtaydi."],
  ["03", "Egasi bilan gaplashing", "Ism va telefon har kartada ochiq. Vositachisiz qo‘ng‘iroq qiling."],
  ["04", "Ko‘rikka boring", "Vaqtni kelishib, uyni joyida ko‘rib chiqing va shartni gaplashing."],
];

const reasons = [
  ["Ochiq telefon", "Har e’londa ijara beruvchining ismi va raqami yozilgan. Oradagi odamsiz bog‘lanasiz."],
  ["Aniq joy", "Ko‘cha, uy raqami, metro va yaqin maktab, bozor yoki ofis alohida ko‘rsatiladi."],
  ["To‘rtta rasm", "Har uyda zal, oshxona va xonalar navbatma-navbat aylanadi."],
  ["Tuman bo‘yicha", "O‘n ikki tuman. Narx va xona soni bo‘yicha saralash mumkin."],
];

export default function Home() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [district, setDistrict] = useState("Hammasi");
  const names = ["Hammasi", ...new Set(rentals.map((item) => item.district))];

  function onSearch(event) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (district !== "Hammasi") params.set("tuman", district);
    navigate(`/arenda?${params.toString()}`);
  }

  return (
    <main>
      <section className="relative min-h-[92vh] overflow-hidden bg-ink text-white">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Zamonaviy uy"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">Toshkent · uy ijarasi</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] sm:text-7xl">
            Uy ijarasini egasining raqami bilan toping
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Har e’londa manzil, metro, yaqin joylar va to‘rtta aylanuvchi rasm bor. Yunusobod, Chilonzor, Sergeli, Yakkasaroy, Mirobod va yangi tumanlar.
          </p>
          <form onSubmit={onSearch} className="mt-8 grid gap-3 rounded-[28px] bg-white/10 p-3 backdrop-blur sm:grid-cols-[1fr_180px_auto]">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Tuman, metro yoki ko‘cha"
              className="rounded-2xl bg-white px-4 py-3 text-sm text-ink outline-none"
            />
            <select
              value={district}
              onChange={(event) => setDistrict(event.target.value)}
              className="rounded-2xl bg-white px-4 py-3 text-sm text-ink outline-none"
            >
              {names.map((name) => (
                <option key={name}>{name}</option>
              ))}
            </select>
            <button className="rounded-2xl bg-gold px-6 py-3 text-sm font-semibold text-ink">Qidirish</button>
          </form>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/arenda" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink">Ijara ro‘yxati</Link>
            <Link to="/aloqa" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold">E’lon berish</Link>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-4">
            {[
              [String(rentals.length), "Ochiq ijara"],
              [String(new Set(rentals.map((item) => item.district)).size), "Tuman"],
              ["4", "Rasm har uyda"],
              ["0", "Yashirin vositachi"],
            ].map(([n, label]) => (
              <div key={label} className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <p className="font-display text-4xl text-gold">{n}</p>
                <p className="mt-1 text-sm text-slate-200">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-deep">Tanlangan</p>
            <h2 className="mt-2 font-display text-4xl text-ink dark:text-white sm:text-5xl">Bugungi ijaralar</h2>
            <p className="mt-3 max-w-xl text-slate-600 dark:text-slate-300">
              Rasmlar o‘zi aylanadi. Sichqoncha olib kelsangiz to‘xtaydi, nuqta yoki strelka bilan tanlaysiz.
            </p>
          </div>
          <Link to="/arenda" className="text-sm font-semibold text-gold-deep dark:text-gold">Hammasini ko‘rish</Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {rentals.slice(0, 6).map((item) => <RentalCard key={item.id} item={item} />)}
        </div>
      </section>

      <section className="bg-sand py-20 dark:bg-ink-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-deep">Nega biz</p>
          <h2 className="mt-2 max-w-3xl font-display text-4xl text-ink dark:text-white sm:text-5xl">E’lon ochiq, raqam ochiq</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map(([title, text]) => (
              <article key={title} className="rounded-[28px] border border-line bg-paper p-6 dark:border-white/10 dark:bg-ink">
                <h3 className="font-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Joylashuv</p>
              <h2 className="mt-2 max-w-3xl font-display text-4xl sm:text-5xl">Tumanlar va yaqin mo‘ljallar</h2>
              <p className="mt-4 max-w-2xl text-slate-300">
                Har uyda aniq ko‘cha, metro masofasi va atrofdagi maktab, bozor yoki ofis yozilgan — shuning uchun tanlov tezroq.
              </p>
            </div>
            <Link to="/tumanlar" className="text-sm font-semibold text-gold">Barcha tumanlar</Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {districts.slice(0, 8).map((item) => (
              <article key={item.name} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-display text-2xl text-gold">{item.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
                <p className="mt-4 text-xs uppercase tracking-wide text-slate-400">
                  {rentals.filter((rental) => rental.district === item.name).length} ta e’lon
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-deep">Qanday ishlaydi</p>
        <h2 className="mt-2 font-display text-4xl text-ink dark:text-white sm:text-5xl">To‘rt qadam</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([n, title, text]) => (
            <article key={n} className="rounded-[28px] border border-line bg-paper p-6 dark:border-white/10 dark:bg-ink-soft">
              <p className="font-display text-3xl text-gold">{n}</p>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6">
        <div className="overflow-hidden rounded-[32px] bg-sand px-6 py-12 dark:bg-ink-soft sm:px-10">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-deep">Yana e’lonlar</p>
              <h2 className="mt-2 font-display text-4xl text-ink dark:text-white">Markaz va yangi tumanlar</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Yakkasaroy loftidan Uchtepa oilaviy kvartirasigacha. Yangihayot va Bektemirdagi yangi uylar ham ro‘yxatda.
              </p>
              <Link to="/arenda" className="mt-6 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white dark:bg-gold dark:text-ink">
                Ro‘yxatni ochish
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {rentals.slice(8, 14).map((item) => (
                <Link key={item.id} to={`/arenda/${item.id}`} className="rounded-2xl bg-white p-4 dark:bg-ink">
                  <p className="text-xs uppercase tracking-wide text-gold-deep dark:text-gold">{item.district}</p>
                  <p className="mt-1 font-semibold">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-500">{item.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-deep">Savol-javob</p>
            <h2 className="mt-2 font-display text-4xl text-ink dark:text-white">Ko‘p so‘raladigan savollar</h2>
          </div>
          <Link to="/savol-javob" className="text-sm font-semibold text-gold-deep dark:text-gold">Hammasini o‘qish</Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {faqs.slice(0, 3).map((item) => (
            <article key={item.q} className="rounded-[28px] border border-line p-6 dark:border-white/10">
              <h3 className="text-lg font-semibold">{item.q}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
