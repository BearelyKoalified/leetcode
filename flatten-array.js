let arr = [1,[1,2,[[5,6],7],2,3,4]];


function flatten(arr) {
    let flattened = [];

    function flatten(item) {
        if (Array.isArray(item)) {
            item.forEach(flatten)
        } else {
            flattened.push(item);
        }
    }
    flatten(arr);
    return flattened;
}



console.log('arr: ', flatten(arr))


