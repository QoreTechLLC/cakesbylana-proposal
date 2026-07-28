import { CakeIcon, SprigIcon, MacaronIcon } from "@/lib/icons";

const posts = [
  { Icon: CakeIcon, tag: "Behind the scenes", title: "How a wedding cake gets designed", excerpt: "A look at the sketch-to-cake process, from first sketch to final tasting.", meta: "June · 4 min read" },
  { Icon: SprigIcon, tag: "Seasonal", title: "Spring flavors we're loving", excerpt: "Fresh citrus, elderflower, and other flavors on the spring menu.", meta: "May · 3 min read" },
  { Icon: MacaronIcon, tag: "Client stories", title: "A fortieth birthday, reimagined", excerpt: "Designing a cake around a client's favorite childhood memory.", meta: "April · 2 min read" },
  { Icon: CakeIcon, tag: "Studio notes", title: "Why we bake in small batches", excerpt: "The case for slowing down, and what it means for quality.", meta: "March · 3 min read" },
];

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-5xl px-8 py-24">
      <div className="mb-16 text-center">
        <span className="mb-2 block text-[11px] uppercase tracking-widest2 text-gold">Notes</span>
        <h1 className="font-serif text-5xl text-plum">From the studio</h1>
      </div>
      <div className="grid gap-10 md:grid-cols-2">
        {posts.map((p) => (
          <div key={p.title}>
            <div className="relative mb-4 flex h-52 items-center justify-center border border-blush-deep bg-gradient-to-br from-blush to-ivory">
              <p.Icon className="w-2/5 max-w-[100px]" />
              <span className="absolute bottom-3 left-3 right-3 text-[10px] uppercase tracking-widest2 text-plum-soft/60">
                Photography placeholder
              </span>
            </div>
            <span className="mb-2 inline-block bg-blush px-3 py-1 text-[10px] uppercase tracking-widest2 text-rose">
              {p.tag}
            </span>
            <h3 className="mb-2 font-serif text-2xl text-plum">{p.title}</h3>
            <p className="mb-2 text-sm text-plum-soft">{p.excerpt}</p>
            <div className="text-[11px] uppercase tracking-widest2 text-gold">{p.meta}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
