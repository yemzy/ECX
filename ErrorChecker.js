function ErrorChecker(a)
{
    typeof(a)==="undefined"?console.log("Error"):console.log(typeof(a));
    
    
}

ErrorChecker("how are you");
ErrorChecker();