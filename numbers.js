function sumOfNumbers(input) {
    if (input.trim() === "") {
        return 0;
    }

    return input.split(",").reduce((sum, num) => {
        const parsedNum = parseFloat(num);
        if (isNaN(parsedNum)) {
            return sum + 0;
        }
        return sum + parsedNum;
    }, 0);
}

console.log(sumOfNumbers("1,2,3,4,5"));
console.log(sumOfNumbers("30,60,twenty,40"));
console.log(sumOfNumbers(""));
console.log(sumOfNumbers("11,12,13,4.5,5")); 
console.log(sumOfNumbers("0,0,0,0")); 


