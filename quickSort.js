const quickSort = (arr) => {
    if (arr.length < 2) // array of length 0 or 1 is already sorted
        return arr;

    let pivot = arr[0];
    let less = [];
    let greater = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            less.push(arr[i]);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > pivot) {
            greater.push(arr[i]);
        }
    }

    return [...quickSort(less), pivot, ...quickSort(greater)];
}

let arr = [2, 19, 5, 7, 1, 77, 17, 21, 22, 34, 16, 14]

console.log(quickSort(arr), 'quickSort(arr)')
