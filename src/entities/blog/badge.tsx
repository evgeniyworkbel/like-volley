type BadgeProps = {
  label: string;
};

export function Badge({ label }: BadgeProps) {
  return (
    <span className="inline-flex w-fit items-center justify-center rounded-full border border-white bg-linear-to-b from-[oklch(0.6795_0.2075_39.59)] to-[oklch(0.4666_0.1369_40.39)] px-2.5 py-0.5 text-xs text-white">
      {label}
    </span>
  );
}
