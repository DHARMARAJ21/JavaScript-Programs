function palindrome(n){
    let word=n.split("").reverse().join("");
    if(word===n){
        console.log("Palindrome");
    }
    else{
        console.log("Not a Palindrome");
    }

}
palindrome("madam");