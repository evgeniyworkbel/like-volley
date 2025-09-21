import { Button } from "@/shared/ui";

export function Form() {
  return (
    <div className="flex w-full flex-col items-center gap-6 rounded-3xl bg-accent-blue p-6">
      <div className="flex h-[600px]"></div>
      <Button className="rounded-[40px] bg-white px-10 py-4 text-lg xl:px-52">
        Отправить сообщение
      </Button>
    </div>
  );
}
