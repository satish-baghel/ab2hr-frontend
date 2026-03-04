/**
 * Premium theme color reference — Deep Violet + Gold.
 *
 * These values mirror the CSS custom properties in `app/globals.css`.
 * To change the theme, update both this file and `globals.css`.
 *
 * Light mode uses violet-tinted neutrals for a cohesive branded feel.
 * Dark mode uses zinc neutrals for clean contrast.
 */

export const themeColors = {
  light: {
    primary: { tailwind: "violet-900", hex: "#4C1D95" },
    secondary: { tailwind: "amber-600", hex: "#D97706" },
    accent: { tailwind: "violet-100", hex: "#EDE9FE" },
    background: { custom: "violet-tinted white", hex: "#F8F7FC" },
    muted: { custom: "violet-tinted gray", hex: "#EEEDF5" },
    border: { custom: "violet-tinted border", hex: "#E4E2EE" },
    foreground: { tailwind: "indigo-950", hex: "#1E1B4B" },
  },
  dark: {
    primary: { tailwind: "violet-600", hex: "#7C3AED" },
    secondary: { tailwind: "amber-500", hex: "#F59E0B" },
    accent: { tailwind: "indigo-950", hex: "#1E1B4B" },
    background: { tailwind: "zinc-950", hex: "#09090B" },
    muted: { tailwind: "zinc-800", hex: "#27272A" },
    border: { custom: "white 8%", hex: "rgba(255,255,255,0.08)" },
    foreground: { tailwind: "zinc-50", hex: "#FAFAFA" },
  },
} as const
