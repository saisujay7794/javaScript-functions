function eligibilityTOVote() {
  let age = document.getElementById("age").value;
  let resultElement = document.getElementById("accepted1");

  if (age !== "") {
    if (age >= 18) {
      resultElement.innerText = "You are eligible to vote.";
    } else {
      resultElement.innerText = "You are not eligible to vote yet.";
    }
    resultElement.style.display = "block";
  } else {
    resultElement.style.display = "none";
  }
}

function numberTable() {
    let number = document.getElementById("table").value;
    let resultElement = document.getElementById("accepted2");
    if(number !== ""){
        let tableContent = '';
        for (let i = 1; i <= 10; i++) {
            const result = number * i;
            tableContent += `${number} x ${i} = ${result}<br>`;
        }
        resultElement.innerHTML = tableContent;
        resultElement.style.display = "block";
    }else{
        resultElement.style.display = "none";
    }
}

function dollarToRupee(){
    let dollars = document.getElementById("currency").value;
    let resultElement = document.getElementById("accepted3");
    if(dollars !== ""){
        const rupees = dollars*82.08;
        resultElement.innerHTML = `${dollars} dollars = ${rupees} rupees`;
        resultElement.style.display = "block";
    }else{
        resultElement.style.display = "none";
    }
}