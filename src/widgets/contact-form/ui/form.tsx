"use client";

import { Button } from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMask } from "@react-input/mask";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  ContacfFormModel,
  ContacfFormModelType,
  formDefaultValues,
} from "../model/config";
import { WarningMessage } from "./warning-message";
import { cn } from "@/shared/lib";
import Link from "next/link";
import { navLinks } from "@/shared/constants";
import { SentMessage } from "./sent-message";

export function Form() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitted },
  } = useForm<ContacfFormModelType>({
    resolver: zodResolver(ContacfFormModel),
    defaultValues: {
      phone: formDefaultValues.phone,
      city: formDefaultValues.city,
    },
  });

  const phoneRef = useMask({
    mask: "+375 (__) ___-__-__",
    replacement: { _: /\d/ },
  });

  const onSubmit: SubmitHandler<ContacfFormModelType> = (data) => {
    console.log(data, "Done!");
  };

  const isDisabled = !isValid || isSubmitted;

  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center gap-6 rounded-3xl bg-accent-blue p-6",
        // {не понятно как добавить тень}
        {
          "bg-[oklch(0.5381_0.2545_270.46)]": isSubmitted,
        },
      )}
    >
      {isSubmitted && <SentMessage />}
      <form
        className="flex flex-col items-center gap-6 text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full rounded-[20px]">
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <label className="text-xl">
                Группа:
                <select
                  {...field}
                  className="mt-1.5 h-10 w-full appearance-none rounded-lg bg-white pl-3 text-base text-foreground focus:outline-none"
                >
                  <option value="chooseCity">Выберите город</option>
                  <option value="brest">Брест</option>
                  <option value="minsk">Минск</option>
                </select>
              </label>
            )}
          />
        </div>

        <div className="w-full">
          <label className="text-white">
            Имя
            <input
              {...register("name")}
              className="mt-1.5 h-10 w-full rounded-lg bg-white pl-3 text-foreground focus:outline-none"
            />
          </label>
        </div>

        <div className="w-full">
          <Controller
            name="phone"
            control={control}
            render={({ field }) => {
              const { ...restField } = field;
              return (
                <label className="text-white">
                  Телефон
                  <input
                    {...restField}
                    ref={(node) => {
                      if (node) {
                        phoneRef.current = node;
                      }
                    }}
                    className="mt-1.5 h-10 w-full rounded-lg bg-white pl-3 text-foreground-secondary focus:outline-none"
                    placeholder="+375 (__) ___-__-__"
                  />
                </label>
              );
            }}
          />
          {errors.phone && <WarningMessage />}
        </div>

        <div className="flex w-full flex-col gap-1.5">
          <label className="text-white">Сообщение</label>
          <textarea
            {...register("message")}
            placeholder="Расскажите о ваших целях..."
            className="min-h-66 rounded-lg bg-white py-3 pr-2 pl-3 text-foreground-secondary focus:outline-none"
          />
        </div>

        <div className="flex w-full justify-start gap-2 xl:justify-end">
          <input
            {...register("agreement")}
            type="checkbox"
            className="h-5 w-5 rounded"
          />
          <label className="flex flex-col text-sm text-white xl:flex-row">
            Я согласен на обработку моих&nbsp;
            <Link className="hover:underline" href={navLinks.policy.href}>
              персональных данных
            </Link>
          </label>
        </div>

        <Button
          className={cn(
            "rounded-[40px] bg-white px-9 py-4 text-lg text-foreground hover:bg-gradient-to-br hover:text-white xl:px-52",
            {
              "bg-[oklch(0.6559_0.1604_257.81)] text-white": isSubmitted,
              "from-[oklch(0.438_0.268_270.5)] to-[oklch(0.312_0.222_270.3)] hover:bg-gradient-to-br":
                !isSubmitted,
            },
          )}
          disabled={isDisabled}
        >
          Отправить сообщение
        </Button>
      </form>
    </div>
  );
}
