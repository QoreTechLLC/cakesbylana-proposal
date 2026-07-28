import { CakeIcon, SprigIcon, MacaronIcon } from "@/lib/icons";

const items = [
  { Icon: CakeIcon, cat: "Wedding" },
  { Icon: MacaronIcon, cat: "Birthday" },
  { Icon: SprigIcon, cat: "Custom" },
  { Icon: SprigIcon, cat: "Wedding" },
  { Icon: CakeIcon, cat: "Custom" },
  { Icon: MacaronIcon, cat: "Birthday" },
];

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-6xl px-8 py-24">
      <div className="mb-16 text-center">
        <span className="mb-2 block text-[11px] uppercase tracking-widest2 text-gold">Look book</span>
        <h1 className="font-serif text-5xl text-plum">The gallery</h1>
      </div>
      <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item, i) => (
          <figure key={i}>
            <div className="relative flex h-64 items-center justify-center border border-blush-deep bg-gradient-to-br from-blush to-ivory">
              <item.Icon className="w-2/5 max-w-[110px]" />
              <span className="absolute bottom-3 left-3 right-3 text-[10px] uppercase tracking-widest2 text-plum-soft/60">
                Photography placeholder
              </span>
            </div>
            <figcaption className="mt-2 text-[11px] uppercase tracking-widest2 text-rose">
              {item.cat}
            </figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
