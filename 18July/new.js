let myarr = [2,5,7,4,1]

function find_min_max(arr){
  let max = arr.indexOf(Math.max(...arr))
  let min = arr.indexOf(Math.min(...arr))
  
  return [(max+1), (min+1)]
}console.log(find_min_max(myarr))
