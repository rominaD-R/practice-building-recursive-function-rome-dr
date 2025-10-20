// 1. Write a function named reverseString that takes a string as input.

// 2. The function should:
//      ○ Return the string itself if it contains only one character (base case).
//      ○ Use recursion to reverse the string by concatenating the last character of the string with the result of the 
//      recursive call on the remaining part of the string (recursive case).

// 3. Test the function with various string inputs to verify its correctness


function reverseString(string) {
    if (string.length == 0) {
        return '';
    }
    if (string.length == 1) {
        // console.log(string[0]);
        return string[0];
    }
    // console.log(string[string.length - 1]);
    // console.log(string[string.length - 1] + reverseString(string.slice(0, (string.length - 1))));
    // string.pop;
    return string[string.length - 1] + reverseString(string.slice(0, (string.length - 1)));
}

console.log(reverseString('under the sea'));
console.log(reverseString('Wreck-It Ralph'));
console.log(reverseString(''));
