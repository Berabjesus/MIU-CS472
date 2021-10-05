function sum(arr) {
  return arr.reduce((agg, elem) => agg + elem)
}

function multiply(arr) {
  return arr.reduce((agg, elem) => agg * elem)
}

function reverse(string) {
  return string.split("").reverse().join("")
}

function findLongestWords(arr, i) {
  return arr.filter((element) => element.length > i)
}