// A small hand-drawn-style SVG scene (steaming bowl + recipe card)
// used on the homepage hero. Kept as inline SVG so it carries the
// palette's colors without shipping an image file.
export default function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="none" />

      <path
        className="animate-steam"
        d="M170 70 Q160 50 175 35 Q188 22 178 5"
        fill="none"
        stroke="#CC5B33"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        className="animate-steam animate-steam-delay"
        d="M210 70 Q200 48 215 32 Q228 18 218 2"
        fill="none"
        stroke="#CC5B33"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <ellipse cx="200" cy="150" rx="105" ry="26" fill="#CC5B33" opacity="0.12" />
      <path
        d="M95 150 Q95 210 200 210 Q305 210 305 150 Z"
        fill="#FBEDE4"
        stroke="#CC5B33"
        strokeWidth="4"
      />
      <ellipse cx="200" cy="150" rx="105" ry="26" fill="#F5D3BC" stroke="#CC5B33" strokeWidth="4" />

      <circle className="animate-pulse-soft" cx="165" cy="146" r="12" fill="#D9A441" />
      <circle className="animate-pulse-soft" cx="205" cy="140" r="15" fill="#B34A3C" style={{ animationDelay: "0.4s" }} />
      <circle className="animate-pulse-soft" cx="240" cy="150" r="10" fill="#5C7A45" style={{ animationDelay: "0.8s" }} />
      <circle className="animate-pulse-soft" cx="185" cy="158" r="9" fill="#E3B25C" style={{ animationDelay: "1.2s" }} />

      <g transform="translate(255 195)">
        <g className="animate-float">
          <g transform="rotate(8)">
            <rect width="90" height="64" rx="4" fill="#F7F8F3" stroke="#24261F" strokeOpacity="0.25" strokeWidth="2" />
            <line x1="12" y1="16" x2="78" y2="16" stroke="#24261F" strokeOpacity="0.35" strokeWidth="2" />
            <line x1="12" y1="30" x2="78" y2="30" stroke="#24261F" strokeOpacity="0.2" strokeWidth="2" />
            <line x1="12" y1="42" x2="60" y2="42" stroke="#24261F" strokeOpacity="0.2" strokeWidth="2" />
          </g>
        </g>
      </g>
    </svg>
  );
}