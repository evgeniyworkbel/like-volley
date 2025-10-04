export function WarningIcon() {
  return (
    <p className="flex items-center justify-end gap-2 pt-1.5 text-xs text-white">
      <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-accent-orange">
        !
      </span>
      <span className="flex">Поле должно быть заполнено</span>
    </p>
  );
}
