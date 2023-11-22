function fizzBuzz(str1, str2) {
    let length = str1.length + str2.length;
    let result = "";

    if (length % 3 === 0) {
        result += "Fizz";
    }

    if (length % 5 === 0) {
        result += "Buzz";

    }

    return result || "";
}

console.log('1')