"use client";

import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { useMask } from "@react-input/mask";
import { zodResolver } from "@hookform/resolvers/zod";
import { navLinks } from "@/shared/constants";
import { cn } from "@/shared/lib";
import { Button } from "@/shared/ui";
import {
  formDefaultValues,
  formSchema,
  RESET_TIMEOUT_MS,
} from "../model/config";
import { ErrorMessage } from "./error-message";
import { SentMessage } from "./sent-message";
import { ContactFormModel } from "../model/types";

export function Form() {
  const {
    handleSubmit,
    reset,
    control,
    formState: { isValid, isSubmitted, isSubmitSuccessful },
  } = useForm<ContactFormModel>({
    defaultValues: formDefaultValues,
    resolver: zodResolver(formSchema),
  });

  const phoneRef = useMask({
    mask: "+375 (__) ___-__-__",
    replacement: { _: /\d/ },
  });

  const onSubmit = (data: ContactFormModel) => {
    console.log(data, "Done!");
    setTimeout(() => reset(formDefaultValues), RESET_TIMEOUT_MS);
  };

  const isDisabled = isSubmitted && !isValid;

  return (
    <div className="relative flex w-full flex-col items-center gap-6 rounded-3xl bg-accent-blue p-6">
      <form
        className="flex flex-col items-center gap-6 text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full rounded-[20px]">
          <Controller
            name="city"
            control={control}
            render={({ field, fieldState }) => {
              const { error } = fieldState;
              const errorMessage = error?.message;
              return (
                <label className="text-xl">
                  Группа:
                  <select
                    {...field}
                    className="mt-1.5 h-10 w-full appearance-none rounded-lg bg-white pl-3 text-base text-foreground focus:outline-none"
                  >
                    <option value="">Выберите город</option>
                    <option value="brest">Брест</option>
                    <option value="minsk">Минск</option>
                  </select>
                  {errorMessage && <ErrorMessage message={errorMessage} />}
                </label>
              );
            }}
          />
        </div>

        <div className="w-full">
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => {
              const { error } = fieldState;
              const errorMessage = error?.message;
              return (
                <label className="text-white">
                  Имя
                  <input
                    {...field}
                    className="mt-1.5 h-10 w-full rounded-lg bg-white pl-3 text-foreground focus:outline-none"
                  />
                  {errorMessage && <ErrorMessage message={errorMessage} />}
                </label>
              );
            }}
          />
        </div>

        <div className="w-full">
          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState }) => {
              const { error } = fieldState;
              const errorMessage = error?.message;
              const { ref, ...restField } = field;
              return (
                <label className="text-white">
                  Телефон
                  <input
                    {...restField}
                    ref={(node) => {
                      ref(node);
                      if (node) {
                        phoneRef.current = node;
                      }
                    }}
                    className="mt-1.5 h-10 w-full rounded-lg bg-white pl-3 text-foreground-secondary focus:outline-none"
                    placeholder="+375 (__) ___-__-__"
                  />
                  {errorMessage && <ErrorMessage message={errorMessage!} />}
                </label>
              );
            }}
          />
        </div>

        <div className="flex w-full flex-col gap-1.5">
          <Controller
            name="message"
            control={control}
            render={({ field, fieldState }) => {
              const { error } = fieldState;
              const errorMessage = error?.message;
              return (
                <label className="text-white">
                  Сообщение
                  <textarea
                    {...field}
                    placeholder="Расскажите о ваших целях..."
                    className="mt-1.5 min-h-66 w-full rounded-lg bg-white py-3 pr-2 pl-3 text-foreground-secondary focus:outline-none"
                  />
                  {errorMessage && <ErrorMessage message={errorMessage} />}
                </label>
              );
            }}
          />
        </div>

        <div className="flex w-full justify-start gap-2 xl:justify-end">
          <Controller
            name="agreement"
            control={control}
            render={({ field }) => {
              const { value, ...restField } = field;
              return (
                <label className="flex items-start gap-2 text-sm text-white">
                  <input
                    type="checkbox"
                    {...restField}
                    className="mt-0.5 h-5 w-5 rounded"
                    checked={value}
                  />
                  <span className="flex flex-col xl:flex-row">
                    Я согласен на обработку моих&nbsp;
                    <Link
                      className="hover:underline"
                      href={navLinks.policy.href}
                    >
                      персональных данных
                    </Link>
                  </span>
                </label>
              );
            }}
          />
        </div>

        <Button
          className={cn(
            "rounded-[40px] bg-white px-9 py-4 text-lg text-foreground hover:bg-gradient-to-br hover:text-white xl:px-52",
            {
              "bg-[oklch(0.6559_0.1604_257.81)] text-white": isSubmitted,
              "from-[oklch(0.438_0.268_270.5)] to-[oklch(0.312_0.222_270.3)] hover:bg-gradient-to-br":
                !isSubmitted,
              "bg-[oklch(0.7818_0.062_256.94)] opacity-25": isDisabled,
            },
          )}
          disabled={isDisabled}
        >
          Отправить сообщение
        </Button>
      </form>
      {isSubmitSuccessful && <SentMessage />}
    </div>
  );
}
