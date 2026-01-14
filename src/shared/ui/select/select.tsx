import { Select as BaseSelect } from "@base-ui/react/select";
import { SelectArrow } from "./select-arrow";
import { CitiesModel } from "@/shared/types";

type SelectProps = {
  items: CitiesModel[];
  value?: string;
  onChange: VoidFunction;
};

export function Select({ items, value, onChange }: SelectProps) {
  return (
    <BaseSelect.Root items={items} value={value} onValueChange={onChange}>
      <BaseSelect.Trigger className="flex h-10 w-full items-center justify-between gap-3 rounded-xl bg-white px-3 text-base text-foreground focus:outline-none">
        <BaseSelect.Value />
        <BaseSelect.Icon>
          <SelectArrow />
        </BaseSelect.Icon>
      </BaseSelect.Trigger>
      <BaseSelect.Portal>
        <BaseSelect.Positioner
          className="w-(--anchor-width) outline-none select-none"
          side="bottom"
          sideOffset={-40}
        >
          <BaseSelect.Popup className="min-w-(--anchor-width) rounded-xl bg-white">
            <BaseSelect.List className="flex max-h-(--available-height) flex-col gap-5 overflow-y-auto py-2.5">
              {items.map((item) => (
                <BaseSelect.Item
                  key={item.id}
                  className="grid grid-cols-[12_1fr] items-center text-base leading-3 outline-none select-none"
                  value={item.value}
                >
                  <BaseSelect.ItemText className="col-start-2 py-1">
                    {item.label}
                  </BaseSelect.ItemText>
                </BaseSelect.Item>
              ))}
            </BaseSelect.List>
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
}
