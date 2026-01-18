export function Footer() {
  return (
    <footer className="container-inline my-10 pt-8 border-t border-zinc-200">
      <div className="flex justify-center">
        <p className="font-helvetica text-xs tracking-tight text-zinc-600 text-center">
          © {new Date().getFullYear()} <span className="text-[#003262] font-medium">SPC</span> — Software Product @ Cal
        </p>
      </div>
    </footer>
  );
}