const factorio = (number) => {
    if (number === 1)
        return 1;

    return number * factorio(number - 1);
}

console.log(factorio(5), 'factorio');


// no recursion sum of all elements in a

const sumOfItems = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

const arr = [1, 3, 5, 7, 9];

console.log(sumOfItems(arr), 'sum of items');
