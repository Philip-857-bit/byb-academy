import { Zap } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary shadow-[0_0_22px_hsl(var(--primary)/0.55)]">
        <Zap className="h-5 w-5 text-primary-foreground" strokeWidth={2.75} />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight text-foreground">
          THE MOVEMENT
        </span>
        <span className="text-[0.7rem] font-medium tracking-[0.35em] text-primary">
          ACADEMY
        </span>
      </div>
    </div>
  );
}
