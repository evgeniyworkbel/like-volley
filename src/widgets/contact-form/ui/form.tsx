"use client";

import { Button } from "@/shared/ui";
import { useForm } from "react-hook-form";

export function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  console.log(watch("name"));

  return (
    <div className="flex w-full flex-col items-center gap-6 rounded-3xl bg-accent-blue p-6">
      <form
        className="flex flex-col text-base text-white [&_>input]:h-10 [&_>input]:w-full [&_>input]:rounded-lg [&_>input]:bg-white"
        onSubmit={handleSubmit((data) => {
          alert(JSON.stringify(data));
        })}
      >
        <label>Имя</label>
        <input {...register("name")} defaultValue="test" />

        <label>Телефон</label>
        <input
          className="text-foreground-secondary"
          placeholder="+375 (__) ___-__-__"
          {...register("phone", { required: true, maxLength: 10 })}
        />

        <Button className="rounded-[40px] bg-white px-10 py-4 text-lg xl:px-52">
          Отправить сообщение
        </Button>
      </form>
    </div>
  );
}
