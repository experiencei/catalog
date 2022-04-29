// palidrome
// , startIndex , endIndex, subs
// function PalindromeChecker(str ) {

//     let len = str.length;
//     let start = str.substring(0 , Math.floor(len/2)).toLowerCase();
//     let end = str.substring(len - Math.floor(len/2)).toLowerCase();
//     let flip = end.split('').reverse().join('');
//     return ( start === flip)

// }
// console.log(PalindromeChecker('c'));
// console.log(PalindromeChecker('radar'));
// console.log(PalindromeChecker('redder'));
// console.log(PalindromeChecker('chuk'));

// let NO_OF_CHARS = 256;


// function canAnagramPalindrome(str) {
//     let count = new Array(NO_OF_CHARS);
//     count.fill( 0 );

//     for (let i = 0; i < str.length; i++) {
//         count[str[i].charCodeAt()]++;
//     }
//    let odd = 0;
//    for(let i = 0; i < NO_OF_CHARS; i++) {
//        if((count[i] & 1) != 0 )
//        odd++;

//        if (odd > 1) 
//         return false;
//    }

//    return true; 
// }


// var canMakePaliQueries = function(s, sav , sav2 , sav3) {

//   const queries = multiArrtoOne(sav , sav2 , sav3)

//     let val = [];
//     for (const q of queries) {
//       if (q[2] >= 26) {
//         val.push(true);
//         continue;
//       }
//       let d = cFrmPalindrome(s.substring(q[0], q[1] + 1));
//       d > q[2] ? val.push(false) : val.push(true);
//     }
//     return val.map((item) => {
//         if(item) {
//             return "1"
//         }  
//         return "0"
//     }).join("").toString();
//   };

//  function multiArrtoOne(array1 , array2 , array3) {
//     const queriest = []
//      for (let i = 0; i < array1.length; i++) {
  
//          let query1 = array1[i];
//          let query2 = array2[i];
//          let query3 = array3[i];
         
//          queriest.push([query1, query2, query3])
//      }
      
//      return queriest
//   }

//   function cFrmPalindrome(s) {
//     let counter = [];
//     counter.length = 26;
//     counter.fill(0);
//     for (let i = 0; i < s.length; i++) {
//         counter[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] = (counter[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] + 1) % 2;
//     }
  
//     return Math.floor(counter.reduce((a, b) => a + b , 0) / 2)
//   }

//  console.log(canMakePaliQueries("cdecd" , [0, 0 , 0 , 0] ,  [0 , 1 , 2, 3] , [0 , 1 , 1 ,0]));


// console.log()



 

// var maxChunksToSorted = function(arr) { b
//     let res = 0,
//         max = Number.NEGATIVE_INFINITY;
//     for(let i = 0; i < arr.length; ++i) {
//         max = Math.max(max, arr[i]);
//         max === i && res++;
//     }
//     return res;
// };

var maxChunksToSorted = function(arr) {

   
    let n = arr.length;
    let ans = 0, max_so_far = 0;

    for (let i = 0; i < n; ++i) {


        // Find maximum in prefix arr[0..i]

        max_so_far = Math.max(max_so_far, arr[i]);


        // If maximum so far is equal to index,

        // we can make a new partition ending at

        // index i.

        if (max_so_far === i)

            ans++;

    }

    return ans;
    
}

console.log(maxChunksToSorted([4 , 3, 2 , 1, 0]));


//    let n = arr.length;
    //    let result = 0, max_result = 0;
    //     for (let i = 0; i < n; ++i) {
 
    //         // Find maximum in prefix arr[0..i]
    //         max_result = Math.max(max_result, arr[i]);
 
    //         // If maximum so far is equal to index,
    //         // we can make a new partition ending at
    //         // index i.
    //         if (max_result === i)
    //         result++;
    //     }
    //     return result;




    // var max = 0;
    // var chunk = 0;
    
    // for(var i=0; i<arr.length; i++) {
    //     max = Math.max(arr[i], max);
    //     console.log(`max ${max}`);
    //     if(i===max) {
    //         chunk++;
    //         console.log(chunk);
    //     }

        
    // }
    
    // return chunk;