const trimTest = str => str.trim();
const toLowerCase = str => str.toLowerCase();

function cleanText (str) {
    return toLowerCase(trimTest(str));
}
console.log(cleanText("      JaVascript     "));

