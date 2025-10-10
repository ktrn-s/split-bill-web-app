const button = document.querySelector("#calculate");
button.addEventListener("click", calculateAmount);

const buttonSavings = document.querySelector("#addToSavings");
buttonSavings.addEventListener("click", showSavings);

function showSavings(e) {
    e.preventDefault();

    savings.style.display = "block";
}

function calculateAmount(e) {
    e.preventDefault();
    const rent = document.querySelector("#rent").value;
    const gas = document.querySelector ("#gas").value;
    const electric = document.querySelector("#Electric").value;
    const internet = document.querySelector("#wifi").value;
    const people = document.querySelector("#pplAmount").value;
    const savings = document.querySelector("#savings").value;
    
    if (isNaN(rent) || isNaN(gas) || isNaN(electric) || isNaN(internet) || isNaN(savings) || isNaN(people) || people ==="") {
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Please enter correct information!",
            });
    }

    let rentPerPerson = rent/people;
    console.log(rentPerPerson);

    let billTotal = parseFloat(gas) + parseFloat(electric) + parseFloat(internet);
    console.log("Total bills:", billTotal);

    let billPerPerson = billTotal/people;
    console.log("bills per person", billPerPerson);

    let savingsPerPerson = (billTotal * parseFloat(savings)) / parseFloat(people);
    console.log("savings per person:", savingsPerPerson);

    let totalSum = rentPerPerson + billPerPerson + savingsPerPerson;
    console.log(totalSum);
    
    rentPerPerson = rentPerPerson.toFixed(2);
    billTotal = billTotal.toFixed(2);
    billPerPerson= billPerPerson.toFixed(2);
    savingsPerPerson = savingsPerPerson.toFixed(2);
    totalSum = totalSum.toFixed(2);

    document.querySelector("#ShowDividedRent").textContent = rentPerPerson;
    document.querySelector("#ShowDividedBills").textContent = billPerPerson;
    document.querySelector("#ShowDividedSavings").textContent = savingsPerPerson;
    document.querySelector("#ShowDividedTotal").textContent = totalSum;

}
