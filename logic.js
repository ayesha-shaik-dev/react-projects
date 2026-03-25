
//Prime Number
function isPrime(n){
 if(n <= 1) return false
 for(let i=2;i<n;i++){
   if(n % i === 0) return false
 }
 return true
}

// Reverse String
function reverse(str){
 let res = ""
 for(let i=str.length-1;i>=0;i--){
   res += str[i]
 }
 return res
}

// Remove Duplicates
function removeDuplicates(arr){
 let result=[]
 for(let i=0;i<arr.length;i++){
   if(!result.includes(arr[i])){
     result.push(arr[i])
   }
 }
 return result
}
