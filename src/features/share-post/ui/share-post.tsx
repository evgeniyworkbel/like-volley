"use client";

import { LinkIcon } from "@/shared/icons";
import { cn } from "@/shared/lib";
import {
  FacebookIcon,
  FacebookShareButton,
  OKIcon,
  OKShareButton,
  TelegramIcon,
  TelegramShareButton,
  ThreadsIcon,
  ThreadsShareButton,
  VKIcon,
  VKShareButton,
} from "react-share";
import { toast } from "sonner";

type SharePostProps = { className?: string; url?: string };

export function SharePost({ className, url = window.location.href }: SharePostProps) {
  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => toast.success("Ссылка успешно скопирована"))
      .catch((err) => {
        toast.error("Произошла ошибка при копировании ссылки");
        console.error("Failed to copy link: ", err);
      });
  };

  return (
    <section
      className={cn("flex items-center gap-2.5 rounded-full bg-[#F9FAFB] px-3 py-2", className)}
    >
      <FacebookShareButton url={url} aria-label="Поделиться этой ссылкой в Facebook">
        <FacebookIcon size={24} round />
      </FacebookShareButton>
      <TelegramShareButton url={url} aria-label="Поделиться этой ссылкой в Telegram">
        <TelegramIcon size={24} round />
      </TelegramShareButton>
      <VKShareButton url={url} aria-label="Поделиться этой ссылкой в ВКонтакте">
        <VKIcon size={24} round />
      </VKShareButton>
      <OKShareButton url={url} aria-label="Поделиться этой ссылкой в Одноклассники">
        <OKIcon size={24} round />
      </OKShareButton>
      <ThreadsShareButton url={url} aria-label="Поделиться этой ссылкой в Threads">
        <ThreadsIcon size={24} round />
      </ThreadsShareButton>
      <span className="h-6 w-0.5 shrink-0 bg-[#CACACA]" />
      <button className="cursor-pointer text-accent-orange" onClick={handleCopyLink}>
        <LinkIcon />
      </button>
    </section>
  );
}
