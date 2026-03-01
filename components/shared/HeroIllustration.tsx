import { cn } from "@/lib"

interface HeroIllustrationProps {
  className?: string
}

export const HeroIllustration = ({ className }: HeroIllustrationProps) => {
  return (
    <svg
      viewBox="0 0 600 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
    >
      <rect
        x="80"
        y="60"
        width="440"
        height="340"
        rx="24"
        className="fill-muted/60 stroke-border"
        strokeWidth="2"
      />

      <rect
        x="80"
        y="60"
        width="440"
        height="56"
        rx="24"
        className="fill-primary/10"
      />
      <rect x="80" y="92" width="440" height="24" className="fill-primary/10" />

      <circle cx="112" cy="88" r="8" className="fill-destructive/60" />
      <circle cx="136" cy="88" r="8" className="fill-chart-4/60" />
      <circle cx="160" cy="88" r="8" className="fill-chart-2/60" />

      <rect
        x="80"
        y="116"
        width="120"
        height="284"
        className="fill-primary/5"
      />
      <rect x="100" y="140" width="80" height="10" rx="5" className="fill-primary/20" />
      <rect x="100" y="164" width="60" height="10" rx="5" className="fill-muted-foreground/20" />
      <rect x="100" y="188" width="70" height="10" rx="5" className="fill-muted-foreground/20" />
      <rect x="100" y="212" width="50" height="10" rx="5" className="fill-muted-foreground/20" />
      <rect x="100" y="236" width="65" height="10" rx="5" className="fill-muted-foreground/20" />

      <rect
        x="220"
        y="132"
        width="130"
        height="100"
        rx="12"
        className="fill-card stroke-border"
        strokeWidth="1.5"
      />
      <circle cx="285" cy="162" r="18" className="fill-primary/20" />
      <circle cx="285" cy="156" r="7" className="fill-primary/40" />
      <ellipse cx="285" cy="174" rx="12" ry="6" className="fill-primary/30" />
      <rect x="255" y="192" width="60" height="8" rx="4" className="fill-foreground/15" />
      <rect x="262" y="206" width="46" height="6" rx="3" className="fill-muted-foreground/20" />

      <rect
        x="370"
        y="132"
        width="130"
        height="100"
        rx="12"
        className="fill-card stroke-border"
        strokeWidth="1.5"
      />
      <circle cx="435" cy="162" r="18" className="fill-chart-2/20" />
      <circle cx="435" cy="156" r="7" className="fill-chart-2/40" />
      <ellipse cx="435" cy="174" rx="12" ry="6" className="fill-chart-2/30" />
      <rect x="405" y="192" width="60" height="8" rx="4" className="fill-foreground/15" />
      <rect x="412" y="206" width="46" height="6" rx="3" className="fill-muted-foreground/20" />

      <rect
        x="220"
        y="252"
        width="280"
        height="130"
        rx="12"
        className="fill-card stroke-border"
        strokeWidth="1.5"
      />
      <text
        x="240"
        y="276"
        className="fill-foreground/60"
        fontSize="11"
        fontWeight="600"
        fontFamily="var(--font-geist-sans)"
      >
        Team Performance
      </text>

      <rect x="246" y="340" width="24" height="24" rx="4" className="fill-primary/70" />
      <rect x="280" y="320" width="24" height="44" rx="4" className="fill-primary/50" />
      <rect x="314" y="300" width="24" height="64" rx="4" className="fill-primary/70" />
      <rect x="348" y="310" width="24" height="54" rx="4" className="fill-chart-2/60" />
      <rect x="382" y="290" width="24" height="74" rx="4" className="fill-primary/60" />
      <rect x="416" y="305" width="24" height="59" rx="4" className="fill-chart-2/50" />
      <rect x="450" y="285" width="24" height="79" rx="4" className="fill-primary/80" />

      <g>
        <rect
          x="440"
          y="30"
          width="120"
          height="44"
          rx="22"
          className="fill-card stroke-border"
          strokeWidth="1.5"
        />
        <circle cx="464" cy="52" r="12" className="fill-chart-2/30" />
        <path
          d="M460 52 L463 55 L469 49"
          className="stroke-chart-2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <rect x="484" y="46" width="56" height="6" rx="3" className="fill-foreground/20" />
        <rect x="484" y="56" width="40" height="5" rx="2.5" className="fill-muted-foreground/20" />
      </g>

      <g>
        <rect
          x="40"
          y="340"
          width="130"
          height="54"
          rx="16"
          className="fill-card stroke-border"
          strokeWidth="1.5"
        />
        <circle cx="70" cy="367" r="16" className="fill-primary/20" />
        <text
          x="66"
          y="372"
          className="fill-primary"
          fontSize="14"
          fontWeight="700"
          textAnchor="middle"
          fontFamily="var(--font-geist-sans)"
        >
          12
        </text>
        <rect x="96" y="358" width="58" height="6" rx="3" className="fill-foreground/20" />
        <rect x="96" y="370" width="42" height="5" rx="2.5" className="fill-muted-foreground/20" />
      </g>

      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <circle
            key={`dot-${row}-${col}`}
            cx={46 + col * 14}
            cy={80 + row * 14}
            r="2"
            className="fill-primary/15"
          />
        ))
      )}

      <path
        d="M60 440 Q200 410 340 440 Q480 470 560 430"
        className="stroke-primary/15"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}
