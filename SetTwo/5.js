function longestCommonPrefix(str) {
   
    if (str.length === 0) {
        return "";
    }

    let prefix = str[0];

    for (let i = 1; i < str.length; i++) {
        while (str[1].indexOf(prefix) !== 0) {
            prefix = str.slice(0, -1);

            if (prefix === "") {

                return "";
                
            }
        }
    }
    return prefix;
}
console.log(longestCommonPrefix(["flower", "flow", 'flights']))