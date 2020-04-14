function TheArrays(array1,array2)
{
    let intersection=[];
    for (const arry1 of array1) 
    {
        for (const arry2 of array2)
         {
             arry1===arry2?intersection.push(arry2):"";
        }    
    }
    console.log(intersection);
    
}
TheArrays([5,6,9,7],[5,6,3,7]);