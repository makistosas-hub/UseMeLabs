export default function DevBanner() {
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <div className="w-full bg-[#0f172a] text-xs sm:text-sm text-slate-200 px-4 py-2 text-center tracking-wide">
      LOCAL DEV MODE
    </div>
  );
}