type Status = "stable" | "in-progress" | "deprecated";

const config: Record<Status, { pill: string; dot: string; label: string }> = {
  stable: {
    pill: "bg-green-50 text-green-700 border border-green-200",
    dot: "bg-green-500",
    label: "Stable",
  },
  "in-progress": {
    pill: "bg-amber-50 text-amber-700 border border-amber-200",
    dot: "bg-amber-400",
    label: "In Progress",
  },
  deprecated: {
    pill: "bg-red-50 text-red-600 border border-red-200",
    dot: "bg-red-500",
    label: "Deprecated",
  },
};

export function ComponentStatus({ status }: { status: Status }) {
  const { pill, dot, label } = config[status];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${pill}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
      {label}
    </span>
  );
}
