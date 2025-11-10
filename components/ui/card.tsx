export function Card({ className = "", children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg ${className}`}>
      {children}
    </div>
  );
}
export function CardHeader({ className = "", children }: { className?: string; children?: React.ReactNode }) {
  return <div className={`p-5 border-b border-white/10 ${className}`}>{children}</div>;
}
export function CardContent({ className = "", children }: { className?: string; children?: React.ReactNode }) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}
export function CardTitle({ className = "", children }: { className?: string; children?: React.ReactNode }) {
  return <div className={`text-lg font-semibold ${className}`}>{children}</div>;
}
