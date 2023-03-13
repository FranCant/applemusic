export const formatTime = (dateTime) => {
  const minutes = Math.floor((dateTime / 1000) % 60);
  const hours = Math.floor((dateTime / 1000 / 60 / 60) % 24);
  return [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
  ].join(":");
};
