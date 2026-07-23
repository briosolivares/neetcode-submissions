class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // solution #1
        // let seen: number [] = []
        // for(let i=0; i < nums.length; i++){
        //     if (seen.includes(nums[i])){
        //         console.log(nums[i])
        //         return true
        //     }
        //     else{
        //         seen.push(nums[i])
        //     }
        // }

        // return false
        
        // solution #2
        // return new Set(nums).size != nums.length 

        // solution #3
        let hash_map: Map<number,number> = new Map()

        for(let i=0; i < nums.length; i++){
            if (hash_map.has(nums[i])){
                return true
            }
            else {
                console.log("not seen before")
                hash_map.set(nums[i], 1)
            }
        }

        return false



    }
}
