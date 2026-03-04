import { cn } from "@/lib"

interface ErrorIllustrationProps {
  className?: string
  code: "404" | "505"
}

export const ErrorIllustration = ({ className, code }: ErrorIllustrationProps) => {
  const accentClass = code === "404" ? "fill-primary/70" : "fill-destructive/70"

  return (
    <svg
      viewBox="0 0 520 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
    >
      <rect
        x="36"
        y="30"
        width="448"
        height="280"
        rx="24"
        className="fill-card stroke-border"
        strokeWidth="1.5"
      />

      <rect x="36" y="30" width="448" height="58" rx="24" className="fill-muted/60" />
      <rect x="36" y="62" width="448" height="26" className="fill-muted/60" />
      <circle cx="68" cy="58" r="7" className="fill-destructive/60" />
      <circle cx="90" cy="58" r="7" className="fill-chart-4/60" />
      <circle cx="112" cy="58" r="7" className="fill-chart-2/60" />

      <rect
        x="74"
        y="112"
        width="372"
        height="164"
        rx="18"
        className="fill-background stroke-border"
        strokeWidth="1.5"
      />

      <text
        x="260"
        y="190"
        textAnchor="middle"
        className="fill-foreground"
        fontSize="72"
        fontWeight="800"
        fontFamily="var(--font-geist-sans)"
      >
        {code}
      </text>

      <rect x="138" y="214" width="244" height="10" rx="5" className="fill-muted-foreground/25" />
      <rect x="178" y="234" width="164" height="8" rx="4" className="fill-muted-foreground/20" />

      <circle cx="54" cy="278" r="12" className={accentClass} />
      <circle cx="466" cy="98" r="10" className="fill-chart-2/50" />
      <circle cx="446" cy="296" r="8" className="fill-primary/35" />
      <circle cx="86" cy="96" r="6" className="fill-primary/25" />
    </svg>
  )
}
