export const textCutter = (text) => {
  if (!text) return "";

  if (text.length > 5) {
    const newText = text.split(" ").slice(0, 5).join(" ");
    return newText;
  }
};
