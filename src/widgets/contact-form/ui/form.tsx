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
import { formSchema, formSchemaType } from "../lib/form-shema";
import { WarningIcon } from "./warning-icon";
import { useState } from "react";
import { cn } from "@/shared/lib";
import Link from "next/link";
import { navLinks } from "@/shared/constants";
import { SentMessage } from "./sent-message";

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
      phone: "",
      citySelect: "change",
    },
  });

  const phoneRef = useMask({
    mask: "+375 (__) ___-__-__",
    replacement: { _: /\d/ },
  });

  const onSubmit: SubmitHandler<formSchemaType> = (data) => {
    setIsSubmitted(!isSubmitted);
    console.log(data, "Done!");
  };
  const onError: SubmitErrorHandler<formSchemaType> = (errors) =>
    console.log(errors);

  console.log(isValid, errors);

  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center gap-6 rounded-3xl bg-accent-blue p-6",
        // {не понятно как добавить тень}
        {
          "bg-[oklch(0.5381_0.2545_270.46)]": isSubmitted === true,
        },
      )}
    >
      {isSubmitted && <SentMessage />}
      <form
        className="flex flex-col items-center gap-6 text-white"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div className="flex w-full flex-col gap-1.5 rounded-[20px]">
          <label className="text-xl font-semibold">Группа:</label>
          <Controller
            name="citySelect"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                className="h-10 w-full appearance-none rounded-lg bg-white pl-3 text-foreground"
              >
                <option value="change" disabled>
                  Выберите город
                </option>
                <option value="brest">Брест</option>
                <option value="minsk">Минск</option>
              </select>
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
            className="border-gray-300 text-blue-600 focus:ring-blue-500 h-5 w-5 rounded"
            {...register("consent")}
          />
          <label
            htmlFor="consent"
            className="flex flex-col items-center text-sm text-white"
          >
            Я согласен на обработку моих&nbsp;
            <Link className="hover:underline" href={navLinks.policy.href}>
              персональных данных
            </Link>
          </label>
        </div>

        <Button
          className={cn(
            "rounded-[40px] bg-white px-9 py-4 text-lg text-foreground hover:bg-gradient-to-br hover:text-white xl:px-52",
            isSubmitted
              ? "bg-[oklch(0.6559_0.1604_257.81)] text-white"
              : "from-[oklch(0.438_0.268_270.5)] to-[oklch(0.312_0.222_270.3)] hover:bg-gradient-to-br",
          )}
          disabled={!isValid || isSubmitted}
        >
          Отправить сообщение
        </Button>
      </form>
    </div>
  );
}
