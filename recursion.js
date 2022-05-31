const factorio = (number) => {
    if (number === 1)
        return 1;

    return number * factorio(number - 1);
}

console.log(factorio(5), 'factorio');


// no recursion sum of all elements in array

const sumOfItems = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

const arr = [1, 3, 5, 7, 9];

console.log(sumOfItems(arr), 'sum of items');


// Recursion Way to sum all elements in array

const recursionSumOfItems = (arr) => {
    if(!arr.length)
        return 0;

    const [currentItem, ...newArr] = arr;

    return currentItem + recursionSumOfItems(newArr);
}

const arr2 = [2, 4, 6, 8, 10, 12, 14];

console.log(recursionSumOfItems(arr2), 'recursion sum of items');