export const getLatestByUpdatedAt = <T extends { updatedAt: string }>(docs: T[]): T | undefined => {
  if (docs.length === 0) return undefined;
  const latest = docs.reduce((acc, item) =>
    new Date(item.updatedAt) > new Date(acc.updatedAt) ? item : acc,
  );
  return latest;
};
