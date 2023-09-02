function getPin(){
   const pin = getGeneratePin();
  const pinString = pin + '';

  if(pinString.length == 4){
     return pin;
  }
  else{
    return getPin();
  }
}

function getGeneratePin(){
   const random = Math.round(Math.random()*10000);
   return random;
}

document.getElementById('btn-gernerate').addEventListener('click', function(){
   const pin = getPin();

   const pinDisplayElement = document.getElementById('pin-display-field')
   pinDisplayElement.value= pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
  const number = event.target.innerText;
  
  const numberDisplayElement = document.getElementById('calculator-display')

  const previousTypeNumber = numberDisplayElement.value
  if (isNaN(number)) {
     if(number == 'C'){
        numberDisplayElement.value = ''
     }
     else if (number == '<') {
        const digits = previousTypeNumber.split('')
        digits.pop();
       const remaingDigit= digits.join('');
       numberDisplayElement.value = remaingDigit;

     }
  }
  else{
   
   const cuurentTypeNumber = previousTypeNumber + number
    numberDisplayElement.value = cuurentTypeNumber;
  }
  



})

// submit button
document.getElementById('btn-submit').addEventListener('click', function(){
   const pinDisplayElement = document.getElementById('pin-display-field')
  const pinNumber = pinDisplayElement.value

 const calculatorDisplayElement =  document.getElementById('calculator-display')
 const calculatorNumber =calculatorDisplayElement.value

 const pinSuccess = document.getElementById('pin-success')
 const pinFilure = document.getElementById('pin-failure')

 if(pinNumber == calculatorNumber){
   
   pinSuccess.style.display ='block'
   pinFilure.style.display  = 'none'


 }

 else{

   
   pinFilure.style.display  = 'block'
   pinSuccess.style.display ='none'
 }
})