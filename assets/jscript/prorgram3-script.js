function validate(){
  let ageInput;
  let age;
  let citizenshipInput;
  let citizenship;
  let recidencyInput;
  let recidency;

  ageInput = document.querySelector("#age-input").value;
  age = parseInt(ageInput);
  citizenshipInput = document.querySelector("#citizenship");
  citizenship = parseInt(citizenshipInput.selectedIndex);
  recidencyInput = document.querySelector("#recidency").value;
  recidency = parseInt(recidencyInput);
  if(age < 18) {
    alert ("Must be atleast 18 Years Old");
  }else if (citizenship == 0 || citizenship == 3) {
    alert ("Must be a Citizen of the Country");
  }else if (recidency < 12){
    alert ("Must be atleast 1 Year Resident");
  } else {
    let qualified = "YOU ARE QUALIFIED!";
    alert (qualified);
  }
}