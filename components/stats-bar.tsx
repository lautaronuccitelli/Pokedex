export default function StatsBar({ label, value, max = 200 }: { label: string; value: number; max?: number }) {
  const percentage = (value / max) * 100;
  
  return (
    <div className="flex items-center gap-2">
      <div className="w-32 text-sm capitalize">{label}</div>
      <div className="flex-1 bg-gray-200 rounded h-4">
        <div className="bg-blue-500 h-4 rounded" style={{ width: `${Math.min(percentage, 100)}%` }} />
      </div>
      <div className="w-12 text-sm text-right">{value}</div>
    </div>
  );
}