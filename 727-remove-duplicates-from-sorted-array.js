



var removeDuplicates = function(nums) {
    nums.sort((a,b) => { b - a}); // sort all integers including negatives
    for (let i=0; i<nums.length-1; i++) {
        if (nums[i] == nums[i+1]) {
            nums.splice(i,1);
            i--; // re-check against next element as well.
        }
    }
};


const test1 = [1,2,1,3,3,4];
const test2 = [1,1,2]
const test3 = [0,0,1,1,1,2,2,3,3,4]
const test4 = [-3,-1,0,0,0,3,3]
removeDuplicates(test3)
console.log('test 3 nums array: ', test3);
removeDuplicates(test4)
console.log('test 4 with negative numbers: ', test4);

// console.log('test 2: ', removeDuplicates(test2));