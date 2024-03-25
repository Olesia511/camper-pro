export const sentenceSlice = (text) => {
  if (text.length > 25 && text.length < 64) {
    return text.slice(0, 25) + "...";
  }
  let sentences = text.split(".");

  if (text.length >= 64) {
    if (sentences[0].length >= 64) {
      return sentences[0].slice(0, 64) + "...";
    }
    return sentences[0] + ".";
  }
  return text;
};

export const firstLetterUppercase = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const splitWordsFunc = (text) => {
  const splitWord = text.split(/(?=[A-Z])/);
  const formatedWord = [];

  splitWord.map((word, i) => {
    if (i === 0) {
      formatedWord.push(word.charAt(0).toUpperCase() + word.slice(1));
    } else {
      formatedWord.push(word.charAt(0).toLowerCase() + word.slice(1));
    }
  });
  return formatedWord.join(" ");
};

export const splitDataFunc = (data) => {
  return data.split(/(?<number>\d+(?:\.\d+)?)(?:\/(?<unit>[a-z]{5}))?|(?<separator>\/)/g).join(" ");
};
