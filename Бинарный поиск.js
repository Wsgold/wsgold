const array = [0,3,2,5,6,8,23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,]
let count = 0

function reckSort(array, item, start, end){
    let middle = Math.floor((start + end) / 2);
    if (item === array[middle]) {
        return middle
    }
    if (item < array[middle]) {
        return reckSort(array, item, start, middle - 1)
    } else {
        return reckSort(array, item, middle + 1, end)
    }
}

console.log(reckSort(array, 23, 0, array.length))