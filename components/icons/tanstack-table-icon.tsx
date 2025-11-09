export function TanstackTableIcon(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width="24"
      height="24"
      {...props}
    >
      <title>TanStack Table</title>
      <rect x={2} y={3} width={20} height={18} rx={2} ry={2} />
      <line x1={2} y1={8} x2={22} y2={8} />
      <line x1={2} y1={14} x2={22} y2={14} />
      <line x1={8} y1={3} x2={8} y2={21} />
      <line x1={16} y1={3} x2={16} y2={21} />
    </svg>
  );
}
