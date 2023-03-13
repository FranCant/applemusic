export const formatDate = (date) => {
  const year = date.toLocaleString().split("T")[0].split("-").slice(0, 1);
  const month = date.toLocaleString().split("T")[0].split("-").slice(1, 2);
  const day = date.toLocaleString().split("T")[0].split("-").slice(2, 4);

  const newDate = [day, month, year].join("/");

  return newDate;
};
