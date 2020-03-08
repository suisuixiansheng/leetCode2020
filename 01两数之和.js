var twoSum = function(nums, target) {
    const length = nums.length;
    let hash = new Map();       
    for (let index = 0; index < length; index++) {
        let numToFind = target - nums[index];                 
        if (hash.has(numToFind) && index !== hash.get(numToFind)) { 
            return [hash.get(numToFind),index];         
        }       
        hash.set(nums[index], index); 
    }
};