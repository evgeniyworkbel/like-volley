export const formatPhone = (phoneNumber: string): string => {
  if (!phoneNumber.startsWith("+375") || phoneNumber.length !== 13) {
    throw new Error(
      "Invalid phone number format. Expected +375 followed by 9 digits.",
    );
  }

  const countryCode = phoneNumber.substring(0, 4);
  const operatorCode = phoneNumber.substring(4, 6);
  const restOfNumber = phoneNumber.substring(6);
  const restOfNumberWithHyphens = [
    restOfNumber.substring(0, 3),
    restOfNumber.substring(3, 5),
    restOfNumber.substring(5),
  ].join("-");
  return `${countryCode} (${operatorCode}) ${restOfNumberWithHyphens}`;
};
