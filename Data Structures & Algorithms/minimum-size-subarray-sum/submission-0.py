class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        start = 0
        min_len = float('inf')
        subarray_sum = 0

        for end in range(len(nums)):
            subarray_sum += nums[end]
            while subarray_sum >= target: 
                min_len = min(end - start + 1, min_len)
                subarray_sum -= nums[start]
                start += 1 
        
        if min_len == float('inf'):
            return 0
        return min_len