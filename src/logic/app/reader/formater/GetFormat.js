export function getFormat(paragraph) {
  if (!paragraph) return [];

  let words = paragraph.split(/\s+/);

  return words.map((word) => {
    let len = word.length;
    let keyIndex = -1;

    if (len >= 1 && len <= 3) keyIndex = 0;
    else if (len >= 4 && len <= 5) keyIndex = 1;
    else if (len >= 6 && len <= 9) keyIndex = 2;
    else if (len >= 10 && len <= 12) keyIndex = 3;
    else if (len >= 13) keyIndex = 4;

    if (keyIndex === -1 || len === 0) {
      return { before: "", opr: "", after: "" };
    }

    if (keyIndex >= len) keyIndex = len - 1;

    return {
      before: word.substring(0, keyIndex),
      opr: word.charAt(keyIndex),
      after: word.substring(keyIndex + 1),
    };
  });
}
