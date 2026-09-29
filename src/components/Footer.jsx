import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-white/10 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="" className="h-12 w-12 rounded-2xl object-cover" />
            <p className="font-display text-3xl">UyArenda</p>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
            Toshkent bo‘yicha uy ijarasi. Har bir e’londa manzil, metro, yaqin joylar va egasining telefoni ochiq yozilgan. Vositachisiz qo‘ng‘iroq qilasiz.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-slate-300">
          <p className="font-semibold text-gold">Sahifalar</p>
          <Link to="/">Bosh sahifa</Link>
          <Link to="/arenda">Ijara ro‘yxati</Link>
          <Link to="/tumanlar">Tumanlar</Link>
          <Link to="/xizmatlar">Xizmatlar</Link>
          <Link to="/biz-haqimizda">Biz haqimizda</Link>
          <Link to="/savol-javob">Savol-javob</Link>
          <Link to="/aloqa">Aloqa</Link>
        </div>
        <p className="text-sm leading-7 text-slate-300">
          Ofis: Yunusobod 4-mavze, Amir Temur, 18
          <br />
          Qo‘llab-quvvatlash: +998 71 200 45 67
          <br />
          info@uyarenda.uz
          <br />
          Dushanba–shanba, 09:00–19:00
        </p>
      </div>
      <p className="border-t border-white/10 px-4 py-5 text-center text-xs tracking-wide text-slate-400">
        © 2026 UyArenda · Toshkent
      </p>
    </footer>
  );
}
