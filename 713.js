/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    if (k == 0) return 0
    let answer = 0
    let product = 1
    let left = 0
    for (let right = 0; right < nums.length; right++) {
        product *= nums[right]
        while (left <= right && product >= k) {
            product /= nums[left++]
        }
        answer += right - left + 1
    }
    return answer
};