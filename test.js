var createTargetArray = function(nums, index) {
    const output = [];
    
    index.forEach(ele => {
        output.push(nums[ele])
    })
    
    console.log(output)
    return output;
};

const nums = [0,1,2,3,4];
const index = [0,1,2,2,1];

// []

createTargetArray(nums, index);