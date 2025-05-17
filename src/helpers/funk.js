const truncateText = (text, wordCount) => {
  if (!text) return "";

  const words = text.split(" ");
  if (words.length > wordCount) {
    return words.slice(0, wordCount).join(" ") + "...";
  }

  return text;
};
export { truncateText };
