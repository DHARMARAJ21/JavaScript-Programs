function count(str){
    let charCount={};
    for(let char of str){
        charCount[char]=charCount[char]+1 || 1;
    }
    return charCount;
}
console.log(count("Hello World!"));