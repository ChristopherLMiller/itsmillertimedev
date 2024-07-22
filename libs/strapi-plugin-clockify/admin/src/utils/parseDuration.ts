export const parseDuration = (duration: string) => {
  const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;

  // Match the duration string against the regex
  const matches = duration.match(regex);

  // Extract the captured groups (hours, minutes, seconds)
  const hours = matches[1] || "0";
  const minutes = matches[2] || "0";
  const seconds = matches[3] || "0";

  // Format the output
  const formattedDuration = `${hours} hr, ${minutes} min, ${seconds} sec`;
  return formattedDuration;
};
