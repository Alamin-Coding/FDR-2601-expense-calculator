export const formatDate = (date, locale = "en-US") => {
  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) return "";

  return new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(parsedDate);
};