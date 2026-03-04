interface LogoProps {
  className?: string
}

const DEEP_VIOLET = "#4C1D95"
const GOLD = "#D97706"

export const Logo = ({ className }: LogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 86 58"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <defs>
      {/* Premium gradient for main letters */}
      <linearGradient id="logo-violet" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#7C3AED" />
        <stop offset="100%" stopColor={DEEP_VIOLET} />
      </linearGradient>

      {/* Premium gradient for accent */}
      <linearGradient id="logo-gold" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor={GOLD} />
      </linearGradient>

      {/* Fade mask for mirror reflection */}
      <linearGradient id="mirror-fade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="white" stopOpacity="0.25" />
        <stop offset="80%" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <mask id="mirror-mask">
        <rect x="0" y="38" width="86" height="20" fill="url(#mirror-fade)" />
      </mask>
    </defs>

    {/* ── Main logo ── */}
    <g>
      {/* Letter A */}
      <text
        x="0"
        y="36"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="35"
        fill="url(#logo-violet)"
      >
        A
      </text>

      {/* Number 2 */}
      <text
        x="25"
        y="36"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="35"
        fill="url(#logo-gold)"
      >
        2
      </text>

      {/* Letter B */}
      <text
        x="44"
        y="36"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="35"
        fill="url(#logo-violet)"
      >
        B
      </text>

      {/* HR badge */}
      <circle cx="67" cy="9" r="9.5" fill="url(#logo-gold)" />
      <text
        x="67"
        y="12.5"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="9"
        fill="white"
        textAnchor="middle"
      >
        HR
      </text>
    </g>

    {/* ── Mirror reflection ── */}
    <g mask="url(#mirror-mask)" transform="translate(0, 74) scale(1, -1)">
      <text
        x="0"
        y="36"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="35"
        fill="url(#logo-violet)"
      >
        A
      </text>
      <text
        x="25"
        y="36"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="35"
        fill="url(#logo-gold)"
      >
        2
      </text>
      <text
        x="44"
        y="36"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="35"
        fill="url(#logo-violet)"
      >
        B
      </text>
    </g>
  </svg>
)
