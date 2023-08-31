//JavaScript to find the min, max, mean, median, and range of 3 numbers



function makeArr() {
    //declares an array
    let numArr = [];
    
    //fills the array with the numbers inputted by the user
    let num1 = parseFloat(document.getElementById("first").value);
    let num2 = parseFloat(document.getElementById("second").value);
    let num3 = parseFloat(document.getElementById("third").value);
    numArr[0] = num1;
    numArr[1] = num2;
    numArr[2] = num3;
    
    if (Number.isNaN(num1) || Number.isNaN(num2) || Number.isNaN(num3))
    {
        alert("Please enter 3 numbers before continuing.");
    }
    else 
    {
        let min = findMin(numArr);
        //prints the minimum to the document
        document.getElementById("min").innerHTML = min;
        
        let max = findMax(numArr);
        //prints the maximum to the document
        document.getElementById("max").innerHTML = max;
        
        let mean = findMean(numArr);
        //prints the mean to the document
        document.getElementById("mean").innerHTML = mean;
        
        let median = findMedian(numArr);
        //prints the median to the document
        document.getElementById("median").innerHTML = median;
        
        let range = findRange(numArr);
        //prints the range to the document
        document.getElementById("range").innerHTML = range;
    }
}




function findMin(numArr) {
    let min = numArr[0];
    
    for (let i = 0; i < numArr.length; i++)
    {
        if (numArr[i] < min)
        {
            min = numArr[i];
        }
    }
    
    return min;
}



function findMax(numArr) {
    let max = numArr[0];
    
    for (let i = 0; i < numArr.length; i++)
    {
        if (numArr[i] > max)
        {
            max = numArr[i];
        }
    }
    
    return max;
}



function findMean(numArr) {
    let sum = 0;
    let mean = 0;
    
    for (let i = 0; i < numArr.length; i++)
    {
        sum += numArr[i];
    }
    
    mean = sum / numArr.length;
    
    return mean;
}



function findMedian(numArr) {
    let median = 0;
    
    //sorts the array
    numArr = numArr.sort((a, b) => a - b);
    
    median = numArr[1];
    
    return median;
}



function findRange(numArr) {
    let min = findMin(numArr)
    let max = findMax(numArr)
    let range = max - min;
    
    return range;
}