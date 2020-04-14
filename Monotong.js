const vowel = ["a","e","i","o","u"];
function checkNumOfVowel(compare)
{
    let p = compare;
    let numberofVowel=0;
    for (const char of p) {
        
        for (const vow of vowel) {
            vow===char?numberofVowel+=1:false;
        }
        
    }
    console.log(numberofVowel);
    
     
}
checkNumOfVowel("ayomide")