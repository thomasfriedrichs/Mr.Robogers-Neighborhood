function returnNumbers(usernumber) {
  let numbers = []
  for (let i = 0; i <= usernumber; i ++) {
    numbers.push(i)
    if (i === 3) {
      numbers[3] = "Won't you be my neighbor?"
    } 
  }  
  return numbers
}
returnNumbers(50);