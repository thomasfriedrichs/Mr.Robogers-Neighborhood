// buisiness logic

function returnNumbers(usernumber) {
  let numbers = []
  for (let i = 0; i <= usernumber; i ++) {
    numbers.push(i)
    if (numbers[i].toString().includes(3)) {
      numbers[i] = "Won't you be my neighbor?"
    } else if (numbers[i].toString().includes(2)) {
      numbers[i] = "Boop!"
    } else if (numbers[i].toString().includes(1)) {
      numbers[i] = "Beep!"
    }
  }  
  return numbers
}

// ui logic 
$(document).ready(function () {
  $("form#form").submit(function (e) { 
    let result = returnNumbers("#input");
    $(".result").append(result);
    e.preventDefault();
  });
});