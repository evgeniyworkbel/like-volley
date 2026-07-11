export const formatReadingTime = (minutes: number) => {
  const pluralRule = new Intl.PluralRules("ru-RU");
  const key = pluralRule.select(minutes);
  const forms: Record<Intl.LDMLPluralRule, string> = {
    one: "минута",
    two: "минуты",
    few: "минуты",
    many: "минут",
    other: "минуты",
    zero: "минут",
  };

  return `${minutes} ${forms[key]}`;
};
