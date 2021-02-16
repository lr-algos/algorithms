/**
 * Given two integer arrays of same size, nums and indexes, reorder elements in nums according to given indexes array.
 * Input: nums = [24, 56, 74, -23, 87, 91], indexes = [1, 2, 3, 0, 4, 5]
 * Output: [56, 74, -23, 24, 87, 91]
 */

 reorderPerIndex = (nums, index) => index.map(item => nums[item]);

 reorderPerIndex2 =(nums, index) => {
     let newArr  = [];
    for(let i=0; i<index.length; i++){
        newArr[i]=nums[index[i]]
      }
      return newArr;
 }

   
         
 nums = [24, 56, 74, -23, 87, 91]
 index = [1, 2, 3, 0, 4, 5]

 console.log(reorderPerIndex(nums, index))
 console.log(reorderPerIndex2(nums, index))