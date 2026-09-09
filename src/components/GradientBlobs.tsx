export function GradientBlobs({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="animate-blob absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-brand-blue/15 blur-[120px] dark:bg-brand-blue/30" />
      <div className="animate-blob-slow absolute top-1/3 -right-20 h-[28rem] w-[28rem] rounded-full bg-brand-violet/10 blur-[120px] dark:bg-brand-violet/25" />
      <div className="animate-blob absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-brand-blue/10 blur-[100px] dark:bg-brand-blue/15" />
    </div>
  );
}
