import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import RentalCard from "../components/RentalCard";
import { rentals } from "../data/rentals";

export default function Rentals() {
  const [params] = useSearchParams();
  const districts = ["Hammasi", ...new Set(rentals.map((item) => item.district))];
  const [district, setDistrict] = useState(params.get("tuman") || "Hammasi");
  const [rooms, setRooms] = useState("Hammasi");
  const [sort, setSort] = useState("yangi");
  const [query, setQuery] = useState(params.get("q") || "");

  useEffect(() => {
    setDistrict(params.get("tuman") || "Hammasi");
    setQuery(params.get("q") || "");
  }, [params]);

  const list = useMemo(() => {
    const filtered = rentals.filter((item) => {
      const byDistrict = district === "Hammasi" || item.district === district;
      const byRooms = rooms === "Hammasi" || String(item.rooms) === rooms || (rooms === "5" && item.rooms >= 5);
      const blob = `${item.title} ${item.address} ${item.metro} ${item.landmarks} ${item.owner}`.toLowerCase();
      return byDistrict && byRooms && blob.includes(query.toLowerCase());
    });
    if (sort === "arzon") return [...filtered].sort((a, b) => a.priceValue - b.priceValue);
    if (sort === "qimmat") return [...filtered].sort((a, b) => b.priceValue - a.priceValue);
    if (sort === "katta") return [...filtered].sort((a, b) => b.rooms - a.rooms);
    return filtered;
  }, [district, query, rooms, sort]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-deep">Ijara</p>
      <h1 className="mt-2 font-display text-5xl text-ink dark:text-white">Ijaradagi uylar</h1>
      <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
        {rentals.length} ta e’lon. Har birida to‘rtta rasm o‘zi aylanadi, manzil va egasining telefoni ochiq.
      </p>
      <div className="mt-8 grid gap-3 rounded-[28px] border border-line bg-paper p-4 dark:border-white/10 dark:bg-ink-soft md:grid-cols-4">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Tuman, metro yoki ko‘cha"
          className="w-full rounded-2xl border border-line bg-transparent px-4 py-3 text-sm dark:border-white/10"
        />
        <select value={district} onChange={(event) => setDistrict(event.target.value)} className="rounded-2xl border border-line bg-transparent px-4 py-3 text-sm dark:border-white/10">
          {districts.map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
        <select value={rooms} onChange={(event) => setRooms(event.target.value)} className="rounded-2xl border border-line bg-transparent px-4 py-3 text-sm dark:border-white/10">
          <option value="Hammasi">Xona: hammasi</option>
          <option value="1">1 xona</option>
          <option value="2">2 xona</option>
          <option value="3">3 xona</option>
          <option value="4">4 xona</option>
          <option value="5">5 va undan ko‘p</option>
        </select>
        <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-2xl border border-line bg-transparent px-4 py-3 text-sm dark:border-white/10">
          <option value="yangi">Ro‘yxat tartibi</option>
          <option value="arzon">Avval arzon</option>
          <option value="qimmat">Avval qimmat</option>
          <option value="katta">Avval katta</option>
        </select>
      </div>
      <p className="mt-6 text-sm text-slate-500">{list.length} ta uy topildi</p>
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {list.map((item) => <RentalCard key={item.id} item={item} />)}
      </div>
      {!list.length && <p className="mt-10 text-sm text-slate-500">Bu so‘rov bo‘yicha uy topilmadi. Boshqa tuman yoki xona sonini tanlang.</p>}
    </main>
  );
}
