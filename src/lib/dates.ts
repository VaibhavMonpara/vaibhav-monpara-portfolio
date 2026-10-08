// Helpers for "YYYY-MM" date strings used in src/data/profile.ts

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function toMonthIndex(ym: string | null, now = new Date()): number {
  if (!ym) return now.getFullYear() * 12 + now.getMonth();
  const [y, m] = ym.split("-").map(Number);
  return y * 12 + (m - 1);
}

export function formatMonth(ym: string | null): string {
  if (!ym) return "Present";
  const [y, m] = ym.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

export function formatRange(start: string, end: string | null): string {
  return `${formatMonth(start)} – ${formatMonth(end)}`;
}

/** Inclusive length of a role, e.g. "1 yr 9 mos". */
export function formatDuration(start: string, end: string | null): string {
  const months = toMonthIndex(end) - toMonthIndex(start) + 1;
  const y = Math.floor(months / 12);
  const m = months % 12;
  const parts: string[] = [];
  if (y) parts.push(`${y} yr${y > 1 ? "s" : ""}`);
  if (m) parts.push(`${m} mo${m > 1 ? "s" : ""}`);
  return parts.join(" ") || "1 mo";
}
