// Given a string, return the string after changing the uppercase characters to lowercase and lowercase characters to uppercase.

function upperLower(strings) {
  strings = strings.split("")
for(let i=0; i<strings.length; i++){
  if(strings[i]===strings[i].toUpperCase()){
    strings[i] = strings[i].toLowerCase()
  }else{
    strings[i] = strings[i].toUpperCase()
  }
}
  return strings.join("")
}
console.log(upperLower("AirCampus"))

exports.upperLower = upperLower