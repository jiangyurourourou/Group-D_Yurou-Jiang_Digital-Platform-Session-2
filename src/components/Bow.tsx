export function Bow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 20" className={`inline-block h-4 w-6 align-middle text-muted-foreground ${className}`} fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <path d="M16 10C12 4 4 2 3 6s7 6 13 4zM16 10c4-6 12-8 13-4s-7 6-13 4z" />
      <path d="M15 11l-4 8M17 11l4 8" strokeLinecap="round" />
      <circle cx="16" cy="10" r="1.6" fill="currentColor" />
    </svg>
  );
}
