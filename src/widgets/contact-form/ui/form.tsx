"use client";

import { Button } from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMask } from "@react-input/mask";
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import ReactSelect from "react-select";
import { formSchema, formSchemaType } from "../lib/form-shema";
import { WarningIcon } from "./warning-icon";
import { useState } from "react";
import { cn } from "@/shared/lib";

export function Form() {
  const [isSubmitted, setIsSubmitted] = useState<false | true>(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ReactSelect: { value: "change", label: "Выберите город" },
    },
  });

  const phoneRef = useMask({
    mask: "+375 (___) ___-__-__",
    replacement: { _: /\d/ },
  });

  const onSubmit: SubmitHandler<formSchemaType> = (data) => {
    setIsSubmitted(!isSubmitted);
    console.log(data, "Done!");
  };
  const onError: SubmitErrorHandler<formSchemaType> = (errors) =>
    console.log(errors);

  console.log(isValid, errors.phone);

  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center gap-6 rounded-3xl bg-accent-blue p-6",
        {
          "bg-[oklch(0.5381_0.2545_270.46)]": isSubmitted === true,
        },
      )}
    >
      {isSubmitted && (
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-shantell font-bold text-[oklch(0.701_0.2122_145.88)] xl:text-6xl">
          Отправлено!
        </span>
      )}
      <form
        className="flex flex-col items-center gap-6 text-white"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div className="flex w-full flex-col gap-1.5 rounded-[20px]">
          <label className="text-xl font-semibold">Группа:</label>
          <Controller
            name="ReactSelect"
            control={control}
            render={({ field }) => (
              <ReactSelect
                {...field}
                className="text-foreground"
                options={[
                  { value: "brest", label: "Брест" },
                  { value: "minsk", label: "Минск" },
                ]}
              />
            )}
          />
        </div>

        <div className="flex w-full flex-col gap-1.5">
          <label className="text-white">Имя</label>
          <input
            className="h-10 rounded-lg bg-white pl-3 text-foreground"
            {...register("name")}
          />
        </div>

        <div className="flex w-full flex-col gap-1.5">
          <label className="text-white">Телефон</label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                ref={phoneRef}
                className="h-10 w-full rounded-lg bg-white pl-3 text-foreground-secondary"
                placeholder="+375 (__) ___-__-__"
              />
            )}
          />
          {errors.phone && <WarningIcon />}
        </div>

        <div className="flex w-full flex-col gap-1.5">
          <label className="text-white">Сообщение</label>
          <textarea
            placeholder="Расскажите о ваших целях..."
            className="min-h-66 rounded-lg bg-white py-3 pr-2 pl-3 text-foreground-secondary"
            {...register("message")}
          />
        </div>

        <div className="flex w-full items-start gap-2">
          <input
            id="consent"
            type="checkbox"
            className="border-gray-300 text-blue-600 focus:ring-blue-500 mt-1 h-5 w-5 rounded"
            {...register("consent")}
          />
          <label htmlFor="consent" className="text-sm text-white">
            Я согласен на обработку моих персональных данных
          </label>
        </div>

        <Button
          className="rounded-[40px] bg-white px-9 py-4 text-lg text-foreground xl:px-52"
          disabled={!isValid}
        >
          Отправить сообщение
        </Button>
      </form>
    </div>
  );
}
