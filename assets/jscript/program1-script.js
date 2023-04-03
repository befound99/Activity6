
function checkInteger(){
  let userInput = parseFloat(document.querySelector("#input-number").value);

  console.log(userInput)
  if (userInput > 0){
    document.querySelector("#result").value = "This is a Positive Integer"
  } else if (userInput < 0){
    document.querySelector("#result").value = "This is a Negative Integer"
  } else if (userInput == 0){
    document.querySelector("#result").value = "This is a Zero"
  } else if (userInput == ""){
    document.querySelector("#result").value = ""
  }
  
}