class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        seen_map = {

        }

        for num in nums:
            seen_map[num] = seen_map.get(num, 0) + 1
            if seen_map[num] > 1:
                return True
        return False
