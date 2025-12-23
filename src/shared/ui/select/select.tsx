import { Select as BaseSelect } from "@base-ui/react/select";
import { SelectArrow } from "./select-arrow";
import { CitysModel } from "@/widgets/sign-up-for-workout/model/types";

type SelectModel = {
  items: CitysModel[];
  value: string;
  onChange: VoidFunction;
};

export function Select({ items, value, onChange }: SelectModel) {
  return (
    <BaseSelect.Root items={items} value={value} onValueChange={onChange}>
      <BaseSelect.Trigger className="mt-1.5 flex h-10 w-full items-center justify-between gap-3 rounded-lg bg-white pr-3 pl-3 text-base text-foreground">
        <BaseSelect.Value />
        <BaseSelect.Icon>
          <SelectArrow />
        </BaseSelect.Icon>
      </BaseSelect.Trigger>
      <BaseSelect.Portal>
        <BaseSelect.Positioner className="BaseSelect-none z-10 outline-none" sideOffset={8}>
          <BaseSelect.Popup className="group min-w-(--anchor-width) rounded-xl bg-white bg-clip-padding text-foreground shadow-lg outline-1 transition-[transform,scale,opacity] data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0 data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] data-[side=none]:data-ending-style:transition-none data-[side=none]:data-starting-style:scale-100 data-[side=none]:data-starting-style:opacity-100 data-[side=none]:data-starting-style:transition-none dark:shadow-none">
            {/* <BaseSelect.ScrollUpArrow className="top-0 z-1 flex h-4 w-full cursor-default items-center justify-center rounded-md bg-[canvas] text-center text-xs before:absolute before:left-0 before:h-full before:w-full before:content-[''] data-[side=none]:before:-top-full" /> */}
            <BaseSelect.List className="relative max-h-(--available-height) scroll-py-6 overflow-y-auto py-1">
              {items.map(({ label, value }) => (
                <BaseSelect.Item
                  key={label}
                  value={value}
                  className="data-highlighted:text-gray-50 data-highlighted:before:bg-gray-900 BaseSelect-none grid cursor-default grid-cols-[0.75rem_1fr] items-center gap-2 py-2 pr-4 pl-2.5 text-sm leading-4 outline-none group-data-[side=none]:pr-12 group-data-[side=none]:text-base group-data-[side=none]:leading-4 data-highlighted:relative data-highlighted:z-0 data-highlighted:before:absolute data-highlighted:before:inset-x-1 data-highlighted:before:inset-y-0 data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm pointer-coarse:py-2.5 pointer-coarse:text-[0.925rem]"
                >
                  <BaseSelect.ItemIndicator className="col-start-1"></BaseSelect.ItemIndicator>
                  <BaseSelect.ItemText className="z-50 col-start-2">{label}</BaseSelect.ItemText>
                </BaseSelect.Item>
              ))}
            </BaseSelect.List>
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
}
