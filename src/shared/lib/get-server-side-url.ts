export const getServerSideURL = () => {
  const productionUrl =
    process.env.NEXT_PUBLIC_SERVER_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (productionUrl) return `https://${productionUrl}`;
  return "http://localhost:3000";
};
