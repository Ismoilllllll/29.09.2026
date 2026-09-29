export default function Loading() {
  return (
    <div className="grid min-h-[60vh] place-items-center px-4">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-2 border-line border-t-gold" />
        <p className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-300">Sahifa yuklanmoqda...</p>
      </div>
    </div>
  );
}
