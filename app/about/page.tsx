import { SprigIcon, CakeIcon, MacaronIcon } from "@/lib/icons";

const timeline = [
  {
    year: "2016",
    title: "First cake, first client",
    text: "A friend's wedding cake, made in a home kitchen.",
  },
  {
    year: "2019",
    title: "Studio opens",
    text: "Moved into a dedicated baking studio in New York.",
  },
  {
    year: "2022",
    title: "Word of mouth grows",
    text: "Fully booked through referrals alone.",
  },
  {
    year: "2026",
    title: "A new chapter",
    text: "A new home online, built to match the craft.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-8 py-24">
      <div className="mb-16 text-center">
        <span className="mb-2 block text-[11px] uppercase tracking-widest2 text-gold">
          Our story
        </span>
        <h1 className="font-serif text-5xl text-plum">About Lana</h1>
      </div>

      <div className="mb-24 grid items-center gap-14 md:grid-cols-2">
        <div className="relative flex h-96 items-center justify-center border border-blush-deep bg-gradient-to-br from-blush to-ivory">
          <SprigIcon className="w-2/5 max-w-[130px]" />
          <span className="absolute bottom-4 left-4 right-4 text-[10px] uppercase tracking-widest2 text-plum-soft/60">
            Portrait placeholder
          </span>
        </div>
        <div>
          <p className="mb-5 text-plum-soft">
            Lana started baking out of a home kitchen in Queens, making cakes
            for neighbors and friends. What began as a favor for a friend&apos;s
            wedding became a full studio practice, built one referral at a time.
          </p>
          <p className="text-plum-soft">
            Today, every order still gets the same attention: a real
            conversation, a hand-sketched design, and a cake made from scratch —
            never from a catalog.
          </p>
        </div>
      </div>

      <div className="mx-auto mb-20 max-w-xl">
        {timeline.map((t) => (
          <div
            key={t.year}
            className="grid grid-cols-[80px_1fr] gap-5 border-b border-blush py-6 last:border-none"
          >
            <div className="font-serif text-2xl text-gold">{t.year}</div>
            <div>
              <h3 className="mb-1 text-lg text-plum">{t.title}</h3>
              <p className="text-sm text-plum-soft">{t.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-9 text-center md:grid-cols-3">
        <div>
          <MacaronIcon className="mx-auto mb-3 h-9 w-9" />
          <h3 className="mb-1 text-lg text-plum">Quality first</h3>
          <p className="text-sm text-plum-soft">
            Only real ingredients, nothing shortcut.
          </p>
        </div>
        <div>
          <CakeIcon className="mx-auto mb-3 h-9 w-9" />
          <h3 className="mb-1 text-lg text-plum">Made by hand</h3>
          <p className="text-sm text-plum-soft">
            No two cakes are ever exactly alike.
          </p>
        </div>
        <div>
          <SprigIcon className="mx-auto mb-3 h-9 w-9" />
          <h3 className="mb-1 text-lg text-plum">Personal, always</h3>
          <p className="text-sm text-plum-soft">
            Every order starts with a real conversation.
          </p>
        </div>
      </div>
    </main>
  );
}
