var number=+prompt("Enter the number, so thet we can figure out it wheather Odd or Even!!!")
while(isNaN(number)){
        var issue=+prompt("Something gone wrong, please rewrite")
        if(!isNaN(issue)){
            if(issue%2==0){
              alert("Your number is Even!")
          }else{
              alert("Your number is Odd!")
          }
      }
}
if(number%2==0){
    alert("Your number is Even!")
}else{
    alert("Your number is Odd!")
}