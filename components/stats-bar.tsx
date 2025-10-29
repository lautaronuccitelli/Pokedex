export default function StatsBar({ label, value, max = 200 }: { label: string; value: number; max?: number }) {
  const percentage = (value / max) * 100;
  
  return (
    <div className="flex items-center gap-2">

    </div>
  );
}