import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-blush-deep bg-ivory/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-4">
        <Link href="/" className="font-serif text-2xl italic text-plum">
          Cakes by Lana
        </Link>
        <div className="flex gap-9">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[11px] uppercase tracking-widest2 text-plum-soft transition hover:text-plum"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
