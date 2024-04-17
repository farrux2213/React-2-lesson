function fullJustify(words, maxWidth) {
  const result = [];
  let line = [];
  let lineLength = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (lineLength + line.length + word.length > maxWidth) {
      result.push(justifyLine(line, maxWidth, false));
      line = [];
      lineLength = 0;
    }
    line.push(word);
    lineLength += word.length;
  }

  // Justify the last line (left-justified)
  result.push(justifyLine(line, maxWidth, true));

  return result;
}

function justifyLine(words, maxWidth, isLastLine) {
  const spacesNeeded =
    maxWidth - words.reduce((acc, word) => acc + word.length, 0);
  const spacesBetweenWords = words.length - 1;

  if (isLastLine || spacesBetweenWords === 0) {
    // Left-justify the last line or if only one word in the line
    return (
      words.join(" ") +
      " ".repeat(maxWidth - words.join("").length - spacesBetweenWords)
    );
  }

  const spacesPerWord = Math.floor(spacesNeeded / spacesBetweenWords);
  const extraSpaces = spacesNeeded % spacesBetweenWords;

  let justifiedLine = "";
  for (let i = 0; i < words.length - 1; i++) {
    justifiedLine +=
      words[i] + " ".repeat(spacesPerWord + (i < extraSpaces ? 1 : 0));
  }
  justifiedLine += words[words.length - 1]; // Last word without extra spaces

  return justifiedLine;
}

// Test case
const words = ["This", "is", "an", "example", "of", "text", "justification."];
const maxWidth = 16;
console.log(fullJustify(words, maxWidth));
