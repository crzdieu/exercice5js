function toggle(){
var firstNumber = Math.round(document.getElementById('firstNumber').value);
            var secondNumber = document.getElementById('secondNumber').value;
            if (isNaN(firstNumber)==false && isNaN(secondNumber)==false){
              var result = firstNumber * secondNumber;
              alert(result);
            }else{
              alert("Vous devez rentrez une chaine de nombre");
            }
            }
