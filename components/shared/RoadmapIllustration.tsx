import { cn } from "@/lib"

interface RoadmapIllustrationProps {
  className?: string
}

export const RoadmapIllustration = ({ className }: RoadmapIllustrationProps) => {
  return (
    <svg
      viewBox="0 0 520 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
    >
      <rect
        x="34"
        y="38"
        width="452"
        height="344"
        rx="26"
        className="fill-card stroke-border"
        strokeWidth="1.5"
      />

      <path
        d="M108 88 C180 88 162 156 230 156 C302 156 286 226 352 226 C414 226 408 302 452 302"
        className="stroke-primary/70"
        strokeWidth="8"
        strokeLinecap="round"
      />

      <g>
        <circle cx="108" cy="88" r="16" className="fill-primary" />
        <circle cx="230" cy="156" r="16" className="fill-secondary" />
        <circle cx="352" cy="226" r="16" className="fill-chart-2" />
        <circle cx="452" cy="302" r="16" className="fill-chart-4" />
      </g>

      <g>
        <rect x="72" y="118" width="92" height="52" rx="12" className="fill-accent" />
        <rect
          x="194"
          y="186"
          width="92"
          height="52"
          rx="12"
          className="fill-accent"
        />
        <rect
          x="316"
          y="256"
          width="92"
          height="52"
          rx="12"
          className="fill-accent"
        />
      </g>

      <g>
        <rect x="84" y="132" width="52" height="7" rx="3.5" className="fill-foreground/25" />
        <rect
          x="84"
          y="146"
          width="38"
          height="6"
          rx="3"
          className="fill-muted-foreground/25"
        />

        <rect
          x="206"
          y="200"
          width="52"
          height="7"
          rx="3.5"
          className="fill-foreground/25"
        />
        <rect
          x="206"
          y="214"
          width="38"
          height="6"
          rx="3"
          className="fill-muted-foreground/25"
        />

        <rect
          x="328"
          y="270"
          width="52"
          height="7"
          rx="3.5"
          className="fill-foreground/25"
        />
        <rect
          x="328"
          y="284"
          width="38"
          height="6"
          rx="3"
          className="fill-muted-foreground/25"
        />
      </g>

      {[
        [78, 82],
        [92, 82],
        [106, 82],
        [120, 82],
        [334, 82],
        [348, 82],
        [362, 82],
        [376, 82],
      ].map(([cx, cy], index) => (
        <circle key={`roadmap-dot-${index}`} cx={cx} cy={cy} r="2.5" className="fill-primary/25" />
      ))}
    </svg>
  )
}
