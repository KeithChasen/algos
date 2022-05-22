// binary search

const binarySearch = (sortedArray, numberToFind) => {
    let lowIndex = 0;
    let highIndex = sortedArray.length - 1;

    let numberTry = 1;

    while (lowIndex <= highIndex) {
        let mid = parseInt((lowIndex + highIndex) / 2);
        let guess = sortedArray[mid];

        console.log(
            mid, 'mid',
            guess, 'guess',
            lowIndex, 'lowIndex',
            highIndex, 'highIndex'
        )

        if (guess === numberToFind)
            return [ mid, numberTry ];

        if (guess > numberToFind)
            highIndex = mid - 1;

        else
            lowIndex = mid + 1;

        numberTry++;
    }

    return [ null, numberTry ];
}


const testList = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33];
const [ index, tries ] = binarySearch(testList, 5);

console.log('index', index, 'tries', tries)