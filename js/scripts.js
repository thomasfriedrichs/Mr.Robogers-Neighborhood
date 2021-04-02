function returnNumbers(usernumber) {
  let numbers = []
  for (let i = 0; i <= usernumber; i ++) {
    numbers.push(i)
    if (i === 32) {
      numbers[32] = "Won't you be my neighbor?"
    } else if (i === 21) {
      numbers[21] = "Boop"
    } else if (i === 13) {
      numbers[13] = "Won't you be my neighbor?"
    }
  }  
  return numbers
}
returnNumbers(50);