export function CakeIcon({ className = "", stroke = "#B99B5E" }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 100 90" className={className} fill="none">
      <path d="M20 55 L80 55 L76 30 L24 30 Z" stroke={stroke} strokeWidth="1.4" />
      <path d="M20 55 L80 55 L78 42 L22 42 Z" stroke={stroke} strokeWidth="1.4" />
      <line x1="24" y1="30" x2="24" y2="20" stroke={stroke} strokeWidth="1.4" />
      <path d="M22 20 Q24 12 26 20" stroke="#C48A82" strokeWidth="1.4" />
      <path d="M30 42 Q34 36 38 42" stroke={stroke} strokeWidth="1.2" />
      <path d="M44 42 Q48 36 52 42" stroke={stroke} strokeWidth="1.2" />
      <path d="M58 42 Q62 36 66 42" stroke={stroke} strokeWidth="1.2" />
    </svg>
  );
}

export function SprigIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 90" className={className} fill="none">
      <path d="M50 70 C50 50 40 40 30 30" stroke="#A9B79E" strokeWidth="1.4" />
      <ellipse cx="33" cy="32" rx="6" ry="3" stroke="#A9B79E" strokeWidth="1.2" transform="rotate(-30 33 32)" />
      <ellipse cx="41" cy="45" rx="6" ry="3" stroke="#A9B79E" strokeWidth="1.2" transform="rotate(-30 41 45)" />
      <ellipse cx="48" cy="58" rx="6" ry="3" stroke="#A9B79E" strokeWidth="1.2" transform="rotate(-30 48 58)" />
      <circle cx="50" cy="25" r="4" stroke="#C48A82" strokeWidth="1.3" />
    </svg>
  );
}

export function MacaronIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 90" className={className} fill="none">
      <ellipse cx="50" cy="38" rx="26" ry="10" stroke="#C48A82" strokeWidth="1.4" />
      <ellipse cx="50" cy="60" rx="26" ry="10" stroke="#C48A82" strokeWidth="1.4" />
      <path d="M24 45 Q50 55 76 45" stroke="#B99B5E" strokeWidth="1.2" />
    </svg>
  );
}

/** Large, detailed hero cake illustration — tiered cake with piping, candles, and a glow-friendly silhouette. */
export function HeroCakeIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 300" className={className} fill="none">
      <ellipse cx="160" cy="264" rx="86" ry="10" fill="url(#heroShadow)" />
      <path d="M78 230 L242 230 L232 178 L88 178 Z" stroke="#D9C08C" strokeWidth="1.3" />
      <path d="M88 178 L232 178 L224 132 L96 132 Z" stroke="#D9C08C" strokeWidth="1.3" />
      <path d="M96 132 L224 132 L217 92 L103 92 Z" stroke="#D9C08C" strokeWidth="1.3" />
      <path d="M96 132 Q112 122 128 132 T160 132 T192 132 T224 132" stroke="#D9C08C" strokeWidth="1" />
      <path d="M88 178 Q106 166 124 178 T160 178 T196 178 T232 178" stroke="#D9C08C" strokeWidth="1" />
      <path d="M78 230 Q98 216 118 230 T158 230 T198 230 T238 230" stroke="#D9C08C" strokeWidth="1" />
      <line x1="115" y1="92" x2="115" y2="70" stroke="#D9C08C" strokeWidth="1.3" />
      <path d="M112 70 Q115 58 118 70" stroke="#E7C4BD" strokeWidth="1.3" />
      <line x1="160" y1="92" x2="160" y2="62" stroke="#D9C08C" strokeWidth="1.3" />
      <path d="M157 62 Q160 48 163 62" stroke="#E7C4BD" strokeWidth="1.3" />
      <line x1="205" y1="92" x2="205" y2="70" stroke="#D9C08C" strokeWidth="1.3" />
      <path d="M202 70 Q205 58 208 70" stroke="#E7C4BD" strokeWidth="1.3" />
      <circle cx="120" cy="150" r="3" stroke="#E7C4BD" strokeWidth="1" />
      <circle cx="160" cy="150" r="3" stroke="#E7C4BD" strokeWidth="1" />
      <circle cx="200" cy="150" r="3" stroke="#E7C4BD" strokeWidth="1" />
      <defs>
        <radialGradient id="heroShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
