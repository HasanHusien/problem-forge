// tester("The quick brown fox jumps over the lazy dog.", true);
// tester("This is not a pangram.", false);
// tester("abcdefghijklmnopqrstuvwxy .", false);

function isPangram(string) {
  if (string) {
    const check = "The quick brown fox jumps over the lazy dog.";
    const mySet = new Set(string);
    const req = [...mySet];

    let regexx = /\w+/gi;

    const lee = "abcdefghijklmnopqrstuvwxyz".split("").sort().join("");
    const res = req
      .join("")
      .match(regexx)
      .join("")
      .toLowerCase()
      .split("")
      .sort()
      .join("");

    const newSet = new Set(res);
    const iHope = [...newSet].join("");

    return iHope.includes(lee);
  } else return false;
}

console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));
