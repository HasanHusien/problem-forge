
function findShort(s) {
  const update = s.split().map((item, i) => {
    return Math.min(item[i].length + 1);
  });
  console.log(update);
}
console.log(findShort('travel abroad shall we'));
