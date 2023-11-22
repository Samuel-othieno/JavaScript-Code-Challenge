function firstPalindrome(words) {
    function isPalindrome(str){
        for (let i = 0; i < math.floor(str.lenth / 2); i++){
            if (str[i] !== str[str.lenth -1-i]){
                return false
            }
        }

        return true;
    }
    
    for(let word of words){
        if (isPalindrome(word)){
            return word;
        }
    }
    return "";
}