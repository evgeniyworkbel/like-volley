type BadgeProps = { title: string };

export function Badge({ title }: BadgeProps) {
  return (
    <div className="flex w-fit items-center justify-center rounded-full border border-white bg-linear-to-b from-[oklch(0.6795_0.2075_39.59)] to-[oklch(0.4666_0.1369_40.39)] px-2.5 py-0.5">
      <p className="text-sm text-white xl:text-lg">{title}</p>
    </div>
  );
}
