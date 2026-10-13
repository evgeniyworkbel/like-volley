// todo: удалить после дебага
console.log(
  "снаружи",
  process.env.NEXT_PUBLIC_SERVER_URL,
  process.env.VERCEL_PROJECT_PRODUCTION_URL,
  process.env.NEXT_PUBLIC_YANDEX_METRIKA_COUNTER_ID,
);

export const getServerSideURL = () => {
  // todo: удалить после дебага
  console.log(
    "внутри server",
    process.env.NEXT_PUBLIC_SERVER_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.NEXT_PUBLIC_YANDEX_METRIKA_COUNTER_ID,
  );

  return (
    process.env.NEXT_PUBLIC_SERVER_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000")
  );
};
