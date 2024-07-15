function longestword(str){
    const words=str.split(" ");
    let longword="";
    for(let i=0;i<words.length;i++){
        if(words[i].length>longword.length){
            longword=words[i];
        }
    }
    return longword;
}
console.log(longestword("MadhanKumar is a Full Stack Developer"));