// code your solution here
function superbowlWin(arr) {
  let res = "";
  const result = arr.find((item) => {
    if (item.result == "W") {
      res = item.year;
      return res;
    } else {
      res = undefined;
      return res;
    }
  });
  return res;
}
