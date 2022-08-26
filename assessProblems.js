//O(n^2)
const addTooZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let x = 0; x < arr.length; x++) {
            if (arr[i] + arr[x] === 0) {
                return true
            }
        }
    }
    return false
}
console.log(addTooZero([-5, 2, 1, 5]));

//O(n^2)
const uniqueChars = (str) => {
    for (let i = 0; i < str.length; i++) {
        for (let x = 0; x < str.length; x++) {
            if (str.charAt(i) === str.charAt(x)) {
                return false
            }
        }
    }
    return true
}
console.log(uniqueChars('helloworld'))

// O(n)
function isPangram(str) {
    let strArr = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let i = 0; i < alphabet.length; i++) {
        if (strArr.indexOf(alphabet[i]) < 0) {
            return false;
        }
    }
    return true;
}
console.log(isPangram("A quick brown fox jumps over the lazy dog"))

//O(n)
function findLongestWord(arr) {
   let longestWord = arr.sort(function(a, b){ return b.length - a.length})
   return longestWord[0].length
}
console.log(findLongestWord(["hi", "hello"]));