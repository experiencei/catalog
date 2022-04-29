// var maxChunksToSorted = function(arr) {
//     let workingArr = [...arr].sort((a,b)=> a-b);
//     let plusOne = 0, plusTwo = 0, maxNumCount = 0;
//     for (let i = 0; i< arr.length; i++){
//         plusOne+= arr[i];
//         plusTwo+= workingArr[i];
//         if (plusOne===plusTwo){
//             maxNumCount += 1;
//             plusOne = 0;
//             plusTwo = 0;
//         }   
//     }       
//     return maxNumCount   
// };

// console.log(maxChunksToSorted([ 2 , 5 , 1  , 9 , 7 , 6]));

// var waysToSplit = function (A) {
//     const n = A.length;
//     const mod = 1e9 + 7;
//     const pre = [...A];
//     for (let i = 1; i < n; i++) pre[i] += pre[i - 1];
//     let res = 0;
//     for (let i = 0; i < n; i++) {
//       const left = pre[i];
//       if (left > pre[n - 1] / 3) break;
  
//       // First binary search find the smallest possible ending idx of mid arr: j
//       let [l, r] = [i + 1, n - 2];
//       while (l < r) {
//         const mid = (l + r) >> 1;
//         const midV = pre[mid] - pre[i];
//         if (midV < left) l = mid + 1;
//         else r = mid;
//       }
//       // Double check
//       if (pre[l] - pre[i] < left) continue;
//       const j = l;
  
//       // Second binary search find the largest possible ending idx of mid arr: k
//       r = n - 2;
//       while (l < r) {
//         const mid = (l + r) >> 1;
//         const midV = pre[mid] - pre[i];
//         const rightV = pre[n - 1] - pre[mid];
//         if (midV <= rightV) l = mid + 1;
//         else r = mid - 1;
//       }
      
//       // Double check
//       if (pre[l] - pre[i] > pre[n - 1] - pre[l] || l >= n - 1) {
//         l--;
//         if (pre[l] - pre[i] > pre[n - 1] - pre[l] || l < j) continue;
//       }
//       const k = l;
  
//       res += (k - j + 1) % mod;
//       res %= mod;
//     }
//     return res;
//   };

// var waysToSplit = function(nums) {
//     const modMe = 10 ** 9 + 7
//     const len = nums.length
    
//     const sumSF = new Array(len)
//     sumSF[-1] = 0
//     for (const [i, val] of nums.entries()) {
//         let prevOutcome = sumSF[-1 + i]
//         let outcome = val + prevOutcome
//         sumSF[i] = outcome
//     }
//     const total = sumSF[-1 + len]
    
    
//     let result = 0
//     eachToIndexA:
//     for (let toIndexA = 0, minToIndexB = 1, maxToIndexB = 1;
//     toIndexA < -2 + len; toIndexA++) {
//         const sumA = sumSF[toIndexA]
        
//         for (minToIndexB = Math.max(1 + toIndexA, minToIndexB);
//         minToIndexB < len - 1; minToIndexB++) {
//             const sumB = sumSF[minToIndexB] - sumA
//             const sumC = total - sumSF[minToIndexB]
            
//             // when it is impossible from now on
//             if (sumB > sumC)    continue eachToIndexA
//             // first minToIndexB that satisfies condition
//             if (sumB >= sumA)   break
//         }
//         if (minToIndexB === len - 1)    continue
        
        
//         for (maxToIndexB = Math.max(minToIndexB, maxToIndexB);
//         maxToIndexB < len - 1; maxToIndexB++) {
//             const sumB_ = sumSF[1 + maxToIndexB] - sumA
//             const sumC_ = total - sumSF[1 + maxToIndexB]
//             if (sumB_ > sumC_) {
//                 break
//             }
//         }
//         if (maxToIndexB === len - 1)
//             maxToIndexB--
        

//         let outcome = 1 + maxToIndexB - minToIndexB
//         result += outcome
//         result %= modMe
//     }
    
    
//     return result
// };

// [1,2,2,2,5,0] = 3

var waysToSplit = function(nums) {
    for(let i = 1; i < nums.length; i++) nums[i] += nums[i-1];
    let sum = nums[nums.length-1];
    if(!sum) return (((nums.length-2) * (nums.length-1)) / 2) % 1000000007;
	// if sum of array is zero, it's just a simple math problem.
    let res = 0;
    let aver = ~~(sum/3);
	//left array is impossible greater than one third of sum
    for(let i = 0, j = 1, k = 1; nums[i] <= aver; i++){
	//index j, k are range of mid array, when left array stops at index i
        while(nums[j]-nums[i]<nums[j]/2) j++;  
		//mid array have to be greater than left array
        if(i===j) j++;   
		//to avoid numbers at the beginning are all zeros
        while(sum-nums[k]>=nums[k]-nums[i]&&k<nums.length-1) k++;
		//mid array can not be greater than right array
        res+=k-j;
    }
    return res % 1000000007;
};


console.log(waysToSplit([1, 2, 0])); 
// const A = [1 , 2 ,3 ,5 ,6]
// const pre = [...A];
// console.log(pre);
