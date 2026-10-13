// todo: удалить после дебага
/** @deprecated */
export const envLogger = (prefix: string) => {
  console.log("run envLogger");
  console.log(prefix, {
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
    VERCEL_PROJECT_PRODUCTION_URL: process.env.VERCEL_PROJECT_PRODUCTION_URL,
    NEXT_PUBLIC_YANDEX_METRIKA_COUNTER_ID: process.env.NEXT_PUBLIC_YANDEX_METRIKA_COUNTER_ID,
  });
};

envLogger("на уровне файла");

export const getServerSideURL = () => {
  // todo: удалить после дебага
  envLogger("внутри getServerSideURL");

  return (
    process.env.NEXT_PUBLIC_SERVER_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000")
  );
};
