import { Link, useParams } from "react-router-dom";
import ImageRoulette from "../components/ImageRoulette";
import RentalCard from "../components/RentalCard";
import { rentals } from "../data/rentals";

export default function RentalDetail() {
  const { id } = useParams();
  const item = rentals.find((rental) => rental.id === id);
  const others = rentals.filter((rental) => rental.id !== id && rental.district === item?.district);
  const extra = others.length ? others : rentals.filter((rental) => rental.id !== id).slice(0, 3);

  if (!item) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="font-display text-4xl">E’lon topilmadi</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Bu uy ro‘yxatdan olib tashlangan yoki manzil noto‘g‘ri.</p>
        <Link to="/arenda" className="mt-4 inline-flex text-sm font-semibold text-gold-deep">Ro‘yxatga qaytish</Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <Link to="/arenda" className="text-sm font-semibold text-gold-deep dark:text-gold">← Ijara ro‘yxati</Link>
      <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <ImageRoulette images={item.images} alt={item.title} tall />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-gold-deep">{item.district}</p>
          <h1 className="mt-2 font-display text-4xl text-ink dark:text-white sm:text-5xl">{item.title}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{item.note}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Manzil", item.address],
              ["Metro", item.metro],
              ["Yaqin joylar", item.landmarks],
              ["Maydon", `${item.rooms} xona · ${item.area} · ${item.floor} qavat`],
            ].map(([label, value]) => (
              <article key={label} className="rounded-3xl border border-line bg-paper p-5 dark:border-white/10 dark:bg-ink-soft">
                <p className="text-xs uppercase tracking-wide text-gold-deep dark:text-gold">{label}</p>
                <p className="mt-2 text-sm leading-6">{value}</p>
              </article>
            ))}
          </div>
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">Uyda bor</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.amenities.map((amenity) => (
                <span key={amenity} className="rounded-full border border-line px-3 py-1 text-sm dark:border-white/15">
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        </div>
        <aside className="h-fit rounded-[28px] border border-line bg-paper p-6 dark:border-white/10 dark:bg-ink-soft lg:sticky lg:top-28">
          <p className="text-sm text-slate-500">Oylik ijara</p>
          <p className="mt-1 font-display text-4xl text-ink dark:text-gold">{item.price}</p>
          <div className="mt-6 border-t border-line pt-5 dark:border-white/10">
            <p className="text-xs uppercase tracking-wide text-slate-500">Ijara beruvchi</p>
            <p className="mt-2 text-xl font-semibold">{item.owner}</p>
            <a href={`tel:${item.phone.replace(/\s/g, "")}`} className="mt-1 block text-lg font-semibold text-gold-deep dark:text-gold">
              {item.phone}
            </a>
          </div>
          <a href={`tel:${item.phone.replace(/\s/g, "")}`} className="mt-6 inline-flex w-full justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white dark:bg-gold dark:text-ink">
            Qo‘ng‘iroq qilish
          </a>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            Ko‘rik vaqtini oldindan kelishing. Depozit va kommunal to‘lov egasi bilan alohida gaplashiladi.
          </p>
        </aside>
      </div>
      <section className="mt-16">
        <h2 className="font-display text-3xl">Boshqa uylar</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {extra.slice(0, 3).map((other) => (
            <RentalCard key={other.id} item={other} />
          ))}
        </div>
      </section>
    </main>
  );
}
