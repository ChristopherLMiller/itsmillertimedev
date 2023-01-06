export const countWords = (text: string): number => {
  const convertedString = text
    .replace(/(^\s*)|(\s*$)/gi, ` `)
    .replace(/[ ]{2,}/gi, ` `)
    .replace(/\n /, `\n`);
  return convertedString.split(` `).length;
};
