let n = 5;

for (let i = 1; i <= 5; i++) {
let string  = '';
let space = ' ';
for(let j = 1; j<=5; j++){
  if (i+j==4 || j == (n+i)-3){
    string = string + i
  }if(string != '3'){if(j == (n+ i) - 7){
    string = string + (6-i)
  }}
  if(i+j==8 && i==4){
    string = string + (2)
  }


 
 
  string = string + space;
}console.log(string);

}
