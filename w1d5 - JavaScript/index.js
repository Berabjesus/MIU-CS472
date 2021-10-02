function max(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number" ) {
    return null;
  } else if(num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

function maxOfThree(num1, num2, num3) {
  return max(max(num1, num2), num3);
}

function isVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"]
  return vowels.some((e) => e === char.toLowerCase() )
}

function sum(arr) {
  return arr.reduce((agg, elem) => agg + elem)
}

function multiply(arr) {
  return arr.reduce((agg, elem) => agg * elem)
}

function reverse(string) {
  return string.split("").reverse().join("")
}

function findLongestWord(arr) {
  let longest = arr[0];
  arr.forEach(element => {
    longest = longest.length < element.length ? element : longest;
  });
  return longest.length;
}

function findLongestWords(arr, i) {
  return arr.filter((element) => element.length > i)
}

const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem * 3;
})
document.writeln(b.toString() + "<br/>");
const c = a.filter(function(elem, i, array){
  return elem === 3;});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
document.writeln(d+ "<br/>");

function myFunctionTest(expected, found) {

  if(Array.isArray(expected) && Array.isArray(found)) {
    expected = expected.toString();
    found = found.toString();
  }

  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

console.log("Expected output of max(5,44) is 44  " + myFunctionTest(44, max(5, 44)));

console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));

console.log("Expected output of isVowel('Z') is false  " + myFunctionTest(false, isVowel('Z')));

console.log("Expected output of sum([1,10,20]) is 31  " + myFunctionTest(31, sum([1,10,20])));

console.log("Expected output of multiply([1,10,20]) is 200  " + myFunctionTest(200, multiply([1,10,20])));

console.log("Expected output of reverse('Bereket') is 'tekereB'  " + myFunctionTest('tekereB', reverse("Bereket")));

console.log("Expected output of findLongestWord(['abc', 'abcd', 'a', 'ab', 'abcdef']) is 6  " + myFunctionTest(6, findLongestWord(['abc', 'abcd', 'a', 'ab', 'abcdef'])));

console.log("Expected output of findLongestWords(['abc', 'abcd', 'a', 'ab', 'abcdef'], 3) is ['abcd', 'abcdef']  " + myFunctionTest(["abcd" , "abcdef"], findLongestWords(['abc', 'abcd', 'a', 'ab', 'abcdef'], 3)));
