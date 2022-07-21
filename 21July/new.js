// Given two strings, check if they are anagrams or not. If they are anagrams return true else return false.

function anagram(str1, str2){
  str1 = str1.split('').sort().join('')
  str2 = str2.split('').sort().join('')
  
  if(str1==str2){
    return true
  }return false
  
  
}console.log(anagram('hello','world'))