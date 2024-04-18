function strStr(haystack, needle) {
  if (needle === "") {
    return 0;
  }

  let index = haystack.indexOf(needle);

  return index;
}

console.log(strStr("sadbutsad", "but")); // Output: 0
