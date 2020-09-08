function findMinAndRemove(array){
    let min = array[0]
    let minIndex = 0
    for (let i = 1; i < array.length; i++) {
        let element = array[i];
        if (element < min) {
            min = array[i]
            minIndex = i
        }
    }
    array.splice(minIndex, 1)
    return min
}

function selectionSort(array){
    let sortedArray = []
    while (array.length > 0) {
        sortedArray.push(findMinAndRemove(array))
    }
    return sortedArray
}
