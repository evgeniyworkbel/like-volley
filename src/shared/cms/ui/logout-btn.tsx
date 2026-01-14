"use client";

import { useTranslation } from "@payloadcms/ui";
import { logoutAction } from "../actions";
import { useRouter } from "next/navigation";

export default function LogoutBtn() {
  const { i18n } = useTranslation();
  const router = useRouter();

  const labels: Record<string, string> = {
    en: "Quit admin-panel",
    ru: "Покинуть админ-панель",
  };

  const handleLogout = async () => {
    await logoutAction();
    router.push("/");
  };

  return <button onClick={handleLogout}>{labels[i18n.language] ?? labels.en}</button>;
}
