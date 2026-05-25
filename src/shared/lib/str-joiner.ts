/**
 * Joins an array of items into a string, filtering out falsy values
 *
 * @param {Array<string|number|null|undefined>} items - Array of items to join
 * @param {string} [separator=", "] - Separator string to use between items
 * @returns {string} A string containing all truthy items joined by the separator
 */
export const strJoiner = (
  items: Array<string | number | null | undefined>,
  separator = ", ",
): string => {
  return items.filter(Boolean).join(separator);
};
