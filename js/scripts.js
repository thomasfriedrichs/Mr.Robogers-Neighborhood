function returnNumbers(usernumber) {
  let numbers = []
  for (let i = 0; i <= usernumber; i ++) {
    numbers.push(i)
    if (numbers[i].toString().includes(3)) {
      numbers[i] = "Won't you be my neighbor?"
    } else if (numbers[i].toString().includes(2)) {
      numbers[i] = ""
    }
  }  
  return numbers
}
returnNumbers(50);