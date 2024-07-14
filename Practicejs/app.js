


// document.addEventListener('click', function () {
    
    let btn=document.getElementById('addButton')
    let firstNumber=document.getElementById('firstNumber');
    let secondNumber=document.getElementById('secondNumber');
    let result=document.getElementById('result');
    btn.addEventListener('click', function () {
      
      firstNumber = firstNumber.value ;
      secondNumber = secondNumber.value;
  
      // Perform the addition
      resultd = parseInt(firstNumber) + parseInt(secondNumber);
  
      // Display the result in the input field
      result.value = resultd;
    });
//   });