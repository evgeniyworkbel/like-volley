export const formatPhone = (value: string | number): string => {
  const phoneNumber = String(value);
  if (!phoneNumber.startsWith("375") || phoneNumber.length !== 12) {
    throw new Error("Invalid phone number format. Expected 375 followed by 9 digits.");
  }

  const countryCode = phoneNumber.substring(0, 3);
  const operatorCode = phoneNumber.substring(3, 5);
  const restOfNumber = phoneNumber.substring(5);
  const restOfNumberWithHyphens = [
    restOfNumber.substring(0, 3),
    restOfNumber.substring(3, 5),
    restOfNumber.substring(5),
  ].join("-");
  return `+${countryCode} (${operatorCode}) ${restOfNumberWithHyphens}`;
};
