export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      {/* Keyframe styles */}
      <style>{`
        @keyframes fill-up {
          0%   { clip-path: inset(100% 0 0 0); opacity: 0.4; }
          20%  { opacity: 1; }
          100% { clip-path: inset(0% 0 0 0); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 0 0 hsl(var(--primary) / 0.4); }
          50%       { box-shadow: 0 0 0 16px hsl(var(--primary) / 0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .logo-fill {
          animation: fill-up 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
        }
        .logo-box {
          animation: glow-pulse 2s ease-in-out infinite;
        }
        .ring-spin {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>

      <div className="relative flex items-center justify-center">
        {/* Spinning dashed ring */}
        <svg
          className="ring-spin absolute"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
        >
          <rect
            x="4"
            y="4"
            width="72"
            height="72"
            rx="20"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeDasharray="8 6"
            strokeOpacity="0.5"
          />
        </svg>

        {/* Logo box */}
        <div className="logo-box relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg">
          {/* Dim base icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute text-primary-foreground opacity-15"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>

          {/* Filled icon revealed bottom-to-top */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="logo-fill relative text-primary-foreground"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        </div>
      </div>
    </div>
  )
}
