/**
 * Theme color reference for the AB2HR design system.
 *
 * These values mirror the CSS custom properties in `app/globals.css`.
 * To change the theme, update both this file and `globals.css`.
 * All colors map to standard Tailwind CSS palette names.
 *
 * Convert hex → oklch at https://oklch.com
 */

export const themeColors = {
  light: {
    primary: { tailwind: "violet-800", hex: "#5B21B6" },
    secondary: { tailwind: "teal-500", hex: "#14B8A6" },
    accent: { tailwind: "violet-100", hex: "#EDE9FE" },
    background: { tailwind: "slate-100", hex: "#F1F5F9" },
  },
  dark: {
    primary: { tailwind: "violet-500", hex: "#8B5CF6" },
    secondary: { tailwind: "teal-400", hex: "#2DD4BF" },
    accent: { tailwind: "violet-950", hex: "#2E1065" },
    background: { tailwind: "slate-950", hex: "#020617" },
  },
} as const
