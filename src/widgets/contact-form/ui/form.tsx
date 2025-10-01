"use client";

import { Button } from "@/shared/ui";
import { useForm } from "react-hook-form";
import { WarningIcon } from "./warning-icon";

export function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "+375 (__) ___-__-__",
    },
  });

  console.log(watch("name"));

  return (
    <div className="flex w-full flex-col items-center gap-6 rounded-3xl bg-accent-blue p-6">
      <form
        className="flex flex-col items-center gap-6"
        onSubmit={handleSubmit((data) => {
          alert(JSON.stringify(data));
        })}
      >
        <div className="flex w-full flex-col gap-1.5">
          <label className="text-white">Имя</label>
          <input {...register("name")} className="h-10 rounded-lg bg-white" />
        </div>

        <div className="flex w-full flex-col gap-1.5">
          <label className="text-white">Телефон</label>
          <input
            className="h-10 rounded-lg bg-white pl-3 text-foreground-secondary"
            {...register("phone", { required: true, maxLength: 10 })}
          />
          {errors.phone && <WarningIcon />}
        </div>

        <Button className="rounded-[40px] bg-white px-10 py-4 text-lg text-foreground xl:px-52">
          Отправить сообщение
        </Button>
      </form>
    </div>
  );
}
