
function checkOddEven(){
  let userInput = document.querySelector("#input-number").value;
  let integer = parseFloat(userInput);
  if ((integer % 2) == 0 || (integer%2) == -0){
    document.querySelector("#result").value = "This is an Even Integer";
  } else if(userInput == ""){
    document.querySelector("#result").value = "";
  }
  else {
    document.querySelector("#result").value = "This is an Odd Integer";
  }
}
