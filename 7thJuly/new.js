let students = [2, 5, 10, 7, 5] 

function attendance(studentsInClass, student){
let check = 'Not Present'
  for(let i = 0; i < studentsInClass.length; i++){
    if(studentsInClass[i]==student){
      check = `Present`
    }
  }return check
  
}console.log(attendance(students, 10))